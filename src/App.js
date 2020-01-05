import { registerRootComponent } from 'expo';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import HomeScreen from 'HomeScreen';

import HomeScreen from '@screens/HomeScreen';

// import SoundScreen from './SoundScreen';
import SettingsScreen from '@screens/SettingsScreen';

// import { SettingsScreen } from 'Screens/SettingsScreen.js';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});

const App = createAppContainer(MainNavigator);

export default registerRootComponent(App);
