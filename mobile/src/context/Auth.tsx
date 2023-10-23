import React, { useEffect } from "react";
import { ReactNode, SetStateAction, createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../api/api";
import { createClient } from "@supabase/supabase-js";




export interface AuthUserData {
  token: string
  user: {
    id: number;
    avatar: string;
    name: string;
    userName: string;
    email: string;
    password: string;
    saldo: number;
  }

}


export interface AuthContextDataProps {
  user: AuthUserData;
  singnIn: (data: AuthUserData) => Promise<void>;
  singnOut: () => void;
  setSaldo: (newSaldo: number) => void
  setAvatar: (avatar: Uint8Array) => void
}

interface AuthContextProviderProps {
  children: ReactNode;

}


export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<AuthUserData>({} as AuthUserData);
  const supabaseUrl = "db.qaqxkcmwxckcoxhbapql.supabase.co";
  const supabaseKey = "5cd9987af14f";

  const supabase = createClient(supabaseUrl, supabaseKey);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("userData");

      console.log(storagedUser);

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    }


    loadStorageData();
  }, []);


  // function setAvatar(avatar: string) {
  //   const newAvatar = user;
  //   newAvatar.user.avatar = avatar
  //   const imageBlob = new Blob([avatar], { type: 'image/jpeg' });
  //   const formData = new FormData();
  //   formData.append('image', imageBlob, 'image.jpg');
  //   console.log(imageBlob);
  //   try {

  //     api.patch(`/updateClient/${user.user.id}`, { avatar: formData })
  //       .then(response => {
  //         console.log(response.data)
  //       })

  //   } catch (error) {
  //     console.log(error);

  //   }
  //   AsyncStorage.setItem('userData', JSON.stringify(newAvatar));


  // }

  async function setAvatar(imageData: Uint8Array): Promise<string | null> {
    const { data, error, } = await supabase.storage
      .from("avatar")
      .upload("avatar.jpg", imageData);

    if (error) {
      console.error("Erro ao fazer upload da imagem:", error);
      return null;
    } else {

      console.log("Imagem enviada com sucesso. URL pública:");
      return "" || null;
    }
  }





  async function singnIn(data: AuthUserData) {
    if (data) {
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(data));
        setUser(data)

      } catch (error) {
        console.error("Error storing user data in AsyncStorage:", error);
      }

    }

  }
  function setSaldo(newSaldo: number) {
    try {
      const userData = user;
      userData.user.saldo = newSaldo;
      AsyncStorage.setItem('userData', JSON.stringify(userData));

    } catch (error) {

    }
  }
  function singnOut() {

    AsyncStorage.removeItem('userData').catch((error) => {
      console.error("Error removing user data from AsyncStorage:", error);
    })

    setUser({
      token: '',
      user: {
        email: '',
        name: "",
        avatar: "",
        id: 0,
        password: '',
        userName: "",
        saldo: 0
      },

    });


  }

  return (
    <AuthContext.Provider
      value={{
        singnOut,
        user,
        singnIn,
        setSaldo,
        setAvatar
      }}
    >

      {children}
    </AuthContext.Provider>
  )

}