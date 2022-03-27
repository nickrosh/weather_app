import Current from "./components/Current";
import Header from "./components/Header";
import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const currentUrl = 'http://localhost:8000/api/v1/current';

    const fetchCurrent = async () => {
      try {
        const response = await fetch(currentUrl);
        const json = await response.json();
        console.log(json);
        setData({...json})
      } catch(error) {
        console.error(error);
      }
    };
    fetchCurrent()
  }, []);

  return (
    <div className="">
      <Header />
      <div className="container">
        <p>Temperature is {data.temp}</p>
        <p>Humidity is {data.humidity}</p>
        <p>Pressure is {data.pressure}</p>
        <p>Weather is {data.weather[0].main}</p>
        <p>{data.weather[0].description}</p>
      </div>
    </div>
  );
}

export default App;
