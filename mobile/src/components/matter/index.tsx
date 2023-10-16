import { useContext, useEffect, useState } from "react";
import { ConteinerTeacher, ConteinrtTime, MatterText2, TimeConteiner, TimeText2 } from "./styles";
import { AuthContextTeacher } from "../../context/Teacher";


interface Matte {
  id_matter: string;
  start_time: string;
  end_time: string;
  date: string;
  id_prof?: string;
  onPress: () => void;

}


export function Matter(props: Matte) {

  const { filterTeacher, getTeacher } = useContext(AuthContextTeacher);
  const [teacherMatter, setTeacherMatter] = useState('')
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
  const date = new Date(props.date);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const formattedDate = date.toLocaleDateString('pt-BR', options);



  useEffect(() => {
    const filteredTeachers = filterTeacher.filter(item => item.id === props.id_prof);

    if (filteredTeachers.length > 0) {
      const teacherNames = filteredTeachers.map(item => item.name);

      setTeacherMatter(teacherNames.join(''));
    } else {


      setTeacherMatter('Nenhum professor encontrado');
    }
  }, [props.id_prof, filterTeacher]);
  return (
    <TimeConteiner onPress={() => props.onPress()}>
      <ConteinrtTime >
        <TimeText2><MatterText2>Matéria: </MatterText2>{nomeMateria}</TimeText2>
        <TimeText2><MatterText2>Professor(a): </MatterText2>{teacherMatter}</TimeText2>
        <ConteinerTeacher>
          <TimeText2><MatterText2>Data: </MatterText2>{formattedDate}</TimeText2>
          <TimeText2><MatterText2>Horário </MatterText2>{props.start_time} as {props.end_time}</TimeText2>
        </ConteinerTeacher>
      </ConteinrtTime>
    </TimeConteiner>
  )

}



