import React from 'react';
import { connect } from 'react-redux';

import HomeScreen from '@screens/HomeScreen';

const HomeScreenContainer = (props) => <HomeScreen {...props} />

const mapStateToProps = (state) => {

    console.log('state data', state.data);

    return {
        data: state.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => { dispatch(action); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer);
