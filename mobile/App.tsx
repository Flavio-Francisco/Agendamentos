import 'react-native-gesture-handler';
import Routes from "./src/routes";
import { AuthContextProvider } from "./src/context/Auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Theme } from './Thema';
import { AuthContextProviderDate } from './src/context/Agenda';
import { AuthContextProviderTeacher } from './src/context/Teacher';
import { PaymentContextProvider } from './src/context/payments';




export default function App() {
  return (
    <PaymentContextProvider>
      <AuthContextProviderTeacher>
        <AuthContextProviderDate>
          <AuthContextProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <StatusBar
                backgroundColor={Theme.colors.greem}
                style='light'
              />
              <Routes />
            </GestureHandlerRootView>
          </AuthContextProvider>
        </AuthContextProviderDate>
      </AuthContextProviderTeacher>
    </PaymentContextProvider>
  );
}


