import { ConteinerTeacher, ConteinrtTime, MatterText2, TimeConteiner, TimeText2 } from "./styles";


interface Matte {
  id_matter: string;
  start_time: string;
  end_time: string;
  onPress: () => void;

}


export function Matter(props: Matte) {


  var nomeMateria;

  switch (props.id_matter) {
    case '1':
      nomeMateria = "Português";
      break;
    case '2':
      nomeMateria = "Matemática";
      break;
    case '3':
      nomeMateria = "Quimica";
      break;
    case '4':
      nomeMateria = "Física";
      break;
    case '5':
      nomeMateria = "Biologia";
      break;
    case ' 6':
      nomeMateria = "Geografia";
      break;
    case '7':
      nomeMateria = "Inglês";
      break;
    case '8':
      nomeMateria = "História";
      break;

    default:
      nomeMateria = "Materia desconhecida ";



  }

  return (
    <TimeConteiner onPress={() => props.onPress()}>
      <ConteinrtTime >
        <MatterText2>{nomeMateria}</MatterText2>
        <ConteinerTeacher>
          <TimeText2>{props.start_time} as {props.end_time}</TimeText2>
        </ConteinerTeacher>
      </ConteinrtTime>
    </TimeConteiner>
  )

}



