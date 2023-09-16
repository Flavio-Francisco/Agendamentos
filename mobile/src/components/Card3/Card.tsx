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

interface PropsList {
    name: string;

}

export default function Card3(props: PropsList) {
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);



    return (
        <Conteiner>
            <ConteinerTask >
                <TextCard >{props.name}</TextCard>
                <Fontisto name="credit-card" size={24} color={Theme.colors.greem} />
            </ConteinerTask>

        </Conteiner>
    )
}