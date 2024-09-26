// src/api/weatherApi.js

const API_KEY = 'your_openweather_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherData = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
  
  // Handle errors
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};
