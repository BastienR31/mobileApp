import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import Menu from '@organisms/Menu';

import { getMarsDataFromApi } from '../../../stores/thunks';

// import { getMarsWeatherData, getImagesFromCuriosity } from '@api/nasa';

import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({
    getMarsWeatherData
}) => {
    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        // Récupère toutes les data
        // getMarsWeatherData();
        console.log('getMarsWeatherData', getMarsWeatherData);
        // getImagesFromCuriosity().then((curiosityImage) => setImage(curiosityImage));
        getMarsDataFromApi();
    }, []);

    console.log('data', data);

    console.log('TEST');

    return (
        <>
            <Menu page="Home" />

            <Text>Home Landyard</Text>

            <Text>{data && data.First_UTC}</Text>
            <Text>{data && data.Season}</Text>
            <Text>{data && data.Last_UTC}</Text>

            <Image
                style={
                    {
                        width: '100%',
                        height: 400
                    }
                }
                source={
                    {
                        uri: image
                    }
                }
            />

        </>
    );
};

// const getAllData = () => {
//     const action = { type: "GET_DATA", value: this.state.data };
//     this.props.dispatch(action);
// };

HomeScreen.navigationOptions = {
    title: 'Home',
    headerLeft: <AntDesign name="bars" size={32} color="black" />
};

// HomeScreen.propTypes = {
//     getMarsWeatherData: PropTypes.func
// };


export default HomeScreen;
