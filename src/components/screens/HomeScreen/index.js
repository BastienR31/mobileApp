import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Menu from './Menu';

const HomeScreen = () => {

    return (
        <>
            <Menu page="Home" />
            <Text>Home Land</Text>
        </>
    );
};

HomeScreen.navigationOptions = {
    title: 'Beurre de cacahuètes'
};

export default HomeScreen;
