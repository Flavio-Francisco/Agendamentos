import styled from 'styled-components/native';
import { Theme } from '../../../Thema';


export const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StarButton = styled.TouchableOpacity`
align-items: center;
`;

export const StarText = styled.Text`
  font-size: 40px;
  color:${Theme.colors.yellow}
`;