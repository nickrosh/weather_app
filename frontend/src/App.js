import Current from "./components/Current";
import Header from "./components/Header";
import {useEffect, useState} from 'react';
import Precipitation from "./components/Precipitation";
import Daily from "./components/Daily";

function App() {
  const [current, setCurrent] = useState([]);
  const [data, setData] = useState([]);
  const [daily, setDaily] = useState([])

  useEffect(() => {
    const currentUrl = 'http://localhost:8000/api/v1/current';
    const fetchCurrent = async () => {
      try {
        const response = await fetch(currentUrl);
        const json = await response.json();
        console.log(json);
        setCurrent({...json})
      } catch(error) {
        console.error(error);
      }
    };
    fetchCurrent()
  }, []);

  useEffect(() => {
    const minuteUrl = 'http://localhost:8000/api/v1/minutes';
    const fetchData = async () => {
      try {
        const response = await fetch(minuteUrl);
        const json = await response.json();
        console.log(json);
        setData([...json])
      } catch(error) {
        console.error(error);
      }
    };
    fetchData()
  }, []);

  useEffect(() => {
    const dailyUrl = 'http://localhost:8000/api/v1/daily';
    const fetchDaily = async () => {
      try {
        const response = await fetch(dailyUrl);
        const json = await response.json();
        console.log(json);
        setDaily([...json])
      } catch(error) {
        console.error(error);
      }
    };
    fetchDaily()
  }, []);


  return (
    <div className="bg-light">
      <Header />
      <section className="bg-light p-5">
        <div className="row g-4">
          <Current data={current} />
          <Precipitation data={data} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-light text-dark p-5">
          <Daily daily={daily}/>
      </section>

    </div>
  );
}

export default App;
