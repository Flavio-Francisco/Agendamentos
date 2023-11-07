import { useState } from 'react';
import {
    Conteiner,
    ConteinerSaldo,
    TextOult,
    TextCard,
    TextCard2,
    TextCardTitle,
} from "./style";
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../../../Thema';
import { TouchableOpacity } from 'react-native';


interface PropsList {
    saldo: number;

}

export default function Card(props: PropsList) {
    const [isChecked, setChecked] = useState(true);


    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: "BRL",
    }).

        format(props.saldo);

    return (
        <Conteiner>
            <TextCardTitle>Saldo para agendamentos</TextCardTitle>
            <TextCard > Saldo atual</TextCard>
            {isChecked ?
                <ConteinerSaldo>

                    <TextCard2 >{formattedValue}</TextCard2>
                    <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                        <Ionicons name="ios-eye-outline" size={30} color={Theme.colors.greem} />
                    </TouchableOpacity>

                </ConteinerSaldo>
                :
                <ConteinerSaldo>
                    <TextCard2>R$</TextCard2>
                    <TextOult>
                        <TextCard2 >{formattedValue}</TextCard2>
                    </TextOult>
                    <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                        <Ionicons name="ios-eye-off-outline" size={30} color={Theme.colors.greem} />
                    </TouchableOpacity>
                </ConteinerSaldo>

            }

        </Conteiner>
    )
}