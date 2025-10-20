import { useState } from "react";
import { fetchWeather } from "../api/weather";

export const useWeather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const result = await fetchWeather(city);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getWeather };
};