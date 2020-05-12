import { NavigationContainer, creaeSwitchNavigator} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './Components/Screens/Login/AuthScreen.js';
import Mainmenu from './Components/Screens/MainMenu/MainMenu.js';

const AuthNavigator = createStackNavigator({
  Auth: AuthScreen
});
const GameNavigator = createStackNavigator({
  MainScreen: Mainmenu ,
})
const MainNavigator = creaeSwitchNavigator({
  Auth: AuthNavigator,
  Home: GameNavigator ,
});

export default createAppContainer(MainNavigator);