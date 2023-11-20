import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Head from "./Head";
import Foot from "./Foot";

function Layout({addToWishlist}) {
    const [name, setName]=useState('')


    const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=8&query=${name}`;
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

 const docs = data.docs


    return ( 
        <>
        <div className="App">
            <Head data={data} setName={setName}/>
            <Foot docs={docs} addToWishlist={addToWishlist}/>
        </div>
        </>
     );
}

export {Layout};