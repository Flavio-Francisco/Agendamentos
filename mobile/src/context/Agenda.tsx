import { ReactNode, createContext, useCallback, useState } from "react";


interface Agenda {
    date: Date;
    description: string;
  }

  interface Horarios{
    dateMak:Date | undefined;
    createDate:(date:Date)=>void;
  }

  interface AuthContextProviderProps {
    children: ReactNode;
    
  }
  export const AuthContext= createContext({} as Horarios );
 

  export function  AuthContextProvider({ children }: AuthContextProviderProps ){
    const [dateMak,setDateMak]=useState<Date | undefined>()
    const createDate = useCallback((date:Date)=>{
        setDateMak(date);
        console.log("essa é a data do contexto : " + dateMak);
        
      },[dateMak])
    return(
        <AuthContext.Provider
        value={{
            dateMak,
            createDate
        }}
        >
           {children}
        </AuthContext.Provider>
    )
  }