import {
    Button,
    Linking
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
const ButtonCustomTabs = () => {
    const openUrl = async (url: string) => {
        if (await InAppBrowser.isAvailable()) {
            InAppBrowser.open(url, {
                // iOS Properties
                dismissButtonStyle: 'cancel',
                preferredBarTintColor: '#453AA4',
                readerMode: false,
                animated: true,
                modalEnabled: true,
                // Android Properties
                showTitle: true,
                toolbarColor: '#6200EE',
                secondaryToolbarColor: 'black',
                enableUrlBarHiding: true,
                enableDefaultShare: true,
                forceCloseOnRedirection: false, // Animation
                animations: {
                    startEnter: 'slide_in_right',
                    startExit: 'slide_out_left',
                    endEnter: 'slide_in_left',
                    endExit: 'slide_out_right',
                },
            });
        } else {
            Linking.openURL(url);
        }
    };
    return (< Button title="Press Me"
        onPress={
            () =>
                openUrl('YOUR-URL-PREFERENCE')
        }
    />);
};
export default ButtonCustomTabs;