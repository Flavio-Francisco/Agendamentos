import { useCallback, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { AvatarTeacher, Conteiner, ConteinerAvatar, Name, ConteinerStar } from "./styles";
import StarFixer from "../StarFixer";
import { Teacher } from "../../screens/StarTeacher";







export default function CardTeacher(props: Teacher) {
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  const handleItemPress = useCallback(async () => {

    await navigation.navigate('PerfilTeacher', {
      id: props.id,
      avatar: props.avatar,
      name: props.Name,
      rating: props.rating,
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
          <AvatarTeacher source={{ uri: props.avatar }} />
          <ConteinerStar >
            <StarFixer maxStars={5} rating={props.rating} onRatingPress={handleRatingPress} />
          </ConteinerStar>
        </ConteinerAvatar>
        <Name>{props.Name}</Name>
      </Conteiner>
    </>
  )
}