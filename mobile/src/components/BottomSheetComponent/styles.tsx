import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { Theme } from '../../../Thema';

export const Icon = styled(Feather)`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  z-index: 99;
  color: ${Theme.colors.greem};

`;

export const Button = styled.TouchableOpacity`
  z-index: 99;
`;