import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${Theme.colors.white100};
`;

export const Conteinertop = styled.View`
  height: 20%;
  justify-content: center;
  background-color: ${Theme.colors.greem};
  
`;

export const ConteinerList = styled.View`
  height: 25%;
  justify-content: center;
  text-align: center;
  width: 99%;

  background-color: ${Theme.colors.white100};
`;
export const ConteinerList2 = styled.View`
  flex-direction: row;
  height: 25%;
  justify-content: center;
  margin-bottom: 10px;
  background-color: ${Theme.colors.white100};
  gap:7px;
`;

export const HeaderHome = styled.View`
  height: 30%;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin-left: 10px;
  margin-bottom: 80px;
  margin-top: 90px;
  background-color: ${Theme.colors.greem};
`;
export const TitleHome = styled.Text`
  font-size: 25px;
  text-align: center;
  color: ${Theme.colors.white100};
  padding: 10px;
  margin-left: 30px;
`;
export const AvatarUserHome = styled.Image`
  margin-left: 10px;
  height: 60px;
  width: 60px;
  border-radius: 50px;
`;
export const Curuja = styled.Image`
  margin-right: 10px;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  margin-left: 60px;

`;
