import styled from 'styled-components/native';
import { Theme } from '../../../Thema';


export const ContaineModal = styled.View`
  flex:1;
  align-items:center;
  justify-content: center;
  background-color:${Theme.colors.greem};

  

`;
export const  Header =  styled.View`
  width:90%;
  height: 80px; 
  margin-bottom:10px;
  margin-top:20px;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  background-color:${Theme.colors.white100};
  border-radius:5px;
`;

export const HorizontalLine = styled.View`
  width: 85%;
  height: 1px;
  background-color:${Theme.colors.greem};
  margin-left:15px;
  margin-bottom:30px;
`;

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items:center;
  height: 80%;
  width: 90%;
  justify-content: space;
  background-color:${Theme.colors.white100};
  border-radius:5px;
  padding:20px
  
`;

export const ButtomIcon = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 5px;
  margin-left: 55px;
  border: 1px solid ${Theme.colors.greemOpacyd}
  
  
  
`;

export const ContainerTitle = styled.View`

 justify-content:center;
 align-items:center;
 height:50px;
 width:90%;
 margin-left:20px;


`;

export const Title = styled.Text`
 
 font-size:20px;
 text-align:center;
 color:${Theme.colors.greem};
 padding:10px;

 

`;
export const TextButton = styled.Text`
 
 font-size:25px;
 text-align:center;
 color:${Theme.colors.greem};


`;
export const TextIcon = styled.Text`
 
 font-size:12px;
 text-align:center;
 color:${Theme.colors.greem};
 margin-left: 50px;

`;

export const AvatarUser = styled.Image`

 height:60px;
 width:60px;
 border-radius:50px;
 padding:10px;
 margin-left:15px;
 margin-right:15px;

`;
export const Icon = styled.Image`

 height:50px;
 width:50px;
 padding:10px;
 margin-left:15px;
 margin-right:15px;
 
`;

