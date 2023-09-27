import { styled } from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border: 1px ${Theme.colors.greem};
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ConteinerStar = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ConteinerValue = styled.View`
  flex-direction: row;
  justify-content: center;
`;
export const ConteinerName = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ConteinerAvatar = styled.View`
  width: 280px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Name = styled.Text`
  text-align: center;
  font-size: 15px;
  color: ${Theme.colors.greem};
`;
export const TestValue = styled.Text`
  text-align: center;
  font-size: 15px;
  color: ${Theme.colors.greem};
  font-weight: bold;
`;
export const AvatarTeacher = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 50px;
  margin-top: 20px;
  margin-left: 20px;
`;
