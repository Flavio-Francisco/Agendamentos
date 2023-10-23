import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  height: 150px;
  width: 90%;
  flex-direction: row;
  justify-content: center;
  border: 1px ${Theme.colors.greem};
  border-radius: 10px;
  gap: 10px;
`;
export const ConteinerText = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ConteinerAvatar = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 10px;
`;

export const NameUser = styled.Text`
  font-size: 20px;
  color: ${Theme.colors.greem};
`;
export const EmailUser = styled.Text`
  font-size: 15px;
  color: ${Theme.colors.greem};
`;
