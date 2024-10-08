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
      "x-rapidapi-key": "c83184ebecmsh8c035eabde0930ep1b467ajsnec3d708bd848",
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
      "x-rapidapi-key": "c83184ebecmsh8c035eabde0930ep1b467ajsnec3d708bd848",
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
