import { View, Text, FlatList, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
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
import AwesomeAlert from "react-native-awesome-alerts";
import { Theme } from "../../../Thema";
import { MaskDate } from "../../components/Mask";

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
    const [dateSelect, setDateSelect] = useState('')
    const [time, setTime] = useState<Agenda | null>()
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [timeCommit, setTimeCommit] = useState<boolean>(false);
    const [load, setLoand] = useState<boolean>(false);



    async function addTime() {
        if (timeSelect != '') {
            setShowAlert(false)
            setLoand(true)
            await api.patch(`agenda/${timeSelect}`, {
                client_id: user?.user.id,
                avaliable: false,
                valor: 100
            })
                .then(response => {

                    setSaldo(response.data);
                    console.log("saldo atual: ", response.data);
                    setTime(null)
                    setTimeCommit(true)
                    setLoand(false)
                    clearDate();

                })

        } else {
            console.log('já mudou');

        }


    }
    function getItem(item: Agenda) {
        console.log('horário selecionadao: ' + item.date);
        setTime(item)
        setTimeSelect(item.id)
        setShowAlert(true)
        console.log(showAlert);
        const date = new Date(item.date);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
        setDateSelect(date.toLocaleDateString('pt-BR', options));
        console.log(dateSelect);
    }

    function home() {
        setTimeCommit(false)
        setShowAlert(false)
        navigate('Home')
    }


    return (
        <Conteiner>

            <AwesomeAlert
                show={timeCommit}
                showProgress={false}
                title="Horário agendado com sucesso!!"
                contentStyle={{ width: 300, }}
                closeOnTouchOutside={false}
                titleStyle={{ fontSize: 20, color: Theme.colors.greem, textAlign: 'center', lineHeight: 30 }}
                confirmButtonColor={Theme.colors.greem}
                confirmButtonStyle={{ width: 100, alignItems: 'center', marginLeft: 25, }}
                confirmButtonTextStyle={{ fontSize: 20 }}
                showConfirmButton={true}
                confirmText="ok"
                onConfirmPressed={() => home()}
            />
            <AwesomeAlert
                show={showAlert}
                title={`Tem certerza que deseja agendar esse horário ${time?.start_time} as ${time?.end_time}`}
                message={`No dia ${dateSelect} `}
                contentStyle={{ width: 300, }}
                closeOnTouchOutside={true}
                titleStyle={{ fontSize: 20, textAlign: 'center', lineHeight: 30, color: Theme.colors.greem }}
                messageStyle={{ fontSize: 20, color: Theme.colors.greem }}
                closeOnHardwareBackPress={false}
                cancelButtonStyle={{ width: 100, alignItems: 'center', marginTop: 10, borderWidth: 1, borderColor: Theme.colors.greem, }}
                confirmButtonStyle={{ width: 100, alignItems: 'center', marginLeft: 25, }}
                cancelButtonTextStyle={{ color: Theme.colors.greem }}
                showCancelButton={true}
                showConfirmButton={true}
                confirmText="Sim"
                confirmButtonColor={Theme.colors.greem}
                onConfirmPressed={() => addTime()}
                cancelText="Não"
                cancelButtonColor={Theme.colors.white100}
                onCancelPressed={() => setShowAlert(false)}

            />

            <ProtuctConteiner >
                <ProtuctText > Agende seus Horários </ProtuctText>
            </ProtuctConteiner>
            {load === true ? <ActivityIndicator size={90} color={Theme.colors.greem} /> :
                <FlatList

                    showsVerticalScrollIndicator={false}
                    data={dateMak}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TimeConteiner onPress={() => getItem(item)}>
                            {item.id === timeSelect ?
                                <  ConteinrtTime>

                                    <MatterText2> Data: <MaskDate props={item.date} /></MatterText2>
                                    <ConteinerTeacher>

                                        <TimeText2>{item.start_time} as {item.end_time}</TimeText2>
                                    </ConteinerTeacher>
                                </  ConteinrtTime>

                                :

                                <ConteinrtTime2>
                                    <MatterText>Data: <MaskDate props={item.date} /></MatterText>

                                    <ConteinerTeacher>

                                        <TimeText>Horários:  {item.start_time} as {item.end_time}</TimeText>

                                    </ConteinerTeacher>
                                </ConteinrtTime2>

                            }

                        </TimeConteiner>
                    )}

                />
            }


        </Conteiner>
    )
}

