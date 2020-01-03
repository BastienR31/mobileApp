import { registerRootComponent } from 'expo';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import HomeScreen from './HomeScreen';

import HomeScreen from 'Screens/HomeScreen/index.js';
// import SoundScreen from './SoundScreen';
import SettingsScreen from './SettingsScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});

const App = createAppContainer(MainNavigator);

export default registerRootComponent(App);
