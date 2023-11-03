
import {
    StyleSheet,
    Button,
    View
} from "react-native";
import { openBrowserAsync } from "expo-web-browser";


export default function ExpoWebBrowserExample(url: string) {
    const Url = 'https://agendamentos-n3ayjix5f-flavio-francisco.vercel.app/mercadoPago.html';
    return (

        <View style={styles.container} >

            < Button title="Open Browser"
                onPress={
                    () => openBrowserAsync(Url)
                } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});


// <Fontisto name="credit-card" size={24} color={Theme.colors.greem} />


