// import { getMarsWeatherData, getImagesFromCuriosity } from '@api/nasa';

import getMarsData from './actions';

export function getMarsDataFromApi() {

    console.log('test enter api 2')

    return async (dispatch, getState) => {
        console.log('async')
        try {
            const response = await fetch(
                `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`,
            );

            const responseJson = await response.json();

            console.log('toto')

            // increment number because it's the day in sol, start at 387

            // console.log('All data from mars json', responseJson[387]);

            // const solKeysArray = responseJson['sol_keys'];

            // let currentSolData;

            // solKeysArray && solKeysArray.map((solKeyItem) => {

            //     currentSolData = responseJson[solKeyItem];

            // });

            responseJson.then(data => console.log(data));

            // return currentSolData;

            return responseJson;

        } catch (error) {

            console.error('error', error);

            return error;
        }

    };

    // getMarsWeatherData().then(nasaData => {
    //     dispatch(getMarsData(nasaData));
    // });
}
