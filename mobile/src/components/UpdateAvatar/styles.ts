import { styled } from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex-direction: row;
`;

export const AvatarUser = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 75px;
  margin-right: -28px;
`;
export const ButtomAvatar = styled.TouchableOpacity`
  height: 35px;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin-top: 80px;
  background-color: ${Theme.colors.greem};
`;
export const ViewButtom = styled.View``;
