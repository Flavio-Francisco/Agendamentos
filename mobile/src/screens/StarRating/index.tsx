import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import {
    AvatarTeacher, Conteiner,
    ConteinerAvatar,
    ConteinerInput,
    NameTeacher,
    TextTeacher
} from "./styles";
import Star from "../../components/Star";
import { useState } from "react";
import { api } from "../../api/api";
import AwesomeAlert from "react-native-awesome-alerts";
import { Theme } from "../../../Thema";

type RootStackParamList = {
    PerfilTeacher: {
        id: string;
        avatar: string;
        name: string;
        rating: number;
        modal: boolean
    };
};
type PerfilTeacherParams = RouteProp<RootStackParamList, 'PerfilTeacher'>;


export function StarRating() {
    const route = useRoute<PerfilTeacherParams>();
    const { name, id } = route.params
    const [starCommit, setStarCommit] = useState<boolean>(false);
    const { navigate } = useNavigation()

    function home() {
        setStarCommit(false)

        navigate('Home')
    }

    async function setStar(star: number) {

        await api.patch(`/update/${id}`, {
            star: star
        })
            .then(response => {
                setStarCommit(true)
                console.log(star, id)
            })
            .catch(erro => {
                console.log(erro)
            })

    }
    return (
        <Conteiner >
            <AwesomeAlert
                show={starCommit}
                showProgress={false}
                title="Obrigado por sua avaliação!"
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
            <ConteinerAvatar >
                <AvatarTeacher source={require('../../../assets/person.png')} />
                <Star maxStars={5} rating={1} onRatingPress={(star) => {

                    setStar(star);
                }

                } />
            </ConteinerAvatar>
            <ConteinerInput>
                <NameTeacher>{name}</NameTeacher>
                <TextTeacher>Avalie o professor</TextTeacher>
            </ConteinerInput>

        </Conteiner>
    )
}