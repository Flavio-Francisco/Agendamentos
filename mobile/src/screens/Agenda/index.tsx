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
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";


interface Agenda {
    id: string;
    date: string;
    start_time: string;
    end_time: string;
}
export default function Agenda() {

    const { dateMak, clearDate } = useContext(AuthContextDate)
    const { navigate } = useNavigation()
    const [timeSelect, setTimeSelect] = useState('')
    const [resevetion, setResevetion] = useState<Agenda>()
    function addTime(id: string, item: Agenda) {

        if (timeSelect == id) {
            setTimeSelect('')
        } else {
            // desconto de saldo
            setTimeSelect(id)
            setResevetion(item)
            clearDate();
            Alert.alert("Horário Resevado com Sucesso")
            navigate('Home')
        }
        console.log('====================================');
        console.log(timeSelect);
        console.log(resevetion);
        console.log('====================================');
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
                    <TimeConteiner onPress={() => addTime(item.id, item)}>
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

