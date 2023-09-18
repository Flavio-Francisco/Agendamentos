import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'




import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/Home';
import Options from '../screens/Options';
import { PerfilTeacher } from '../screens/PerfilTeacher';
import StarTeacher from '../screens/StarTeacher';
import { StarRating } from '../screens/StarRating';
import Schedule from '../screens/Schedule';
import { createStackNavigator } from '@react-navigation/stack';
import { Theme } from '../../Thema';
import Agenda from '../screens/Agenda';




const { Navigator, Screen } = createStackNavigator();

export default function Tab() {
    return (
        <Navigator>
              <Screen
                name='Login'
                component={Login}
                options={{

                    headerShown: false
                }}

            />

            <Screen
                name='Register'
                component={Register}
                options={{

                    headerShown: false
                }}

            />
         


        </Navigator>
    )
}
StarTeacher