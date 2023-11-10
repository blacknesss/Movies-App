import { useEffect, useState } from "react";
import Head from "./components/Head";
import Foot from "./components/Foot";

const url = 'https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=Avengers';
    const options = {
        method: 'GET',
        headers: {
            'X-API-KEY': 'RV930XR-C9NMA9B-HH3QNEC-DM43ZJT'
        }
    };


function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(url,options)
      .then(res => res.json())
      .then(res => setData(res))
  }, [])











  return (
    <div className="App">
        <Head data={data}/>
        <Foot/>
    </div>
  );
}

export default App;
