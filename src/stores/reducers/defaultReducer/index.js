import { GET_DATA } from '../../actions';

const initialState = {
    data: []
};

function toggleReducer(state = initialState, action) {
    // let nextState;
    console.log('action', action.payload);
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}

export default toggleReducer;
