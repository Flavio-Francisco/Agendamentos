import React, { useEffect } from "react";
import { ReactNode, SetStateAction, createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Float } from "react-native/Libraries/Types/CodegenTypes";


export interface AuthUserData {
  token: string
  user: {
    id: number;
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

}

interface AuthContextProviderProps {
  children: ReactNode;

}


export const AuthContext = createContext({} as AuthContextDataProps);


export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<AuthUserData>({} as AuthUserData);


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

  console.log(user);


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
        setSaldo
      }}
    >

      {children}
    </AuthContext.Provider>
  )

}