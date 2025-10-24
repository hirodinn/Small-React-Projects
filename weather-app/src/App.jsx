import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [weatherDetails, setWeatherDetails] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  async function loadData() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          inputValue.trim() === "" ? "London" : inputValue.trim()
        }&appid=${apiKey}&units=metric`
      );
      setWeatherDetails(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeatherDetails(null);
    }
  }
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      {weatherDetails && (
        <>
          <form>
            <input
              type="text"
              placeholder="Enter City Name"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button>Search</button>
          </form>
          <h2>
            {weatherDetails.name}, {weatherDetails.sys.country}
          </h2>
          <p className="date">{dayjs().format("dddd, MMMM DD, YYYY ")}</p>
          <h1>283.63</h1>
          <p>Overcast {weatherDetails.weather[0].main}</p>
          <div className="weather-info">
            <div className="wind">
              <p>{weatherDetails.wind.speed}</p>
              <p>Wind Speed</p>
            </div>
            <div className="humidity">
              <p>{weatherDetails.main.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
