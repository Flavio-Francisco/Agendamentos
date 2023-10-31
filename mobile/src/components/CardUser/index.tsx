import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Avatar, Conteiner, ConteinerAvatar, ConteinerText, EmailUser, NameUser } from "./styles";
import UpdateAvatar from "../UpdateAvatar";


export default function CardUser() {
    const { user } = useContext(AuthContext)

    return (
        <Conteiner>
            <ConteinerAvatar>

            </ConteinerAvatar>
            <ConteinerText>
                <NameUser>{user.user?.name}</NameUser>
                <EmailUser>{user.user?.email}</EmailUser>
            </ConteinerText>
        </Conteiner>
    )
}