import { styled } from "styled-components/native";
import { Theme } from "../../../Thema";





export const Conteiner = styled.View`
flex: 1;
justify-content: center;
align-items: center;
background-color:${Theme.colors.greem}
`;

export const ViewTeacher = styled.View`
height:80%;
width:90%;
justify-content: center;
align-items: center;
background-color:${Theme.colors.white100};
border-radius:10px;
padding:20px;
`;

export const ConteinerInput = styled.View`
height:10%;
width:90%;
align-items: center;
justify-content:center;
border-radius:10px;
background-color:${Theme.colors.white100};
margin-bottom:25px;
margin-top:35px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:Theme.colors.greem,
    placeholder:'🔍   Pesquisar Professor',


})`
background-color:${Theme.colors.white100};
border-radius:10px;
border: 1px ${Theme.colors.greem};
width:90%;
height:70%;
padding-left:13px;
font-size:16px;
color:${Theme.colors.greem};
`;