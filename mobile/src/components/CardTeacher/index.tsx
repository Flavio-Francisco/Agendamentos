import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AvatarTeacher, Conteiner, ConteinerAvatar, Name, ConteinerStar, TestValue, ConteinerValue, ConteinerName } from "./styles";
import StarFixer from "../StarFixer";
import { AuthContextDate } from "../../context/Agenda";


interface Card {
  id: string;
  userName: string;
  star: number;
  timeValue: number;
}





export default function CardTeacher(props: Card) {
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();
  const { getDate } = useContext(AuthContextDate)
  const handleItemPress = useCallback(async () => {
    getDate(props.id)
    await navigation.navigate('PerfilTeacher', {
      id: props.id,
      avatar: '',
      name: props.userName,
      rating: props.star,
      modal: true
    });

    console.log(props);
  }, [props])

  useEffect(() => {

  }, [])


  const handleRatingPress = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <>
      <Conteiner onPress={() => handleItemPress()}>

        <ConteinerAvatar>

          <AvatarTeacher source={require('../../../assets/person.png')} />
          <ConteinerStar >
            <StarFixer maxStars={5} rating={props.star} onRatingPress={handleRatingPress} />
          </ConteinerStar>
        </ConteinerAvatar>

        <ConteinerName>
          <Name>{props.userName}</Name>
        </ConteinerName>

        <ConteinerValue>
          <TestValue > Hora aula:</TestValue><Name> R${props.timeValue}</Name>
        </ConteinerValue>

      </Conteiner>
    </>
  )
}