import React from 'react';

import { registerRootComponent } from 'expo';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '@screens/HomeScreen';
import SettingsScreen from '@screens/SettingsScreen';

import { Provider } from 'react-redux';
import Store from '@stores/configureStore';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});

const Navigation = createAppContainer(MainNavigator);

const App = () => {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  );
};

export default registerRootComponent(App);
