import React, {useState, useEffect} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

import { Audio, Video } from 'expo-av';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import SoundScreen from './SoundScreen';
import SettingsScreen from './SettingsScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen }
});

const App = createAppContainer(MainNavigator);

export default App;

