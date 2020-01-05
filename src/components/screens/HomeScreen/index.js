import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';

import Menu from '@organisms/Menu';

import { getData } from '@api/nasa';

const HomeScreen = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Récupère toutes les data
        getData().then((nasaData) => setData(nasaData));
    }, []);

    return (
        <>
            <Menu page="Home" />
            <Text>Home Landyard</Text>
            <Text>{data && data.First_UTC}</Text>
            <Text>{data && data.Season}</Text>
        </>
    );
};

// const getAllData = () => {
//     const action = { type: "GET_DATA", value: this.state.data };
//     this.props.dispatch(action);
// };

HomeScreen.navigationOptions = {
    title: 'Home'
};

export default HomeScreen;
