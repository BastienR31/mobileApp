export const GET_DATA = 'GET_DATA';

export const getMarsData = (nasaData) => ({
    type: GET_DATA,
    payload: {
        nasaData,
    },
});
