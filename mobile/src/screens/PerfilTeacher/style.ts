
import styled from "styled-components/native";
import { Theme } from "../../../Thema";




export const  Conteiner =  styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
  background-color:${Theme.colors.greem};
 

`;
export const  ConteinerName =  styled.View`
  height:10%;
   width:100%;
   align-items:center;
   margin-bottom:60px;

`;
export const  ConteinerAvatar =  styled.View`
  height:50%;
  width:100%;
  justify-content:center;
  align-items:center;
  background-color:${Theme.colors.white100};
 
`;
export const  ConteinerInput =  styled.View`
  height:50%;
  width:90%;
  justify-content:center;
  align-items:center;
  background-color:${Theme.colors.greem};
  border-radius:100px;
`;
export const AvatarTeacher = styled.Image`
height:200px;
width:200px;
border-radius:100px;
margin-bottom:40px;
`;

export const NameTeacher = styled.Text`
align-items:center;
height:90px;
font-size:25px;
font-weight:bold;
color:${Theme.colors.white100};
`;
export const TextTeacher = styled.Text`
align-items:center;
font-size:20px;
color:${Theme.colors.white100};
`;
export const  InputLesson =  styled.TouchableOpacity`

  height:60px;
  width:80%;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  border:2px  ${Theme.colors.greemOpacyd};
  padding:10px;
  gap:10px;
  margin-bottom:40px;
`;

