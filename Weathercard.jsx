export default function WeatherCard({ weather }) {
  return (
    <div className="max-w-sm mx-auto mt-5 p-5 border rounded shadow-lg bg-gray-100 text-center">
      <h2 className="text-2xl font-bold">{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p className="text-xl">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
}