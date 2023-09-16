import { RouteProp, useRoute } from "@react-navigation/native";
import { AvatarTeacher, Conteiner,
     ConteinerAvatar,
     ConteinerInput,
     NameTeacher,
     TextTeacher } from "./styles";
import Star from "../../components/Star";
import { useState } from "react";

     type RootStackParamList = {
        PerfilTeacher: {
            id:string;
            avatar:string;
            name:string;
            rating:number;
            modal:boolean
        };
      };
      type PerfilTeacherParams = RouteProp<RootStackParamList, 'PerfilTeacher'>;

     
export function StarRating(){
    const route = useRoute<PerfilTeacherParams>();
    const [number, setNumber] = useState(0);
    const{name,avatar,rating}=route.params
    return(
        <Conteiner >
           <ConteinerAvatar >
               <AvatarTeacher   source={{uri : avatar}} />
               <Star maxStars={5} rating={number} onRatingPress={()=>setNumber(rating)
                  
                }/>
           </ConteinerAvatar>
           <ConteinerInput>
               <NameTeacher>{name}</NameTeacher>
               <TextTeacher>Avalie o professor</TextTeacher>
           </ConteinerInput>

        </Conteiner>
    )
}