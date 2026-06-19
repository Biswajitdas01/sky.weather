function WeatherCard({ cityName, weather }) {
  return (
    <article className="weather-card">
      <h2>{cityName}</h2>
      <p className="temp">{weather.temperature}°C</p>
      <p className="condition">{weather.condition}</p>

      <div className="weather-details">
        <p>
          <span>Wind Speed:</span> {weather.windspeed} km/h
        </p>
        <p>
          <span>Weather Code:</span> {weather.weathercode}
        </p>
      </div>
    </article>
  );
}

export default WeatherCard;
