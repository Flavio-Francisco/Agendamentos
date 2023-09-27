import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 360px;
  background-color: ${Theme.colors.white100};
  border-radius: 20px;
  border: 1px ${Theme.colors.greem};
`;

export const ConteinerTask = styled.TouchableOpacity`
  flex-direction: row;
  height: 100%;
  width: 99%;
  align-items: center;
  justify-content: center;
  margin-left: -18px;
`;

export const TextCard = styled.Text`
  color: ${Theme.colors.greem};
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  width: 80%;
  margin-left: -18px;
`;
