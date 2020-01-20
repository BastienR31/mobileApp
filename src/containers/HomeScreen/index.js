import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomeScreen from '@screens/HomeScreen';
import getMarsDataFromApi from '../../stores/thunks';

const HomeScreenContainer = props => <HomeScreen {...props} />;

const mapStateToProps = (state) => ({

    data: state.data
});

const mapDispatchToProps = dispatch => ({
    getMarsWeatherData: () => dispatch(getMarsDataFromApi())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenContainer);
