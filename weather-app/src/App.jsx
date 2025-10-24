export default function App() {
  return (
    <div className="container">
      <form>
        <input type="text" placeholder="Enter City Name" />
        <button>Search</button>
      </form>
      <h3>London, GB</h3>
      <h2>sunday, December 17, 2023</h2>
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
