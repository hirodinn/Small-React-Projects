export default function App() {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Enter City Name" />
        <button>Search</button>
      </form>
      <h2>London, GB</h2>
      <p className="date">sunday, December 17, 2023</p>
      <h1>283.63</h1>
      <p>Overcast clouds</p>
      <div className="weather-info">
        <div className="wind">
          <p>4.63</p>
          <p>Wind Speed</p>
        </div>
        <div className="humidity">
          <p>83%</p>
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
}
