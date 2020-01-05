import { registerRootComponent } from 'expo';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from 'HomeScreen';

// import SoundScreen from './SoundScreen';
// import SettingsScreen from './SettingsScreen';

// import { SettingsScreen } from 'Screens/SettingsScreen.js';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen }
});

const App = createAppContainer(MainNavigator);

export default registerRootComponent(App);
