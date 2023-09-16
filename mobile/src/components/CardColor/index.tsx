import { ButtomIconAdd, Conteiner } from "./style";

interface ColorProps{
    id:string,
    color:string,
}

export default function CardColor(props:ColorProps){
    return(
        <Conteiner>
           <ButtomIconAdd
           style={{
            backgroundColor:props.color
           }}
           />
        </Conteiner>
    )
}