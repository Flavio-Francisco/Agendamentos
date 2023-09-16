import 'react-native-gesture-handler';
import Routes from "./src/routes";
import { AuthContextProvider } from "./src/context/Auth";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Theme } from './Thema';


export default function App() {
  return (
    <AuthContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={Theme.colors.greem}
          style='light'
        />
        <Routes />
      </GestureHandlerRootView>
    </AuthContextProvider>
  );
}


