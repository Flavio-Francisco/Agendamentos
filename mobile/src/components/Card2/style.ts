import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex-direction: column;
  width: 170px;
  height: 138px;
  margin-top: 25px;
  align-items:center;
  background-color: ${Theme.colors.greemOpacyd};
  border-radius: 20px;
  border: 1px ${Theme.colors.greem};
`;

export const ConteinerView = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-around;
  align-items:center;
  height: 100%;
  width: 80%;
  margin-bottom: 5px;

`;
export const ConteinerTask = styled.View`
  height: 25px;
  width: 100%;
  align-items: flex-end;
`;
export const ConteinerData = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 7px;
`;


export const TextIcon = styled.Text`
  font-size: 20px;
  font-weight:bold;
  text-align: center;
  color: ${Theme.colors.greem};
`;
