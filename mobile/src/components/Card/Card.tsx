import { useState } from 'react';
import {
    Conteiner,
    ConteinerSaldo,
    TextOult,
    TextCard,
    TextCard2,
} from "./style";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../../../Thema';
import { TouchableOpacity } from 'react-native';


interface PropsList {
    saldo: number;

}

export default function Card(props: PropsList) {
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(true);



    return (
        <Conteiner>
            <TextCard > Seu saldo é:</TextCard>
            {isChecked ?
                <ConteinerSaldo>
                     
                    <TextCard2 >R$ {props.saldo}</TextCard2>
                    <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                        <Ionicons name="ios-eye-outline" size={30} color={Theme.colors.greem} />
                    </TouchableOpacity>

                </ConteinerSaldo>
                :
                <ConteinerSaldo>
                     <TextCard2>R$</TextCard2>
                    <TextOult>  
                        <TextCard2 >{props.saldo}</TextCard2>
                    </TextOult>
                    <TouchableOpacity onPress={() => setChecked(!isChecked)}>
                        <Ionicons name="ios-eye-off-outline" size={30} color={Theme.colors.greem} />
                    </TouchableOpacity>
                </ConteinerSaldo>

            }

        </Conteiner>
    )
}