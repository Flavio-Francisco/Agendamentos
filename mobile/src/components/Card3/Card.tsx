import { useState } from 'react';
import {
    Conteiner,
    ConteinerTask,
    TextCard,
} from "./style";
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import React from 'react';
import { Theme } from './../../../Thema';
import { openBrowserAsync } from 'expo-web-browser';

interface PropsList {
    name: string;

}

export default function Card3(props: PropsList) {
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);



    return (
        <Conteiner onPress={() => openBrowserAsync("https://www.mercadopago.com.mx/checkout/v1/checkouts/create?access_token=TEST-7bfc6a8b-208b-4319-9b40-a85f3317055f")}>
            <ConteinerTask >
                <TextCard >{props.name}</TextCard>
                <Fontisto name="credit-card" size={24} color={Theme.colors.greem} />
            </ConteinerTask>

        </Conteiner>
    )
}