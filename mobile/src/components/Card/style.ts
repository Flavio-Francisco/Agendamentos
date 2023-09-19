import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 360px;
  background-color: ${Theme.colors.white100};
  border-radius: 20px;
  border: 1px ${Theme.colors.greem};
`;

export const ConteinerSaldo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const TextCard = styled.Text`
  color: ${Theme.colors.greem};
  font-size: 20px;
 
`;
export const TextCard2 = styled.Text`
  color: ${Theme.colors.greem};
  font-size: 25px;
  margin: 6px;
  
  font-weight:bold;
`;
export const TextOult = styled.View`
  height: 25px;
  background-color: ${Theme.colors.greem};
  border-radius: 20px;
`;
export const TextCardTitle = styled.Text`
  color: ${Theme.colors.greem};
  font-size: 15px;
  margin: 6px;
  font-weight:bold;
`;
