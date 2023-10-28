import { useEffect, useState } from "react";

const url = 'https://mdblist.p.rapidapi.com/?s=Avengers';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '723ad6ec05mshfb786ab3d93e6c5p18903djsn77e1fedf719a',
		'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
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
      
    </div>
  );
}

export default App;
