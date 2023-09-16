

import {
    AvatarUserHome,

    Conteiner,
    ConteinerList,
    ConteinerList2,
    HeaderHome,
    TitleHome,
    Conteinertop,
    Curuja,
} from "./style";

;

import Card2 from "../../components/Card2/Card2";
import Card from "../../components/Card/Card";
import Card3 from './../../components/Card3/Card';
import Card4 from "../../components/Card4/Card4";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";




export default function Home() {


    const text = ' " Agradeço aos vários professores da minha vida. queles aos que, quando olhei, já estavam em outro caminho.Agradeço a todos que um dia me falaram NÃO... foi assim que encontrei o meu destino! "\nDaniel Devitto Zákia';


    const { navigate } = useNavigation();
    function handleNavigate() {
        navigate('Options', {
            isChecked: true,
            modal: true,
            })
        
            
        
    }
    return (
        <Conteiner>

            <Conteinertop>
                <HeaderHome>
                    <AvatarUserHome
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/111377254?v=4'
                        }}

                    />
                    <TitleHome> Olá! Flávio</TitleHome>
                    <Curuja source={require('../../../assets/curuja.png')} />
                </HeaderHome>

            </Conteinertop>
            <ConteinerList>
                <Card name={text} avatar={"https://instagram.fjdo1-2.fna.fbcdn.net/v/t51.2885-19/90091631_695847464556005_693095622927974400_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjdo1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QcFa7cdcJeAAX-YpTrl&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB346W9SFzrD9Bjgz02F7pKuXGa14GwA6_zyCIB09tnqg&oe=64F8E929&_nc_sid=ee9879"} />
            </ConteinerList>
            <ConteinerList2>

                <Card2 name={"Minhas Aulas"} navigate={() => navigate('Schedule')} />
                <Card4 name={"Agendar aulas"} navigate={handleNavigate} />

            </ConteinerList2>

            <Card3 name={"Informaçao de pagamento"} />
        </Conteiner>
    )
}