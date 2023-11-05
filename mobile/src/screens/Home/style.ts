import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.white100};
`;
export const ConteinerAvatar = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin-top: 20px;
`;

export const Conteinertop = styled.View`
  height: 30%;
  width: 100%;
  justify-content: center;
  background-color: ${Theme.colors.greem};
`;

export const ConteinerList = styled.View`
  height: 25%;
  justify-content: center;
  align-items: center;
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

export const ConteinerList3 = styled.TouchableOpacity`
  flex-direction: row;
  height: 130px;
  width: 90%;
  align-items: center;
  justify-content: center;
  border: 1px ${Theme.colors.greem};
  border-radius: 15px;
  background-color: ${Theme.colors.white100};
  margin-bottom: 80px;
  gap: 25px;
`;
export const HeaderHome = styled.View`
  height: 30%;
  width: 90%;
  margin-left: 10px;
  margin-bottom: 40px;

  background-color: ${Theme.colors.greem};
`;
export const TitleHome = styled.Text`
  font-size: 25px;
  height: 55px;
  text-align: center;
  color: ${Theme.colors.white100};
  padding: 10px;
`;
export const Email = styled.Text`
  font-size: 20px;
  height: 55px;
  text-align: center;
  color: ${Theme.colors.white100};
`;
export const AvatarUserHome = styled.Image`
  margin-top: 25px;
  height: 80px;
  width: 80px;
  border-radius: 50px;
`;

export const Menu = styled.TouchableOpacity`
  text-align: center;
  width: 30px;
`;
// bootomsheet

export const Conteinerbootomsheet = styled.View`
  background-color: ${Theme.colors.white100};
  justify-content: center;
`;
export const SingnOut = styled.TouchableOpacity`
  flex-direction: row;
  height: 30px;
  width: 65px;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-left: 10px;
  background-color: ${Theme.colors.greem};
  gap: 4px;
  border-radius: 7px;
`;
export const TextSingnOut = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${Theme.colors.white100};
`;
export const ConteinerUser = styled.View`
  text-align: center;
  margin-left: 25px;
  margin-top: 45px;
`;
export const UpdatePassword = styled.TouchableOpacity`
  flex-direction: row;
  width: 90%;
  margin-top: 25px;
  background-color: ${Theme.colors.white100};
  gap: 10px;
  border-radius: 7px;
`;
export const ConteinerUpdateUser = styled.TouchableOpacity`
  flex-direction: row;
  width: 90%;
  margin-top: 55px;
  background-color: ${Theme.colors.white100};
  gap: 10px;
  border-radius: 7px;
`;
export const TextPassword = styled.Text`
  font-size: 22px;
  text-align: center;
  color: ${Theme.colors.greem};
`;
export const UpdateUser = styled.Text`
  font-size: 22px;
  color: ${Theme.colors.greem};
`;
