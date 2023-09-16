import { useState } from 'react';
import {  AvatarTeacher, Conteiner,
     ConteinerTask,
  
     TextCard,
     } from "./style";
import { useNavigation } from '@react-navigation/native';
    
interface PropsList{
    name:string;
    avatar:string;
}

export default function Card(props:PropsList){
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);
  

     
    return(
        <Conteiner>
            <ConteinerTask >
                <AvatarTeacher source={{uri:props.avatar}}/>
                 <TextCard >{props.name}</TextCard>
                
            </ConteinerTask>
            
        </Conteiner>
    )
}