import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { AuthContextDate } from '../../context/Agenda';
import {
    Conteiner,
    ProtuctConteiner,
    ProtuctText,
    TimeConteiner,
    TimeText,
    MatterText,
    MatterText2,
    ConteinrtTime,
    ConteinrtTime2,
    TimeText2,
    ConteinerTeacher
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../api/api";
import { AuthContext } from "../../context/Auth";


interface Agenda {
    id: string;
    date: string;
    start_time: string;
    end_time: string;
}
export default function Agenda() {

    const { dateMak, clearDate } = useContext(AuthContextDate)
    const { user, setSaldo } = useContext(AuthContext)
    const { navigate } = useNavigation()
    const [timeSelect, setTimeSelect] = useState('')



    async function agenda(id: string) {
        setTimeSelect(id)
        await api.patch(`agenda/${id}`, {
            client_id: user?.user.id,
            avaliable: false,
            valor: 100
        })
            .then(response => {
                setSaldo(response.data);
                console.log("saldo atual: ", response.data);
                clearDate();
                Alert.alert("Horário Resevado com Sucesso");
                navigate('Home')
            })
    }




    return (
        <Conteiner>

            <ProtuctConteiner >
                <ProtuctText > Agende seus Horários </ProtuctText>
            </ProtuctConteiner>

            <FlatList

                showsVerticalScrollIndicator={false}
                data={dateMak}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TimeConteiner onPress={() => { agenda(item.id) }}>
                        {item.id === timeSelect ?
                            <  ConteinrtTime>
                                <MatterText2>{item.date}</MatterText2>
                                <ConteinerTeacher>

                                    <TimeText2>{item.start_time} as {item.end_time}</TimeText2>
                                </ConteinerTeacher>
                            </  ConteinrtTime>

                            :

                            <ConteinrtTime2>
                                <MatterText>Data:  {item.date}</MatterText>

                                <ConteinerTeacher>

                                    <TimeText>Horários:  {item.start_time} as {item.end_time}</TimeText>

                                </ConteinerTeacher>
                            </ConteinrtTime2>

                        }

                    </TimeConteiner>
                )}

            />

        </Conteiner>
    )
}

