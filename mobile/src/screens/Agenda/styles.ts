import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.white100};
`;

export const ProtuctConteiner = styled.View`
  flex-direction: row;
  height: 80px;
  border-color: ${Theme.colors.greem};
  border-block-end-width: 3px;
  margin-top: 20px;

`;
export const ProtuctText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${Theme.colors.greem};
`;
export const TimeText = styled.Text`
  font-size: 18px;
  margin: 5px;
  margin-left: 15px;
  color: ${Theme.colors.greem};
`;
export const TimeText2 = styled.Text`
  font-size: 18px;
  margin: 5px;
  margin-left: 15px;
  color: ${Theme.colors.white100};
`;
export const MatterText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  color: ${Theme.colors.greem};
`;
export const MatterText2 = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  color: ${Theme.colors.white100};
`;
export const TimeConteiner = styled.TouchableOpacity`
  border: 1px ${Theme.colors.greem};
  width: 350px;
  margin: 5px;
  border-radius:10px;
`;


export const ConteinrtTime= styled.View`
  background-color: ${Theme.colors.greem};
  height: 80px;
  border-radius:10px;
`;
export const ConteinerTeacher= styled.View`
  
  flex-direction:row;
  align-items:center;
`;
export const ConteinrtTime2= styled.View`
  background-color: ${Theme.colors.white100};
  border-radius:10px;
`;
