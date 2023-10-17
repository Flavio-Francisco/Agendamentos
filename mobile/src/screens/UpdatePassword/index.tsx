
import { Formik } from "formik";
import { Theme } from "../../../Thema";
import { Title, Text, Conteiner, Label, TextButton, ButtomUpdate, TextErro, ConteinerImage, IconApp } from "./style";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { api } from "../../api/api";
import AwesomeAlert from 'react-native-awesome-alerts';
import { AuthContext } from "../../context/Auth";

interface MyFormValues {

    currentPassword: string;
    password: string;
    passwordConfim: string;
}



export default function UpdatePassWord() {
    const { user } = useContext(AuthContext)
    const validationSchema = Yup.object().shape({

        currentPassword: Yup.string()
            .label('currentPassword')
            .required('Senha obrigatória').min(4, 'digite mais quatro digitos')
            .oneOf([user.user.password], 'Senhas não conferem')
        ,
        password: Yup.string()
            .label('password')
            .required('Senha obrigatória').min(4, 'digite mais quatro digitos'),
        passwordConfim: Yup.string()
            .required('Confime a sua senha!')
            .oneOf([Yup.ref('password')], 'Senhas não conferem'),

    });
    const navigation = useNavigation();
    const FormValues: MyFormValues = { currentPassword: '', password: '', passwordConfim: '' };
    const [showAlert, setShowAlert] = useState<boolean>(false);




    function hideAlertHandler() {
        setShowAlert(false);
        navigation.navigate('Home')
    };


    return (
        <Conteiner>

            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Senha Atualizada com sucesso!"
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
                <Text>Atualize sua senha</Text>
            </Title>
            <Formik
                initialValues={FormValues}

                onSubmit={values => {
                    console.log(user.user.id)
                    if (values) {
                        api.patch(`/updateClient/${user.user.id}`, {
                            password: values.password
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
                            placeholder="Digite sua senha Atual"
                            onChangeText={handleChange('currentPassword')}
                            onBlur={handleBlur('currentPassword')}
                            value={values.currentPassword}
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.currentPassword ? (<TextErro>{errors.currentPassword}</TextErro>) : (<></>)}
                        <Label
                            placeholder="Nova senha"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.password ? (<TextErro>{errors.password}</TextErro>) : (<></>)}
                        <Label
                            placeholder="Confime a senha"
                            onChangeText={handleChange('passwordConfim')}
                            onBlur={handleBlur('passwordConfim')}
                            value={values.passwordConfim}
                            secureTextEntry={true}
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.passwordConfim ? (<TextErro>{errors.passwordConfim}</TextErro>) : (<></>)}
                        <ButtomUpdate
                            onPress={() => handleSubmit()}>
                            <TextButton>Atuallizar</TextButton>
                        </ButtomUpdate>
                    </>
                )}

            </Formik>

        </Conteiner>

    )

}