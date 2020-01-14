const apiKey = 'CXiM8fcaCaqwHCsC3RHc05EA8tUcb4ra8X5ne4V5';

export const getMarsWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`,
      );

      const responseJson = await response.json();

      // increment number because it's the day in sol, start at 387

      // console.log('All data from mars json', responseJson[387]);
      
      const solKeysArray = responseJson['sol_keys'];

      let currentSolData;

      solKeysArray && solKeysArray.map((solKeyItem) => {
      
        currentSolData = responseJson[solKeyItem];

      });
      
      return currentSolData;

    } catch (error) {

      console.error('error', error);

      return error;
    }
};

export const getImagesFromCuriosity = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`,
    );
    
    const responseJson = await response.json();

    const image = responseJson.photos[2].img_src;

    // console.log('All data images from mars json', responseJson);

    return image;

  } catch (error) {

    console.error('error', error);

    return error;
  }
};
