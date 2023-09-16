import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex-direction: column;
  width: 170px;
  height: 138px;
  margin-top: 25px;
  margin-left: 5px;
  text-align: center;
  background-color: ${Theme.colors.greemOpacyd};
  border-radius: 20px;
  border: 1px ${Theme.colors.greem};
`;

export const ConteinerView = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 80%;
  margin-left: 15px;
  margin-bottom: 5px;
  text-align: center;
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
export const ViewButtomIcon = styled.View`
  width: 45%;
  height: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const TextIcon = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${Theme.colors.greem};
`;
