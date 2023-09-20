import React, { useCallback, useEffect } from "react";
import { ReactNode, SetStateAction, createContext, useState } from "react";
import { api } from "../api/api";





export interface AuthTeacherData {


  id: number;
  name: string;
  userName: string;
  email: string;
  password: string;
  adm: boolean;
  teacher: boolean;
  star: number;
  matte_id: number;

}


export interface AuthContextDataProps {
  teacher: AuthTeacherData;
  getTeacher: (teacher: AuthTeacherData) => void;
  filterTeacher: AuthTeacherData[];
  getMatter: (id: string) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;

}


export const AuthContextTeacher = createContext({} as AuthContextDataProps);


export function AuthContextProviderTeacher({ children }: AuthContextProviderProps) {
  const [teacher, setTeacher] = useState<AuthTeacherData>({} as AuthTeacherData);
  const [filterTeacher, setFilterTeacher] = useState<AuthTeacherData[]>([]);




  const  getMatter = useCallback(async (id: string) => {
    await api.get(`matte/${id}`)
      .then(response => {

        setFilterTeacher(response.data);

      })
      .catch(erro => {
        console.log(erro);

      })

  }, [filterTeacher])

  function getTeacher(teacher: AuthTeacherData) {
    setTeacher(teacher)
  }

  console.log(teacher);


  return (
    <AuthContextTeacher.Provider
      value={{
        getTeacher,
        teacher,
        filterTeacher,
        getMatter

      }}
    >

      {children}
    </AuthContextTeacher.Provider>
  )

}