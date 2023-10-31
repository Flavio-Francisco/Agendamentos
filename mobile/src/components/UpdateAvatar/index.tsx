import React, { useState, useEffect, useContext } from 'react';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { AvatarUser, ButtomAvatar, Conteiner, ViewButtom } from './styles';
import { AuthContext } from '../../context/Auth';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Theme } from '../../../Thema';
import { api } from '../../api/api';

export default function UpdateAvatar() {
    const [image, setImage] = useState<string>('b');
    const { user, setAvatar } = useContext(AuthContext);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        if (result && result.assets) {
            setImage(result.assets[0].uri);
            console.log(result.assets[0].uri);
            api.patch(`/updateClient/${user.user.id}`, {
                avatar: result.assets[0].uri
            })
                .then(response => {
                    if (result && result.assets && response.data) {
                        setAvatar(String(result.assets[0].uri));
                        console.log(response.data);

                    }
                }
                )
        }
    };




    return (
        <Conteiner>

            {image == 'b' ?
                <AvatarUser source={{ uri: user.user?.avatar }} />
                :
                <AvatarUser source={{ uri: image }} />
            }

            <ButtomAvatar onPress={pickImage} >

                <SimpleLineIcons name="camera" size={24} color={Theme.colors.white100} />

            </ButtomAvatar>

        </Conteiner>
    );
}
