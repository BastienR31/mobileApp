const initialState = {
    data: []
};

function toggleReducer(state = initialState, action) {
    let nextState;

    switch (action.type) {
    case 'GET_DATA':
        return nextState;
    default:
        return state;
    }
}

export default toggleReducer;
