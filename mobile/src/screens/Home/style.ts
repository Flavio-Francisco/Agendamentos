import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center;
  background-color: ${Theme.colors.white100};
`;

export const Conteinertop = styled.View`
  height: 21%;
  width: 100%;
  justify-content: center;
  background-color: ${Theme.colors.greem};
`;

export const ConteinerList = styled.View`
  height: 25%;
  justify-content: center;
  align-items:center;
  width: 99%;
  margin-bottom: -10px;
  background-color: ${Theme.colors.white100};
`;
export const ConteinerList2 = styled.View`
  flex-direction: row;
  height: 25%;
  justify-content: center;
  margin-top: 0px;
  background-color: ${Theme.colors.white100};
  gap: 17px;
`;

export const ConteinerList3 = styled.View`
  height: 25%;
  justify-content: center;
  margin-top: 0px;
  background-color: ${Theme.colors.white100};
 
`;
export const HeaderHome = styled.View`
  height: 30%;
  width: 90%;
  margin-left: 10px;
  margin-bottom: 80px;

  background-color: ${Theme.colors.greem};
`;
export const TitleHome = styled.Text`
  font-size: 25px;
  height: 55px;
  text-align: center;
  color: ${Theme.colors.white100};
  padding: 10px;
`;
export const AvatarUserHome = styled.Image`
  margin-left: 10px;
  height: 60px;
  width: 60px;
  border-radius: 50px;
`;

export const Menu = styled.TouchableOpacity`
  margin-top: 10px;
  text-align: center;
  margin-left: 0px;
`;
// bootomsheet

export const Conteinerbootomsheet = styled.View`
  justify-content: center;
  background-color: ${Theme.colors.white100};
`;
export const SingnOut = styled.TouchableOpacity`
  flex-direction: row;
  height: 30px;
  width: 65px;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  margin-top: 15px;
  background-color: ${Theme.colors.greem};
  gap: 4px;
  border-radius: 7px;
`;
export const TextSingnOut = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${Theme.colors.white100};
`;
