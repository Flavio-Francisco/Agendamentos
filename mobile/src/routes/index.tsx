import { NavigationContainer } from "@react-navigation/native";
import Stack from "./stack.routes";
import { useState } from "react";
import Tab from "./tab.routes";




export default function Routes() {

  const [user, setUser] = useState(false)
  return (

    <NavigationContainer>

      {user ? <Tab /> : <Stack />}


    </NavigationContainer>

  );
}


