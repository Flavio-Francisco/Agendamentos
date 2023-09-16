import { FontAwesome } from '@expo/vector-icons';
import {
    Conteiner,
    ConteinerTask,
    ConteinerView,
    TextIcon,

} from "./style";
import { Theme } from '../../../Thema';
import { useNavigation } from '@react-navigation/native';

interface PropsCard2 {
    name: string;
    navigate:()=>void
}
export default function Card4(props: PropsCard2) {

    return (
        <Conteiner>

            <ConteinerView onPress={()=>props.navigate()}>
                <ConteinerTask >
                    <FontAwesome name={"calendar-plus-o"} size={24} color={Theme.colors.greem} />
                </ConteinerTask>

                <TextIcon>{props.name}</TextIcon>

            </ConteinerView>
        </Conteiner>
    )
}