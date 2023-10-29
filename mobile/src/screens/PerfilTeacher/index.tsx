
import {
    AvatarTeacher,
    Conteiner,
    ConteinerAvatar,
    ConteinerInput,
    ConteinerName,
    NameTeacher,
    InputLesson,
    TextTeacher
} from "./style";
import React, { useEffect, useState } from "react";
import { Fontisto, Ionicons } from '@expo/vector-icons';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import StarFixer from './../../components/StarFixer/index';
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

export function PerfilTeacher() {

    const navigation = useNavigation();
    const [ratin, setRating] = useState(0);
    const route = useRoute<PerfilTeacherParams>();
    const { avatar, name, modal, rating, id } = route.params;

    const handleRatingPress = (newRating: number) => {
        setRating(newRating);

    };
    function handleNavigate() {
        navigation.navigate('StarRating', {
            id: id,
            avatar: '../../../assets/person.png',
            name: name,
            rating: rating,
        })
    }



    function handleAgenda() {
        navigation.navigate('Agenda')

    }

    return (


        <Conteiner>
            < ConteinerAvatar >
                <AvatarTeacher source={require('../../../assets/person.png')} />
                <StarFixer maxStars={5} rating={rating} onRatingPress={handleRatingPress} />
            </ConteinerAvatar>


            <ConteinerInput >
                <ConteinerName>
                    <NameTeacher>{name}</NameTeacher>
                </ConteinerName>
                <InputLesson
                    onPress={() => handleAgenda()}
                >
                    <Fontisto name="date" size={24} color={Theme.colors.white100} />
                    <TextTeacher>Agende sua aula</TextTeacher>
                </InputLesson>
                <InputLesson
                    onPress={() => handleNavigate()}
                >
                    <Ionicons name="list-outline" size={30} color={Theme.colors.white100} />
                    <TextTeacher>Avalie o professor</TextTeacher>
                </InputLesson>
            </ConteinerInput>
        </Conteiner>


    )
}