import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.colors.white100};
`;

export const Label = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  color: ${Theme.colors.greem};
  border: 1px solid ${Theme.colors.greem};
  border-radius: 5px;
  margin: 10px;
`;
export const TextErro = styled.Text`
  font-size: 12px;
  color: red;
  font-weight: bold;
  margin-left: 20px;
`;
export const ButtomPayment = styled.TouchableOpacity`
  width: 90%;
  padding: 15px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  border-radius: 10px;
  background-color: ${Theme.colors.greem};
`;
export const TextButton = styled.Text`
  font-size: 20px;
  color: ${Theme.colors.white100};
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;
export const TextTitle = styled.Text`
  font-size: 25px;
  color: ${Theme.colors.greem};
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin-bottom: 95px;
`;
