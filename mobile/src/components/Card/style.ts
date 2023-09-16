import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 360px;
  margin-top: 20px;
  margin-left: 15px;
  text-align: center;
  background-color: ${Theme.colors.white100};
  border-radius: 20px;
  border: 1px ${Theme.colors.greem};
`;

export const ConteinerTask = styled.TouchableOpacity`
  flex-direction: row;
  height: 100%;
  width: 80%;
  align-items: center;
  justify-content: center;
 
`;



export const TextCard = styled.Text`
  color: ${Theme.colors.greem};
  font-size: 16px;
  margin-left: 6px;
`;
export const AvatarTeacher = styled.Image`
  
  margin-top: -60px;
  height: 60px;
  width: 60px;
  border-radius: 50px;
`;
