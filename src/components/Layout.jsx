import { useEffect, useState } from "react";
import Head from "./Head";
import Foot from "./Foot";

function Layout({addToWishlist}) {
    const [name, setName]=useState('')


    const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=8&query=${name}`;
    const options = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'NN3P3ZY-CG8MQ0V-MT1ZE3X-DKX4WSN'
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
            <Foot addToWishlist={addToWishlist}/>
        </div>
        </>
     );
}

export {Layout};