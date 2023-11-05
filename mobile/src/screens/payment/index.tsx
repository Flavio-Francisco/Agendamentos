import { Formik } from "formik";
import { useContext, useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import * as Yup from "yup";
import { ButtomPayment, Conteiner, Label, TextButton, TextErro, TextTitle } from "./styles";
import { Theme } from "../../../Thema";
import { AuthContextPayment } from "../../context/payments";




interface MyFormValues {
    value: string;

}




export default function Payment() {
    const { createPrefence } = useContext(AuthContextPayment)

    const validationSchema = Yup.object().shape({
        value: Yup.string()
            .label('value')
            .required('Digite um Valor')
            .min(2, 'O valor mínimo é de 50 reais'),

    });

    const FormValues: MyFormValues = { value: '' };


    return (
        <>
            <Formik
                initialValues={FormValues}

                onSubmit={values => {

                    if (values) {

                        createPrefence(values.value)

                    }

                }

                }
                validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <Conteiner>
                        <TextTitle>Você sera redirecionado(a) para uma pagina externa</TextTitle>
                        <TextInputMask
                            type={'money'} // Defina o tipo de máscara como dinheiro
                            options={{
                                precision: 0, // Duas casas decimais
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$', // Símbolo de moeda
                            }}
                            style={{
                                borderWidth: 1,
                                borderColor: Theme.colors.greem,
                                fontSize: 20,
                                height: 60,
                                width: 350,
                                borderRadius: 10,
                                padding: 15,
                                color: Theme.colors.greem,


                            }}
                            placeholder="digite um valor"
                            onChangeText={handleChange('value')}
                            onBlur={handleBlur('value')}
                            value={values.value}
                            keyboardType="numeric"
                            placeholderTextColor={Theme.colors.greem}
                        />
                        {errors.value ? (<TextErro>{errors.value}</TextErro>) : (<></>)}
                        <ButtomPayment onPress={() => handleSubmit()}>
                            <TextButton>Depositar</TextButton>
                        </ButtomPayment>

                    </Conteiner>

                )}

            </Formik>
        </>
    )
}