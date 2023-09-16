import styled from "styled-components/native";
import { Theme } from "../../../Thema";

export const ConteinerLogin = styled.View`
  flex: 1;
  justify-content: center;
  text-align: center;
  background-color: ${Theme.colors.white100};
`;

export const Label = styled.TextInput`
  color: ${Theme.colors.white100};
  width: 90%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${Theme.colors.greem};
  border-radius: 5px;
  margin: 10px;
  margin-left: 15px;
  background-color: ${Theme.colors.greemOpacyd};
`;

export const TextLogin = styled.Text`
  font-size: 35px;
  color: ${Theme.colors.greem};
  font-weight: bold;
  justify-content: center;
  margin-left: 15px;
  margin-bottom: 45px;
`;

export const TextLabel = styled.Text`
  font-size: 16px;
  color: ${Theme.colors.greem};
  justify-content: center;
  margin-left: 15px;
`;
export const TextLink = styled.Text`
  font-size: 16px;
  color: ${Theme.colors.greem};
  justify-content: center;
  margin-left: 15px;
  border-bottom-width:1px;
  border-color:${Theme.colors.greem};
`;

export const ButtomLogin = styled.TouchableOpacity`
  width: 90%;
  padding: 15px;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  border-radius: 5px;
  background-color: ${Theme.colors.greem};
`;
export const TextButton = styled.Text`
  font-size: 20px;
  color: ${Theme.colors.white100};
  font-weight: bold;
  text-align: center;
  justify-content: center;
`;

export const TextErro = styled.Text`
  font-size: 12px;
  color: red;
  font-weight: bold;
  margin-left: 20px;
`;

export const ButtomIcons = styled.TouchableOpacity`
  width: 90%;
  padding: 15px;
  margin-left: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 45px;
 
 
  
`;

export const HorizontalLine = styled.View`
  width: 50%;
  height: 2px;
  background-color: #979797;
  margin-top: 20px;
`;
export const TextHorizontal = styled.Text`
  font-size: 16px;
  color: ${Theme.colors.white100};
  margin-top: 20px;
`;
export const ViewHorizontal = styled.View`
  flex-direction: row;
  align-items: center;
  width: 90%;
  gap: 3px;
  margin-top: 15px;
  margin-left: 10px;
`;
export const ConteinerImage = styled.View`
  width: 99%;
  height: 20%;
  align-items: center;
  margin-bottom: 45px;
`;
export const IconApp = styled.Image`
  width: 200px;
  height: 200px;
`;
