import Current from "./components/Current";
import Header from "./components/Header";
import {useEffect, useState} from 'react';
import Precipitation from "./components/Precipitation";

function App() {
  const [current, setCurrent] = useState([]);
  const [data, setData] = useState([]);

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


  return (
    <div className="">
      <Header />
      <section className="bg-light p-5">
        <div className="row g-4">
          <Current data={current} />
          <Precipitation data={data} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-dark text-light p-5">
          <div className="container">
              <div className="d-md-flex justify-content-between align-items-center">
                  <h3 className="mb-3 mb-md-0">Sign up for Newsletter</h3>
                  <div className="input-group news-input">
                      <input type="text" className="form-control" placeholder="Enter Email"/>
                      <button className="btn btn-info btn-lg" type="button">Button</button>
                    </div>
              </div>
          </div>
      </section>

    </div>
  );
}

export default App;
