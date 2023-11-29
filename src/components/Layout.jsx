import { useEffect, useState } from "react";
import Head from "./Head";
import Foot from "./Foot";

function Layout({addToWishlist, isEnter}) {
    const [name, setName]=useState('')


    
    
    const [data, setData] = useState([])

    useEffect(()=>{
        const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=8&query=${name}`;
        const options = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'C2MHFSY-PRCMA67-KE7WXXV-S195PRK'
            }
        };

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
            <Foot isEnter={isEnter} addToWishlist={addToWishlist}/>
        </div>
        </>
     );
}

export {Layout};