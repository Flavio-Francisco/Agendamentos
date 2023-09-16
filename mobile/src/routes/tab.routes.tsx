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
                name='Home'
                component={Home}
                options={{

                    headerShown: false
                }}

            />
            <Screen
                name='Schedule'
                component={Schedule}
                options={{

                    headerShown: true,
                    headerTitle: '',
                    headerTintColor: Theme.colors.greem,

                }}

            />

            <Screen
                name='StarTeacher'
                component={StarTeacher}
                options={{

                    headerShown: false
                }}

            />
            <Screen
                name='StarRating'
                component={StarRating}
                options={{

                    headerShown: true,
                    headerTitle: '',
                    headerTintColor: Theme.colors.greem,

                }}

            />

            <Screen
                name='Options'
                component={Options}
                options={{

                    headerShown: false
                }}

            />
            <Screen
                name='Login'
                component={Login}
                options={{

                    headerShown: false
                }}

            />


            <Screen
                name='PerfilTeacher'
                component={PerfilTeacher}
                options={{

                    headerShown: true,
                    headerTitle: '',
                    headerTintColor: Theme.colors.greem,

                }}


            />
            <Screen
                name='Agenda'
                component={Agenda}
                options={{

                    headerShown: true,
                    headerTitle: '',
                    headerTintColor: Theme.colors.greem,

                }}

            />

        </Navigator>
    )
}
StarTeacher