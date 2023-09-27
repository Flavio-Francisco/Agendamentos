import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Button,
    View
} from "react-native";
import { openBrowserAsync } from "expo-web-browser";


export default function Payment() {
    return (
        <View style={styles.container} >
            < Button title="Open Browser"
                onPress={
                    () => openBrowserAsync('http://192.168.0.10:8080/test')
                }
            />
        </View>);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});