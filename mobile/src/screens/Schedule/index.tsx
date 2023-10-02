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
import { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContextDate } from "../../context/Agenda";
import { Matter } from "../../components/matter";
import React from "react";
import { AuthContext } from "../../context/Auth";


export default function Schedule() {
    const { navigate } = useNavigation()
    const { dateAluno, dateUser } = useContext(AuthContextDate)
    const { user, singnOut } = useContext(AuthContext)

    function addTime() {

        navigate('Home')
    }

    useEffect(() => {
        dateUser(user.user?.id);
        dateAluno

    }, [])

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
                            <MatterText2>{Matter(item.matter)}</MatterText2>
                            <ConteinerTeacher>

                                <TimeText2>{item.start_time} as {item.end_time}</TimeText2>
                            </ConteinerTeacher>
                        </  ConteinrtTime>



                    </TimeConteiner>
                )}

            />

        </Conteiner>
    )
}

function useFocusEffect(arg0: () => void) {
    throw new Error("Function not implemented.");
}

