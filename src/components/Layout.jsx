import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Head from "./Head";
import Foot from "./Foot";

function Layout({movies, addToWishlist}) {
    const [name, setName]=useState('')


    const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=1&query=${name}`;
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
        .catch(error => {
            console.error('Ошибка при получении данных', error);
        });
    }, [name])




    return ( 
        <>
        <div className="App">
            <Head data={data} setName={setName}/>
            <Foot movies={movies} addToWishlist={addToWishlist}/>
        </div>
        </>
     );
}

export {Layout};