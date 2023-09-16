import { FontAwesome } from '@expo/vector-icons';
import {
    Conteiner,
    ConteinerTask,
    ConteinerView,
    TextIcon,

} from "./style";
import { Theme } from '../../../Thema';

interface PropsCard2 {
    name: string;
    navigate:()=>void;
}

export default function Card2(props: PropsCard2) {


    return (
        <Conteiner>

            <ConteinerView onPress={()=>props.navigate()}>
                <ConteinerTask >
                    <FontAwesome name={'calendar-check-o'} size={24} color={Theme.colors.greem} />
                </ConteinerTask>

                <TextIcon>{props.name}</TextIcon>

            </ConteinerView>
        </Conteiner>
    )
}