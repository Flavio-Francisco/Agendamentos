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
    TextSingnOut,
    ConteinerList3
} from "./style";



import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Card2 from "../../components/Card2/Card2";
import Card from "../../components/Card/Card";
import Card4 from "../../components/Card4/Card4";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Theme } from "../../../Thema";
import { AuthContext } from "../../context/Auth";
import { BottomSheetComponent } from "../../components/BottomSheetComponent";
import { AuthContextTeacher } from "../../context/Teacher";
import Payment from "../../components/MercadoPagoCustomTabs/MercadoPagoCustomTabs";
import { AuthContextDate } from "../../context/Agenda";





export default function Home() {

    const { matterfindAll, getTeacher } = useContext(AuthContextTeacher)
    const { user, singnOut } = useContext(AuthContext)
    const { dateUser } = useContext(AuthContextDate)
    const [modalVisible, setModalVisible] = useState(false)

    const { navigate } = useNavigation();


    function handleNavigate() {
        navigate('Options', {
            isChecked: true,
            modal: true,
        })

    }
    function exist() {
        singnOut();
        setModalVisible(!modalVisible);
        navigate('Login')

    }
    // atualizando dados quando voltar para home
    useFocusEffect(
        React.useCallback(() => {
            user
            getTeacher()
            matterfindAll();
            console.log("Saldo da home: ", user.user?.saldo);
        }, [])
    );



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
            <ConteinerList3 >

                <Payment />
            </ConteinerList3>


            <BottomSheetComponent
                isOpen={modalVisible}
                toggle={() => setModalVisible(false)}
                snapPoints={['90%']}
            >
                <Conteinerbootomsheet>
                    <SingnOut onPress={() => exist()}>
                        <MaterialIcons name="exit-to-app" size={20} color={Theme.colors.white100} />
                        <TextSingnOut>Sair</TextSingnOut>
                    </SingnOut>
                </Conteinerbootomsheet>
            </BottomSheetComponent>
        </Conteiner>
    )
}

