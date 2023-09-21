import React, { useCallback, useEffect } from "react";
import { ReactNode, SetStateAction, createContext, useState } from "react";
import { api } from "../api/api";





export interface AuthTeacherData {


  id: string;
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
  matterfindAll: () => void;
  portuguese: AuthTeacherData[];
  mathematics: AuthTeacherData[];
  chemical: AuthTeacherData[];
  physical: AuthTeacherData[];
  biology: AuthTeacherData[];
  geography: AuthTeacherData[];
  english: AuthTeacherData[];
  history: AuthTeacherData[];
}
interface AuthContextProviderProps {
  children: ReactNode;

}


export const AuthContextTeacher = createContext({} as AuthContextDataProps);


export function AuthContextProviderTeacher({ children }: AuthContextProviderProps) {
  const [teacher, setTeacher] = useState<AuthTeacherData>({} as AuthTeacherData);
  const [filterTeacher, setFilterTeacher] = useState<AuthTeacherData[]>([]);

  const [portuguese, setPortuguese] = useState<AuthTeacherData[]>([]);
  const [mathematics, setMathematics] = useState<AuthTeacherData[]>([]);
  const [chemical, setCyhemical] = useState<AuthTeacherData[]>([]);
  const [physical, setPhysical] = useState<AuthTeacherData[]>([]);
  const [biology, setBiology] = useState<AuthTeacherData[]>([]);
  const [geography, setGeography] = useState<AuthTeacherData[]>([]);
  const [english, setEnglish] = useState<AuthTeacherData[]>([]);
  const [history, setHistory] = useState<AuthTeacherData[]>([]);






  const matterfindAll = useCallback(async () => {
    await api.get(`matte/1`)
      .then(response => {

        setPortuguese(response.data);
        console.log("portugues");

      })
      .catch(erro => {
        console.log(erro);

      })
    await api.get(`matte/2`)
      .then(response => {

        setCyhemical(response.data);
        console.log("quimica");

      })
      .catch(erro => {
        console.log(erro);

      })
    await api.get(`matte/3`)
      .then(response => {

        setPhysical(response.data);
        console.log("fisica");

      })
      .catch(erro => {
        console.log(erro);

      })
    await api.get(`matte/4`)
      .then(response => {

        setBiology(response.data);
        console.log("biologia");

      })
      .catch(erro => {
        console.log(erro);

      })
    await api.get(`matte/5`)
      .then(response => {

        setMathematics(response.data);
        console.log("matematica");

      })
      .catch(erro => {
        console.log(erro);

      })
    await api.get(`matte/6`)
      .then(response => {

        setGeography(response.data);
        console.log("geografia");

      })
      .catch(erro => {
        console.log(erro);

      })
    await api.get(`matte/7`)
      .then(response => {

        setEnglish(response.data);
        console.log("ingles");

      })
      .catch(erro => {
        console.log(erro);

      })
    await api.get(`matte/8`)
      .then(response => {

        setHistory(response.data);
        console.log("historia");

      })
      .catch(erro => {
        console.log(erro);

      })


  }, [])



  function getTeacher(teacher: AuthTeacherData) {
    setTeacher(teacher)
  }

  console.log(teacher);


  return (
    <AuthContextTeacher.Provider
      value={{
        biology,
        chemical,
        english,
        geography,
        history,
        mathematics,
        physical,
        portuguese,
        teacher,
        filterTeacher,
        matterfindAll,
        getTeacher,

      }}
    >

      {children}
    </AuthContextTeacher.Provider>
  )

}