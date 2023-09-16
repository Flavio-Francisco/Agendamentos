import {
    Conteiner,
    ConteinerList,
    ConteinerList2,
    HeaderHome,
    TitleHome,
    Conteinertop,
    Menu,
    Conteinerbootomsheet,
    SingnOut,
    TextSingnOut
} from "./style";

;

import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Card2 from "../../components/Card2/Card2";
import Card from "../../components/Card/Card";
import Card3 from './../../components/Card3/Card';
import Card4 from "../../components/Card4/Card4";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import React, { useContext, useState } from "react";
import { Theme } from "../../../Thema";
import { AuthContext } from "../../context/Auth";
import { BottomSheetComponent } from "../../components/BottomSheetComponent";




export default function Home() {
    const { user,singnOut } = useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false)

    const text = ' " Agradeço aos vários professores da minha vida. queles aos que, quando olhei, já estavam em outro caminho.Agradeço a todos que um dia me falaram NÃO... foi assim que encontrei o meu destino! "\nDaniel Devitto Zákia';


    const { navigate } = useNavigation();

    function handleNavigate() {
        navigate('Options', {
            isChecked: true,
            modal: true,
        })

    }
    function exist(){
        singnOut();
        setModalVisible(!modalVisible)
        navigate('Login') 
    }
    return (
        <Conteiner>

            <Conteinertop>
                <HeaderHome>
                    <Menu onPress={() => setModalVisible(!modalVisible)}>
                        <Feather name="menu" size={30} color={Theme.colors.white100} />
                    </Menu>
                    <TitleHome> Olá! {user.user?.name}</TitleHome>
                </HeaderHome>

            </Conteinertop>
            <ConteinerList>
                <Card saldo={user.user?.saldo} />
            </ConteinerList>
            <ConteinerList2>

                <Card2 name={"Minhas Aulas"} navigate={() => navigate('Schedule')} />
                <Card4 name={"Agendar aulas"} navigate={handleNavigate} />

            </ConteinerList2>

            <Card3 name={"Informaçao de pagamento"} />
            <BottomSheetComponent
                isOpen={modalVisible}
                toggle={() => setModalVisible(false)}
                snapPoints={['90%']}
            >
                <Conteinerbootomsheet>
                    <SingnOut onPress={()=>exist()}>
                        <MaterialIcons name="exit-to-app" size={20} color={Theme.colors.white100} />
                        <TextSingnOut>Sair</TextSingnOut>
                    </SingnOut>
                </Conteinerbootomsheet>
            </BottomSheetComponent>
        </Conteiner>
    )
}