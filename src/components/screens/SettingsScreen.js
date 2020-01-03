import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Menu from './Menu';

const SettingsScreen = () => {

    return (
        <>
            <Menu page="Settings" />
            <Text>Settings Land</Text>
        </>
    );
}

SettingsScreen.navigationOptions = {
    title: 'Lol'
};

export default SettingsScreen;
