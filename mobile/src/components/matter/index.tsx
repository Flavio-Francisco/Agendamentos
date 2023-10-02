

export function Matter(matter: number): string {


  let nomeMateria: string;

  switch (matter) {
    case 1:
      return nomeMateria = "Português";
      break;
    case 2:
      nomeMateria = "Matemática";
      break;
    case 3:
      nomeMateria = "Quimica";
      break;
    case 4:
      nomeMateria = "Física";
      break;
    case 5:
      nomeMateria = "Biologia";
      break;
    case 6:
      nomeMateria = "Geografia";
      break;
    case 7:
      nomeMateria = "Inglês";
      break;
    case 8:
      nomeMateria = "História";
      break;

    default:
      nomeMateria = "Materia desconhecida ";



  }
  console.log('====================================');
  console.log(matter);
  console.log('====================================');
  return nomeMateria;





}



