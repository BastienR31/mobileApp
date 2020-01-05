import { registerRootComponent } from 'expo';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '@screens/HomeScreen';
import SettingsScreen from '@screens/SettingsScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});

const App = createAppContainer(MainNavigator);

export default registerRootComponent(App);
