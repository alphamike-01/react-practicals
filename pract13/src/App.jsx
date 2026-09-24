import { useState } from "react";

export default function App() {
  const [city, setCity] = useState("Kolkata");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(e) {
    e?.preventDefault();
    const q = city.trim();
    if (!q) return;
    setLoading(true); setError(""); setWeather(null);
    try {
      const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=en&format=json`);
      if (!geo.ok) throw new Error("Could not reach the geocoding service.");
      const geoData = await geo.json();
      const place = geoData.results?.[0];
      if (!place) throw new Error("City not found.");
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Could not fetch weather data.");
      const data = await res.json();
      setWeather({ place, current: data.current });
    } catch (err) {
      setError(err.message);
    } finally { setLoading(false); }
  }

  return <main className="app">
    <section className="weather">
      <h1>Weather Information App</h1>
      <p>Fetch current weather for a city using a public API.</p>
      <form className="search" onSubmit={fetchWeather}>
        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Enter city name" />
        <button>{loading ? "Loading..." : "Search"}</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && <div className="result">
        <h2>{weather.place.name}, {weather.place.country}</h2>
        <div className="temp">{weather.current.temperature_2m}°C</div>
        <p>Humidity: {weather.current.relative_humidity_2m}%</p>
        <p>Wind: {weather.current.wind_speed_10m} km/h</p>
        <p>Weather code: {weather.current.weather_code}</p>
      </div>}
    </section>
  </main>;
}
