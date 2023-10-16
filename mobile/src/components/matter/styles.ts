import styled from "styled-components/native";
import { Theme } from "./../../../Thema";

export const TimeText2 = styled.Text`
  font-size: 18px;
  margin: 5px;
  margin-left: 15px;
  color: ${Theme.colors.white100};
`;

export const MatterText2 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  color: ${Theme.colors.white100};
`;
export const TimeConteiner = styled.TouchableOpacity`
  border: 1px ${Theme.colors.greem};
  width: 360px;
  margin: 5px;
  border-radius: 10px;
`;

export const ConteinrtTime = styled.View`
  background-color: ${Theme.colors.greem};
  border-radius: 10px;
  padding: 5px;
`;
export const ConteinerTeacher = styled.View`
  flex-direction: column;
`;
