import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Menu from '@organisms/Menu';

const SettingsScreen = () => {

    return (
        <>
            <Menu page="Settings" />
            <Text>Settings Land</Text>
        </>
    );
}

SettingsScreen.navigationOptions = {
    title: 'Settings'
};

export default SettingsScreen;
