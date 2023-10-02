import { View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
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
import { Theme } from "../../../Thema";


export default function Schedule() {
    const { navigate } = useNavigation()
    const { dateAluno, dateUser, load } = useContext(AuthContextDate)
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

            {load === true ? <ActivityIndicator size={50} color={Theme.colors.greem} />
                :
                <FlatList

                    showsVerticalScrollIndicator={false}
                    data={dateAluno}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Matter id_matter={item.matter} start_time={item.start_time} end_time={item.end_time} onPress={addTime} />}

                />
            }



        </Conteiner>
    )
}



