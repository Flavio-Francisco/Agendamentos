
import { Formik } from "formik";
import { Theme } from "../../../Thema";
import { Title, Text, Conteiner, Label, TextButton, ButtonUpdateUser, TextErro, ConteinerImage, IconApp } from "./style";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../api/api";
import AwesomeAlert from 'react-native-awesome-alerts';
import { AuthContext } from "../../context/Auth";

interface MyFormValues {
    user: string;
    email: string;

}

const validationSchema = Yup.object().shape({
    user: Yup.string()
        .label('user')
        .required('Usuário obrigatório').min(4, 'digite mais quatro letras'),
    email: Yup.string()
        .label('email')
        .required('Digite um email válido').matches(/^[a-zA-Z0-9._%+-]+@{1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'O email deve conter "@" e "."'),
    password: Yup.string()

});


export default function UserUpdate() {
    const navigation = useNavigation();
    const FormValues: MyFormValues = { user: '', email: '' };
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const { user } = useContext(AuthContext)



    function hideAlertHandler() {
        setShowAlert(false);
        navigation.navigate('Home')
    };


    return (
        <Conteiner>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Dados atualizados com sucesso!"
                contentStyle={{ width: 300 }}
                closeOnTouchOutside={true}
                titleStyle={{ fontSize: 22, color: Theme.colors.greem }}
                messageStyle={{ fontSize: 20, color: Theme.colors.greem }}
                closeOnHardwareBackPress={false}
                confirmButtonStyle={{ width: 100, alignItems: 'center', marginLeft: 25, }}
                showConfirmButton={true}
                confirmText="Ok"
                confirmButtonColor={Theme.colors.greem}
                onConfirmPressed={hideAlertHandler}

            />
            <ConteinerImage>
                <IconApp
                    source={require("../../../assets/curuja.png")}
                />
            </ConteinerImage>

            <Title>
                <Text>Atualizar Usuário </Text>
            </Title>
            <Formik
                initialValues={FormValues}

                onSubmit={values => {
                    if (values) {
                        api.patch(`/updateClient/${user.user.id}`, {
                            name: values.user,
                            email: values.email
                        })
                            .then(respose => {

                                setShowAlert(true);

                            })
                            .catch(erro => {
                                console.log(erro);

                            })
                    }

                    console.log(values)
                }

                }
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        <Label
                            placeholder="Digite o novo nome de usuário"
                            onChangeText={handleChange('user')}
                            onBlur={handleBlur('user')}
                            value={values.user}
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.user ? (<TextErro>{errors.user}</TextErro>) : (<></>)}
                        <Label
                            placeholder="Digite o novo  email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.email ? (<TextErro>{errors.email}</TextErro>) : (<></>)}

                        <ButtonUpdateUser
                            onPress={() => handleSubmit()}>
                            <TextButton>Atualizar</TextButton>
                        </ButtonUpdateUser>
                    </>
                )}

            </Formik>

        </Conteiner>

    )

}