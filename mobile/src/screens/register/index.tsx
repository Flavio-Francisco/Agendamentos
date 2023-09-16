
import { Formik } from "formik";
import { Theme } from "../../../Thema";
import { Title, Text, Conteiner, Label, TextButton, ButtomRegister, TextErro, ConteinerImage, IconApp } from "./style";
import React from "react";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";



interface MyFormValues {
    user: string;
    password: string;
    passwordConfim: string;
}

const validationSchema = Yup.object().shape({
    user: Yup.string()
        .label('user')
        .required('usuário').min(4, 'digite mais quatro letras'),
    password: Yup.string()
        .label('password')
        .required('senha obrigatoria').min(4, 'digite mais quatro digitos'),
    passwordConfim: Yup.string()
        .required('confime a sua senha!')
        .oneOf([Yup.ref('password')], 'senhas não conferem'),

});


export default function Register() {
    const navigation = useNavigation();
    const FormValues: MyFormValues = { user: '', password: '', passwordConfim: '' };

    return (
        <Conteiner>
            <ConteinerImage>
                <IconApp
                    source={require("../../../assets/curuja.png")}
                />
            </ConteinerImage>

            <Title>
                <Text>Cadastro </Text>
            </Title>
            <Formik
                initialValues={FormValues}

                onSubmit={values => {
                    if (values) {

                        Alert.alert('usuário casdatrado com sucesso!')
                        navigation.navigate('Login')
                    }

                    console.log(values)
                }

                }
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <>
                        <Label
                            placeholder="Nome do usuário"
                            onChangeText={handleChange('user')}
                            onBlur={handleBlur('user')}
                            value={values.user}
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.user ? (<TextErro>{errors.user}</TextErro>) : (<></>)}
                        <Label
                            placeholder="Cadastre a senha"
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
                        <ButtomRegister
                            onPress={() => handleSubmit()}>
                            <TextButton>Cadastrar</TextButton>
                        </ButtomRegister>
                    </>
                )}

            </Formik>

        </Conteiner>

    )

}