// Store/configureStore.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import toggleReducer from '@reducers/defaultReducer';

export default createStore(toggleReducer, applyMiddleware(thunk));
