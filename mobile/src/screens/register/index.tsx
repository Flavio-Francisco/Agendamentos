
import { Formik } from "formik";
import { Theme } from "../../../Thema";
import { Title, Text, Conteiner, Label, TextButton, ButtomRegister, TextErro, ConteinerImage, IconApp } from "./style";
import React from "react";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { api } from "../../api/api";



interface MyFormValues {
    user: string;
    email: string;
    password: string;
    passwordConfim: string;
}

const validationSchema = Yup.object().shape({
    user: Yup.string()
        .label('user')
        .required('Usuário obrigatório').min(4, 'digite mais quatro letras'),
    email: Yup.string()
        .label('email')
        .required('Digite um email válido').matches(/^[a-zA-Z0-9._%+-]+@{1}[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'O email deve conter "@" e "."'),
    password: Yup.string()
        .label('password')
        .required('Senha obrigatória').min(4, 'digite mais quatro digitos'),
    passwordConfim: Yup.string()
        .required('Confime a sua senha!')
        .oneOf([Yup.ref('password')], 'Senhas não conferem'),

});


export default function Register() {
    const navigation = useNavigation();
    const FormValues: MyFormValues = { user: '', email: '', password: '', passwordConfim: '' };

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
                        api.post('/createClient', {
                            name: values.user,
                            email: values.password,
                            password: values.password
                        })
                            .then(respose => {
                                Alert.alert(respose.data)
                                navigation.navigate('Login')
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
                            placeholder="Nome do usuário"
                            onChangeText={handleChange('user')}
                            onBlur={handleBlur('user')}
                            value={values.user}
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.user ? (<TextErro>{errors.user}</TextErro>) : (<></>)}
                        <Label
                            placeholder="Cadastre seu email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.email ? (<TextErro>{errors.email}</TextErro>) : (<></>)}
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