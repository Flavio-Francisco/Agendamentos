
import { TextErro, ButtomLogin, ConteinerLogin, Label, TextButton, TextLogin, TextLabel, ButtomIcons, ViewHorizontal, HorizontalLine, TextHorizontal, ConteinerImage, IconApp, TextLink } from "./style";
import { Foundation, Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik';
import * as Yup from "yup";
import * as LocalAuthentication from 'expo-local-authentication';
import { Theme } from "../../../Thema";
import { api } from "../../api/api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth";
import { AuthContextTeacher } from "../../context/Teacher";




interface MyFormValues {
  user: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  user: Yup.string()
    .label('user')
    .required('usuario obrigatório'),
  password: Yup.string()
    .label('password')
    .required('senha obrigatória').min(4, 'digite mais quatro digitos')
});

export default function Login() {

  const { navigate } = useNavigation();
  const { user, singnIn } = useContext(AuthContext)
  const { matterfindAll } = useContext(AuthContextTeacher)

  const FormValues: MyFormValues = { user: '', password: '' };
  // impmlementado biometria
  async function verifyAuth() {
    if (user.token === undefined || user.token === '') {
      console.log('não tem token');
    } else {
      hadleAuth()
    }

  }
  async function hadleAuth() {

    const isBiometric = await LocalAuthentication.isEnrolledAsync()
    if (isBiometric === false) {
      console.log("N biometria encontrada");
    }
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Entre com digital',
      fallbackLabel: 'Digital não encontrada',

    })


  }


  useEffect(() => {
    console.log('isso é o token ', user.token);

    verifyAuth()
  }, [])

  return (
    <ConteinerLogin>

      <ConteinerImage>
        <IconApp
          source={require("../../../assets/curuja.png")}
        />
      </ConteinerImage>

      <TextLogin>Login</TextLogin>
      <Formik
        initialValues={FormValues}

        onSubmit={values => {
          api.post('/loginclient', {
            name: values.user,
            password: values.password
          })
            .then(respose => {
              singnIn(respose.data)
              matterfindAll()
              navigate('Home')
              console.log(respose.data)

            })
            .catch(erro => {
              console.error(erro)
            })


          console.log(values)
        }

        }
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextLabel>Usuário</TextLabel>
            <Label
              onChangeText={handleChange('user')}
              onBlur={handleBlur('user')}
              value={values.user}
              placeholder="Digite seu usuário"
              placeholderTextColor={Theme.colors.white100}

            />
            {errors.user ? (<TextErro>user Invalid</TextErro>) : (<></>)}
            <TextLabel>Senha</TextLabel>
            <Label
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Digite sua senha"
              placeholderTextColor={Theme.colors.white100}
              secureTextEntry={true}
            />
            {errors.password ? (<TextErro>{errors.password}</TextErro>) : (<></>)}
            <ButtomLogin
              onPress={() => handleSubmit()}
            >
              <TextButton>Entrar</TextButton>
            </ButtomLogin>


          </>
        )}
      </Formik>
      <ButtomIcons onPress={() => navigate('Register')}>
        <TextLink>Ainda não sou cadastrado!</TextLink>
      </ButtomIcons>
    </ConteinerLogin>
  )
}