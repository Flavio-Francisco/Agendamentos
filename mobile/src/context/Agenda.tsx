import { ReactNode, createContext, useCallback, useState } from "react";


interface Agenda {
  id: string;
  date: string;
  start_time: string;
  end_time: string;

}

interface Horarios {
  dateMak: Date | undefined;
  createDate: (date: Date) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;

}
export const AuthContextDate = createContext({} as Horarios);


export function AuthContextProviderDate({ children }: AuthContextProviderProps) {
  const [dateMak, setDateMak] = useState<Date | undefined>()
  const createDate = useCallback((date: Date) => {
    setDateMak(date);
    console.log("essa é a data do contexto : " + dateMak);

  }, [dateMak])
  return (
    <AuthContextDate.Provider
      value={{
        dateMak,
        createDate
      }}
    >
      {children}
    </AuthContextDate.Provider>
  )
}