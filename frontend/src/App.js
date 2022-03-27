import Current from "./components/Current";
import Header from "./components/Header";
import {useEffect, useState} from 'react';

function App() {
  const [data, setData] = useState([]);

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
      <Current data={data} />

    </div>
  );
}

export default App;
