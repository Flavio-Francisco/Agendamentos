import React, { useState, useEffect, useContext } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AvatarUser, ButtomAvatar, Conteiner, ViewButtom } from './styles';
import { AuthContext } from '../../context/Auth';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Theme } from '../../../Thema';

export default function UpdateAvatar() {
    const [image, setImage] = useState<string>('');
    const { setAvatar, user } = useContext(AuthContext)


    const pickImage = async () => {
        console.log(user.user.avatar);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });


        if (result && result.assets) {
            setImage(result.assets[0].uri);
            const imageArray = await convertToUint8Array(result.assets[0].uri);
            // Envie a imagem para a função de upload
            setAvatar(imageArray);
            console.log("Deu certo");
        }
    };
    const convertToUint8Array = async (filePath: string): Promise<Uint8Array> => {
        const response = await fetch(filePath);
        const blob = await response.blob();
        const arrayBuffer = await blob.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        return uint8Array;
    };

    return (
        <Conteiner >

            {user.user.avatar == null ?
                <AvatarUser source={{ uri: user.user.avatar }} />
                :
                <AvatarUser source={{ uri: image }} />
            }

            <ButtomAvatar onPress={pickImage} >

                <SimpleLineIcons name="camera" size={24} color={Theme.colors.white100} />

            </ButtomAvatar>

        </Conteiner>
    );
}
