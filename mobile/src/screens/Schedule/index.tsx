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
    teacher: string;
    timeInicial: string;
    timeFinal: string;
}
export default function Schedule() {
    const { navigate} = useNavigation()
    const [timeSelect, setTimeSelect] = useState('')
    const [resevetion, setResevetion] = useState<Agenda>()
    function addTime(id: string, item: Agenda) {

        if (timeSelect == id) {
            setTimeSelect('')
        } else {

            setTimeSelect(id)
            setResevetion(item)
        
          
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
            teacher: "Paulo",
            text: "Matématica",
            timeInicial: '12:30',
            timeFinal: '14:30',
        },
        {
            id: '2',
            teacher: 'Juliana',
            text: "Português",
            timeInicial: '09:00',
            timeFinal: '10:30',
        },
        {
            id: '3',
            teacher: 'Everton',
            text: "Geografia",
            timeInicial: '13:30',
            timeFinal: '14:30',
        }
    ]


    return (
        <Conteiner>

            <ProtuctConteiner >
                <ProtuctText >Meus Horários Agendamentos </ProtuctText>
            </ProtuctConteiner>

            <FlatList

                showsVerticalScrollIndicator={false}
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TimeConteiner onPress={() => addTime(item.id, item)}>
                        {item.id === timeSelect ?
                            <  ConteinrtTime>
                                <MatterText2>{item.text}</MatterText2>
                                <ConteinerTeacher>
                                    <MatterText2>{item.teacher}</MatterText2>
                                    <TimeText2>{item.timeInicial} as {item.timeFinal}</TimeText2>
                                </ConteinerTeacher>
                            </  ConteinrtTime>

                            :

                            <ConteinrtTime2>
                                <MatterText>{item.text}</MatterText>

                                <ConteinerTeacher>
                                    <MatterText>{item.teacher}</MatterText>
                                    <TimeText>{item.timeInicial} as {item.timeFinal}</TimeText>

                                </ConteinerTeacher>
                            </ConteinrtTime2>

                        }

                    </TimeConteiner>
                )}

            />

        </Conteiner>
    )
}

