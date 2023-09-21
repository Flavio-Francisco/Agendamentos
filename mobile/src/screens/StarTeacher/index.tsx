import React, { useContext, useEffect, useState } from 'react';


import { Conteiner, ConteinerInput, ViewTeacher, Input } from './styles';
import { FlatList } from 'react-native';
import CardTeacher from '../../components/CardTeacher';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AuthContextTeacher, AuthTeacherData } from '../../context/Teacher';




type RootStackParamList = {
    Teacher: {
        id: number;
        name: string;
    };
};
type PerfilTeacherParams = RouteProp<RootStackParamList, 'Teacher'>;


export default function StarTeacher() {
    const route = useRoute<PerfilTeacherParams>();
    const teacher = route.params;

    const navigation = useNavigation();
    const { portuguese, chemical, physical, biology, mathematics, geography, english, history } = useContext(AuthContextTeacher)

    const handleTeacher: AuthTeacherData[] | null = (() => {
        switch (teacher.id - 0) {
            case 1: {
                console.log('p');

                return portuguese;
            }
            case 2: {
                return chemical;
            }
            case 3: {
                return physical;
            }
            case 4: {
                return biology;
            }
            case 5: {
                return mathematics;
            }
            case 6: {
                return geography;
            }
            case 7: {
                return english;
            }
            case 8: {
                return history;
            }
            default: {

                return null;
            }
        }
    })();



    useEffect(() => {
        handleTeacher
        console.log(handleTeacher);

        console.log("o id é :  " + teacher.id);
    }, [])




    return (
        <Conteiner  >
            <ConteinerInput>
                <Input />
            </ConteinerInput>
            <ViewTeacher >
                <FlatList
                    data={handleTeacher}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => <CardTeacher name={item.item.name} id={''} userName={''} email={''} password={''} adm={false} teacher={false} star={0} matte_id={0} />}
                />
            </ViewTeacher>
        </Conteiner>
    );
};


