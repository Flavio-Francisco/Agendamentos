import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { api } from "../api/api";
import { AuthContext } from "./Auth";


interface Agenda {
  id: string;
  date: string;
  start_time: string;
  end_time: string;

}
interface DateAluno {
  id: string;
  date: string;
  start_time: string;
  available: boolean,
  prof_id: string;
  client_id: string;
  end_time: string;
  repeat: string;
  matter: string
}

interface Horarios {
  dateMak: Agenda[];
  dateAluno: DateAluno[];
  load: boolean;
  getDate: (id: string) => void;
  clearDate: () => void;
  agenda: (id: string) => void;
  dateUser: (id: number) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;

}
export const AuthContextDate = createContext({} as Horarios);


export function AuthContextProviderDate({ children }: AuthContextProviderProps) {
  const { user } = useContext(AuthContext)
  const [dateMak, setDateMak] = useState<Agenda[]>([])
  const [dateAluno, setAluno] = useState<DateAluno[]>([])
  const [load, setLoad] = useState(true)

  // horários disponiveis
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
  async function dateUser(id: number) {
    await api.get(`/getDateClient/${id}`)
      .then(respose => {
        setAluno(respose.data);
        setLoad(false)
        console.log(dateAluno);
      })
      .catch(erro => {
        console.log(erro);

      })
  }
  // Agenda o horário com id do horário como parametro

  async function agenda(id: string) {
    await api.patch(`/agenda/${id}`, {
      client_id: user?.user.id,
      avaliable: false,
      valor: 100
    })
      .then(response => {
        user.user.saldo = response.data
        console.log(response.data);

      })
      .catch(erro => {
        console.log(erro)
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
        getDate,
        agenda,
        dateAluno,
        dateUser,
        load,
      }}
    >
      {children}
    </AuthContextDate.Provider>
  )
}