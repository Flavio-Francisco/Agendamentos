

import { ButtomIcon, Icon, TextIcon, HorizontalLine, Container, Title, ContainerTitle, Header, AvatarUser, ContaineModal } from "./style";
import { Modal, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../../../Thema';
import { Teacher } from '../StarTeacher';






export default function Options() {



  const { navigate } = useNavigation()



  return (
    <ContaineModal>

      <Header>
        <AvatarUser
          source={{ uri: 'https://avatars.githubusercontent.com/u/111377254?v=4' }}
        />
        <Title> Olá, Flávio</Title>
      </Header>

      <Container>
        <ContainerTitle>
          <Title> Selecione uma materia</Title>
        </ContainerTitle>
        <HorizontalLine />
        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
            onPress={() => navigate('StarTeacher', {
              avatar: '',
              modal: true,
              id: '',
              name: '',
              rating: 0
            })}
          >
            <Icon source={require('../../../assets/portugues2.png')} />
          </ButtomIcon>
          <TextIcon>Português</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
          ><Icon source={require('../../../assets/quimica.png')} />
          </ButtomIcon>
          <TextIcon>Quimica</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
          ><Icon source={require('../../../assets/fisica.png')} />
          </ButtomIcon>
          <TextIcon>Fisica</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
          ><Icon source={require('../../../assets/biologia.png')} />
          </ButtomIcon>
          <TextIcon>Biologia</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
          ><Icon source={require('../../../assets/matematica.png')} />
          </ButtomIcon>
          <TextIcon>Matematica</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
          ><Icon source={require('../../../assets/geografia.png')} />
          </ButtomIcon>
          <TextIcon>Geografia</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
          ><Icon source={require('../../../assets/ingles.png')} />
          </ButtomIcon>
          <TextIcon>Inglês</TextIcon>
        </View>

        <View>
          <ButtomIcon
            style={{ backgroundColor: Theme.colors.white100 }}
          ><Icon source={require('../../../assets/historia.png')} />
          </ButtomIcon>
          <TextIcon>História</TextIcon>
        </View>


      </Container>




    </ContaineModal>
  )
}
