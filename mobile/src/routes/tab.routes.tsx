import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'




import Login from '../screens/login';
import Register from '../screens/register';
import Home from '../screens/Home';
import Options from '../screens/Options';
import {  PerfilTeacher } from '../screens/PerfilTeacher';
import StarTeacher from '../screens/StarTeacher';
import { StarRating } from '../screens/StarRating';
import Schedule from '../screens/Schedule';




const{Navigator,Screen} = createMaterialBottomTabNavigator();

export default function Tab() {
    return(
        <Navigator>
           <Screen
          name='Schedule'
          component={Schedule}
         
          />

      <Screen
          name='StarTeacher'
          component={StarTeacher}
         
          />
         <Screen
          name='StarRating'
          component={StarRating}
        
         />
         
             <Screen
          name='Options'
          component={Options}
         
          />
            <Screen
          name='Login'
          component={Login}
       
           />  
       
         <Screen
          name='Home'
          component={Home}
        
          /> 
          <Screen
          name='PerfilTeacher'
          component={PerfilTeacher}
       
           />  
            
         
         
        </Navigator>
    )
}
StarTeacher