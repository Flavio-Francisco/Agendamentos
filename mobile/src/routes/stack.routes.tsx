
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/login';
import Options from '../screens/Options';
import { PerfilTeacher } from '../screens/PerfilTeacher';
import StarTeacher from '../screens/StarTeacher';
import { Theme } from '../../Thema';
import { StarRating } from '../screens/StarRating';
import Schedule from '../screens/Schedule';
import Home from '../screens/Home';
import Agenda from '../screens/Agenda';
import Register from '../screens/register';
import UpdatePassWord from '../screens/UpdatePassword';







const { Navigator, Screen } = createStackNavigator();

export default function Stack() {
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
        name='Options'
        component={Options}
        options={{

          headerShown: false
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
        name='PerfilTeacher'
        component={PerfilTeacher}
        options={{

          headerShown: true,
          headerTitle: '',
          headerTintColor: Theme.colors.greem,

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
        name='Agenda'
        component={Agenda}
        options={{

          headerShown: true,
          headerTitle: '',
          headerTintColor: Theme.colors.greem,

        }}

      />
      <Screen
        name='UpdatePassWord'
        component={UpdatePassWord}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTintColor: Theme.colors.greem,

        }}
      />

    </Navigator>
  )
}
