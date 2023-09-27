import { ReactNode, createContext, useCallback, useState } from "react";
import { api } from "../api/api";


interface Agenda {
  id: string;
  date: string;
  start_time: string;
  end_time: string;

}

interface Horarios {
  dateMak: Agenda[];
  getDate: (id: string) => void;
  clearDate: () => void
}

interface AuthContextProviderProps {
  children: ReactNode;

}
export const AuthContextDate = createContext({} as Horarios);


export function AuthContextProviderDate({ children }: AuthContextProviderProps) {
  const [dateMak, setDateMak] = useState<Agenda[]>([])

  async function getDate(id: string) {
    await api.get(`/getDate/${id}`)
      .then(respose => {
        setDateMak(respose.data);
        console.log(dateMak);
      })
      .catch(erro => {
        console.log(erro);

      })
  }

  async function clearDate() {
    setDateMak([])
  }



  return (
    <AuthContextDate.Provider
      value={{
        dateMak,
        clearDate,
        getDate
      }}
    >
      {children}
    </AuthContextDate.Provider>
  )
}