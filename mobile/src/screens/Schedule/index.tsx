import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import {
    Conteiner,
    ProtuctConteiner,
    ProtuctText,
    TimeConteiner,
    MatterText2,
    ConteinrtTime,
    TimeText2,
    ConteinerTeacher
} from "./styles";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContextDate } from "../../context/Agenda";


export default function Schedule() {
    const { navigate } = useNavigation()


    function addTime() {

        navigate('Home')
    }


    const { dateAluno } = useContext(AuthContextDate)
    return (
        <Conteiner>

            <ProtuctConteiner >
                <ProtuctText >Meus Horários Agendamentos </ProtuctText>
            </ProtuctConteiner>

            <FlatList

                showsVerticalScrollIndicator={false}
                data={dateAluno}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TimeConteiner onPress={() => addTime()}>

                        <  ConteinrtTime>
                            <MatterText2>{item.date}</MatterText2>
                            <ConteinerTeacher>
                                <MatterText2>{item.prof_id}</MatterText2>
                                <TimeText2>{item.start_time} as {item.end_time}</TimeText2>
                            </ConteinerTeacher>
                        </  ConteinrtTime>



                    </TimeConteiner>
                )}

            />

        </Conteiner>
    )
}

