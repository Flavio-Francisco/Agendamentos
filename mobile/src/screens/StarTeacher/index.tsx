import React, { useState } from 'react';


import { Conteiner, ConteinerInput, ViewTeacher, Input } from './styles';
import { FlatList } from 'react-native';
import CardTeacher from '../../components/CardTeacher';
import { useNavigation } from '@react-navigation/native';


export interface Teacher {
    id: string;
    avatar: string;
    Name: string;
    rating: number;
    modal: boolean
}




export default function StarTeacher() {

    const navigation = useNavigation();



    const Professor: Teacher[] = [

        {
            id: '1',
            avatar: 'https://instagram.fjdo1-2.fna.fbcdn.net/v/t51.2885-19/90091631_695847464556005_693095622927974400_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjdo1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=QcFa7cdcJeAAX-YpTrl&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB346W9SFzrD9Bjgz02F7pKuXGa14GwA6_zyCIB09tnqg&oe=64F8E929&_nc_sid=ee9879',
            rating: 5,
            Name: 'José Paulo',
            modal: false
        },
        {
            id: '2',
            avatar: 'https://leiteviana.com/images/Daniel.png',
            rating: 5,
            Name: 'Daniel Leite',
            modal: false
        },
        {
            id: '3',
            avatar: 'https://instagram.fjdo1-2.fna.fbcdn.net/v/t51.2885-19/372704407_858731281916798_2856140010321255645_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjdo1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=xY9nuacGXKMAX9q7WXB&edm=ABmJApABAAAA&ccb=7-5&oh=00_AfDM79WuN1PVXu9I3ZJ3mjjMfbLW0_EP4_KAPg81nFw1iQ&oe=64FA36DE&_nc_sid=b41fef',
            rating: 3,
            Name: 'Marcondes',
            modal: false
        },
        {
            id: '4',
            avatar: 'https://instagram.fjdo1-2.fna.fbcdn.net/v/t51.2885-19/159189692_132438842135380_5374241543839456628_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjdo1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=82pLSNIzwBkAX8iTTuW&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDPZR94YxAk2IgxPTnMuLM9UGeww_o3hwtfkHjvHdf3LA&oe=64F891A6&_nc_sid=8b3546',
            rating: 5,
            Name: 'Juliana Mafra',
            modal: false
        },
        {
            id: '5',
            avatar: 'https://instagram.fjdo1-2.fna.fbcdn.net/v/t51.2885-19/316887504_2332287740259836_4616756822802102767_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjdo1-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=r40RvDl2GUwAX_tZ9pO&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCifFu5leR63aYVusEH146G-HbgU7C3hYKGItUuNvFCiQ&oe=64F98627&_nc_sid=8b3546',
            rating: 5,
            Name: 'Ântonio Almeida',
            modal: false
        },

    ]


    return (
        <Conteiner  >
            <ConteinerInput>
                <Input />
            </ConteinerInput>
            <ViewTeacher >
                <FlatList
                    data={Professor}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => <CardTeacher avatar={item.item.avatar} Name={item.item.Name} rating={item.item.rating} id={''} modal={true} />}
                />
            </ViewTeacher>
        </Conteiner>
    );
};


