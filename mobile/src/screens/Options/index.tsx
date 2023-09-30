

import { ButtomIcon, Icon, TextIcon, HorizontalLine, Container, Title, ContainerTitle, Header, AvatarUser, ContaineModal } from "./style";
import { Modal, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../../Thema';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { AuthContextTeacher } from "../../context/Teacher";


export default function Options() {


  const { user } = useContext(AuthContext)
  const { filterTeacher, matterfindAll } = useContext(AuthContextTeacher)

  const { navigate } = useNavigation()

  function handleNavigate(id: string) {
    navigate('StarTeacher', {
      avatar: '',
      name: '',
      rating: 0,
      id: id,
      modal: true
    })
  }


  return (
    <ContaineModal>

      <Header>
        <Title> Olá, {user.user.name}</Title>
      </Header>

      <Container>
        <ContainerTitle>
          <Title> Selecione uma materia</Title>
        </ContainerTitle>
        <HorizontalLine />
        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => {
              handleNavigate('1')

            }}
          >
            <Icon source={require('../../../assets/portugues2.png')} />
          </ButtomIcon>
          <TextIcon>Português</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => {
              handleNavigate('2')

            }}
          ><Icon source={require('../../../assets/quimica.png')} />
          </ButtomIcon>
          <TextIcon>Quimica</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => {
              handleNavigate('3')

            }}
          ><Icon source={require('../../../assets/fisica.png')} />
          </ButtomIcon>
          <TextIcon>Fisica</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => {
              handleNavigate('4')

            }}
          ><Icon source={require('../../../assets/biologia.png')} />
          </ButtomIcon>
          <TextIcon>Biologia</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => {
              handleNavigate('5')

            }}
          ><Icon source={require('../../../assets/matematica.png')} />
          </ButtomIcon>
          <TextIcon>Matematica</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => {
              handleNavigate('6')

            }}
          ><Icon source={require('../../../assets/geografia.png')} />
          </ButtomIcon>
          <TextIcon>Geografia</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => {
              handleNavigate('7')

            }}
          ><Icon source={require('../../../assets/ingles.png')} />
          </ButtomIcon>
          <TextIcon>Inglês</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => {
              handleNavigate('8')

            }}
          ><Icon source={require('../../../assets/historia.png')} />
          </ButtomIcon>
          <TextIcon>História</TextIcon>
        </View>


      </Container>




    </ContaineModal>
  )
}
