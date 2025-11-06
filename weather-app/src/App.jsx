import { useEffect, useRef, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
export default function App() {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [weatherDetails, setWeatherDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successful, setSuccessful] = useState(true);
  const [bg, setBg] = useState("");
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  async function loadData() {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          inputValue.trim() === "" ? "Addis Ababa" : inputValue.trim()
        }&appid=${apiKey}&units=metric`
      );
      setWeatherDetails(response.data);
      setSuccessful(true);
      setBackground(response.data.weather[0].main.toLowerCase());
      setInputValue("");
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 100);
      console.log(response.data.weather[0].main.toLowerCase());
    } catch (error) {
      console.error("Error fetching weather:", error);
      setSuccessful(false);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setBackground(weather) {
    switch (weather) {
      case "clear":
        setBg("url('clear.jpg')");
        break;
      case "clouds":
        setBg("url('cloud.jpg')");
        break;
      case "rain":
        setBg("url('rain.jpg')");
        break;
      case "drizzle":
        setBg("url('rain.jpg')");
        break;
      case "thunderstorm":
        setBg("url('thunderstorm.jpg')");
        break;
      case "snow":
        setBg("url('snow.jpg')");
        break;
      case "mist":
        setBg("url(mist.jpg)");
        break;
      case "fog":
        setBg("url(fog.jpg)");
        break;
      case "haze":
        setBg("url(haze.jpg)");
        break;
      case "smoke":
        setBg("url('fog.jpg')");
        break;
      case "dust":
        setBg("url(dust.jpg)");
        break;
      case "sand":
        setBg("url(dust.jpg)");
        break;
      case "ash":
        setBg("url('ash.jpg')");
        break;
      case "tornado":
        setBg("url(tornado.jpg)");
        break;
      case "squall":
        setBg("url('wind.jpg')");
        break;
    }
  }

  return (
    <div className="body" style={{ backgroundImage: bg }}>
      <div className="container">
        {weatherDetails &&
          (isLoading ? (
            <div className="loading">
              <div className="circle"></div>
              <p>Loading</p>
            </div>
          ) : (
            <>
              <form>
                <input
                  type="text"
                  placeholder="Enter City Name"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setSuccessful(true);
                  }}
                  ref={inputRef}
                />
                <button onClick={loadData}>Search</button>
              </form>
              {successful ? (
                <>
                  <h2>
                    {weatherDetails.name}, {weatherDetails.sys.country}
                  </h2>
                  <p className="date">
                    {dayjs().format("dddd, MMMM DD, YYYY ")}
                  </p>
                  <h1>{weatherDetails.main.temp}</h1>
                  <p>{weatherDetails.weather[0].description}</p>
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
              ) : (
                <div className="no-info">
                  <p>No weather info about {inputValue}</p>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
}
