import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from 'react-navigation-hooks';

const HomeScreen = () => {

    const { navigate } = useNavigation();

    return (
        <>
        <Text>Home</Text>
            <Button onPress={() => {
                navigate('Settings');
            }}
                title="Go Settings"
            />
        </>
    );
}

HomeScreen.navigationOptions = {
    title: 'Home'
};

export default HomeScreen;
