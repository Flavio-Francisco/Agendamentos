import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const Conteiner = styled.View`
  height: 100%;
  justify-content: center;
  text-align: center;
  background-color: ${Theme.colors.white100};
`;

export const Title = styled.View`
  margin-bottom: 15px;
`;

export const Text = styled.Text`
  font-size: 24px;
  color: ${Theme.colors.greem};
  font-weight: bold;
  margin-left: 15px;
  color: ${Theme.colors.greem};
`;
export const TextButton = styled.Text`
  font-size: 20px;
  color: ${Theme.colors.white100};
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;

export const Label = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  color: ${Theme.colors.greem};
  border: 1px solid ${Theme.colors.greem};
  border-radius: 5px;
  margin: 10px;
`;
export const ButtomUpdate = styled.TouchableOpacity`
  width: 90%;
  padding: 15px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  border-radius: 10px;
  background-color: ${Theme.colors.greem};
`;
export const TextErro = styled.Text`
  font-size: 12px;
  color: red;
  font-weight: bold;
  margin-left: 20px;
`;
export const ConteinerImage = styled.View`
  width: 99%;
  height: 20%;
  align-items: center;
  margin-bottom: 100px;
`;
export const IconApp = styled.Image`
  width: 200px;
  height: 200px;
`;
