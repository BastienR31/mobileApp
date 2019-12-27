import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useNavigation } from 'react-navigation-hooks';

const Menu = ( { page = null } ) => {

    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            { page !== 'Home' &&
                <View style={styles.buttonContainer}>
                    <Button onPress={() => {
                        navigate('Home');
                    }}
                        title="Go Home"
                    />
                </View>
            }
            { page !== 'Settings' &&
                <View style={styles.buttonContainer}>
                    <Button onPress={() => {
                        navigate('Settings');
                    }}
                        title="Go Settings"
                    />
                </View>
            }
        </View>
    );
}

Menu.navigationOptions = {
    title: 'Menu'
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottomWidth: 15,
      borderColor: '#242134',
    },
    buttonContainer: {
        marginHorizontal: 20,
    },
  });

export default Menu;