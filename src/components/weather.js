// src/components/Weather.js
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from '../api/weatherApi';

const Weather = () => {
  const [city, setCity] = useState('New York');

  // Use useQuery to call the API
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => fetchWeatherData(city),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
      <p>Weather: {data.weather[0].description}</p>
      
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
    </div>
  );
};

export default Weather;
