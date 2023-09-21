import { useCallback, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AvatarTeacher, Conteiner, ConteinerAvatar, Name, ConteinerStar } from "./styles";
import StarFixer from "../StarFixer";
import { AuthTeacherData } from "../../context/Teacher";







export default function CardTeacher(props: AuthTeacherData) {
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  const handleItemPress = useCallback(async () => {

    await navigation.navigate('PerfilTeacher', {
      id: props.id,
      avatar: '',
      name: props.name,
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
        <Name>{props.name}</Name>
      </Conteiner>
    </>
  )
}