import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
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
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";


interface Agenda {
    id: string;
    date:string;
    timeInicial: string;
    timeFinal: string;
}
export default function Agenda() {
    const { navigate} = useNavigation()
    const [timeSelect, setTimeSelect] = useState('')
    const [resevetion, setResevetion] = useState<Agenda>()
    function addTime(id: string, item: Agenda) {

        if (timeSelect == id) {
            setTimeSelect('')
        } else {

            setTimeSelect(id)
            setResevetion(item)
        
            Alert.alert("Horário Resevado com Sucesso")
            navigate('Home')
        }
        console.log('====================================');
        console.log(timeSelect);
        console.log(resevetion);
        console.log('====================================');
    }

    const Data = [
        {
            id: '1',
            date:'15/10/2023',
            timeInicial: '12:30',
            timeFinal: '14:30',
        },
        {
            id: '2',
            date:'22/10/2023',
            timeInicial: '09:00',
            timeFinal: '10:30',
        },
        {
            id: '3',
            date:'05/11/2023',
            timeInicial: '13:30',
            timeFinal: '14:30',
        },
        {
            id: '5',
            date:'05/11/2023',
            timeInicial: '15:30',
            timeFinal: '16:30',
        },
        {
            id: '6',
            date:'06/11/2023',
            timeInicial: '08:30',
            timeFinal: '90:30',
        },
    ]


    return (
        <Conteiner>

            <ProtuctConteiner >
                <ProtuctText > Agende seus Horários </ProtuctText>
            </ProtuctConteiner>

            <FlatList

                showsVerticalScrollIndicator={false}
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TimeConteiner onPress={() => addTime(item.id, item)}>
                        {item.id === timeSelect ?
                            <  ConteinrtTime>
                                <MatterText2>{item.date}</MatterText2>
                                <ConteinerTeacher>
                                    
                                    <TimeText2>{item.timeInicial} as {item.timeFinal}</TimeText2>
                                </ConteinerTeacher>
                            </  ConteinrtTime>

                            :

                            <ConteinrtTime2>
                                <MatterText>Data:  {item.date}</MatterText>

                                <ConteinerTeacher>
                                   
                                    <TimeText>Horários:  {item.timeInicial} as {item.timeFinal}</TimeText>

                                </ConteinerTeacher>
                            </ConteinrtTime2>

                        }

                    </TimeConteiner>
                )}

            />

        </Conteiner>
    )
}

