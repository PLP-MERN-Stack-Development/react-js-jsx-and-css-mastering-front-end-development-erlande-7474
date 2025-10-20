import { useWeather } from "../hooks/useWeather";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const { data, loading, error, getWeather } = useWeather();

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center font-bold">Weather App</h1>
      <SearchBar onSearch={getWeather} />
      {loading && <p className="text-center mt-5">Loading...</p>}
      {error && <p className="text-center mt-5 text-red-500">{error}</p>}
      {data && <WeatherCard weather={data} />}
    </div>
  );
}