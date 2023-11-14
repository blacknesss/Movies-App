import { useEffect, useState } from "react";
import Head from "./components/Head";
import Foot from "./components/Foot";


    


function App() {
  const [name, setName]=useState('')


const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${name}`;
  const options = {
          method: 'GET',
          headers: {
              'X-API-KEY': 'RV930XR-C9NMA9B-HH3QNEC-DM43ZJT'
          }
      };
  
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(url,options)
      .then(res => res.json())
      .then(res => setData(res))
  }, [name])









  return (
    <div className="App">
        <Head data={data} setName={setName}/>
        <Foot/>
    </div>
  );
}

export default App;
