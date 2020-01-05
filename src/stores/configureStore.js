// Store/configureStore.js

import { createStore } from 'redux';
import toggleReducer from '@reducers/defaultReducer';

export default createStore(toggleReducer);
