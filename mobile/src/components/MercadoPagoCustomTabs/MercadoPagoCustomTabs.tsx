import { Fontisto } from '@expo/vector-icons';
import { openBrowserAsync } from "expo-web-browser";
import { Button, TextCard, ConteinerTask } from "./style";
import { Theme } from '../../../Thema';



export default function Payment() {
    return (
        < Button
            onPress={
                () => openBrowserAsync('https://agendamentos-n3ayjix5f-flavio-francisco.vercel.app/mercadoPago.html')
            }>
            <ConteinerTask>
                <TextCard>Pagamentos</TextCard>
                <Fontisto name="credit-card" size={24} color={Theme.colors.greem} />
            </ConteinerTask>
        </Button>

    );
}
