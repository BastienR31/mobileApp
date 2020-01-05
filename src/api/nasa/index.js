
const getData = async () => {

    try {
      const response = await fetch(
        'https://api.nasa.gov/insight_weather/?api_key=CXiM8fcaCaqwHCsC3RHc05EA8tUcb4ra8X5ne4V5&feedtype=json&ver=1.0',
      );
      
      const responseJson = await response.json();

      // increment number because it's the day in sol, start at 387

      // console.log('All data from mars json', responseJson[387]);

      const solKeysArray = responseJson['sol_keys'];

        let currentSolData;

      solKeysArray.map((solKeyItem) => {
        

        currentSolData = responseJson[solKeyItem];

      });
      //console.log(currentSolData)
      return currentSolData;

    } catch (error) {

      console.error('error', error);

      return error;
    }

}

export { getData }