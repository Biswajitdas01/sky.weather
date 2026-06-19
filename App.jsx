import { useState } from "react";
import WeatherCard from "./WeatherCard.jsx";

const cities = {
  "los angeles": {
    displayName: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437
  },
  "new york": {
    displayName: "New York",
    latitude: 40.7128,
    longitude: -74.006
  },
  london: {
    displayName: "London",
    latitude: 51.5072,
    longitude: -0.1276
  },
  dhaka: {
    displayName: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125
  },
  tokyo: {
    displayName: "Tokyo",
    latitude: 35.6762,
    longitude: 139.6503
  }
};

function getWeatherText(code) {
  if (code === 0) return "Clear sky";
  if ([1, 2, 3].includes(code)) return "Cloudy";
  if ([45, 48].includes(code)) return "Foggy";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "Rainy";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snowy";
  if ([95, 96, 99].includes(code)) return "Thunderstorm";
  return "Weather information available";
}

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const searchValue = city.trim().toLowerCase();

    if (!searchValue) {
      setMessage("Please type a city name.");
      setWeather(null);
      return;
    }

    const selectedCity = cities[searchValue];

    if (!selectedCity) {
      setMessage("City not found. Try Los Angeles, New York, London, Dhaka, or Tokyo.");
      setWeather(null);
      return;
    }

    setIsLoading(true);
    setMessage("");
    setWeather(null);

    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&current_weather=true`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not get weather data.");
      }

      const data = await response.json();
      const current = data.current_weather;

      setCityName(selectedCity.displayName);
      setWeather({
        temperature: current.temperature,
        windspeed: current.windspeed,
        weathercode: current.weathercode,
        condition: getWeatherText(current.weathercode)
      });
    } catch (error) {
      setMessage("Weather data could not be loaded. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="app">
      <section className="container">
        <h1>SkyCast Weather App</h1>
        <p className="intro">
          Search a city and see the current weather using a live weather API.
        </p>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Example: Dhaka"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <button type="submit">Get Weather</button>
        </form>

        <p className="hint">Available cities: Los Angeles, New York, London, Dhaka, Tokyo</p>

        {isLoading && <p className="loading">Loading weather...</p>}
        {message && <p className="message">{message}</p>}
        {weather && <WeatherCard cityName={cityName} weather={weather} />}
      </section>
    </main>
  );
}

export default App;
