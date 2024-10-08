import axios from "axios";

export async function getWeatherData(endPoint, place_id, measurementSystem) {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endPoint}`,
    params: {
      place_id,
      timezone: "auto",
      language: "en",
      units: measurementSystem,
    },
    headers: {
      "x-rapidapi-key": "ba47eca8cdmshc70f6838251e5a3p113b30jsna4519bd16578",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function searchPlaces(text) {
  const options = {
    method: "GET",
    url: "https://ai-weather-by-meteosource.p.rapidapi.com/find_places",
    params: {
      text,
      language: "en",
    },
    headers: {
      "x-rapidapi-key": "ba47eca8cdmshc70f6838251e5a3p113b30jsna4519bd16578",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
