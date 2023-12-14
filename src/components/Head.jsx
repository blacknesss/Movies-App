import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";


function Head() {
    const [a, setA]=useState();
    const [name, setName]=useState('');
    const [data, setData] = useState([]);
    const [backgroundUrl, setBackgroundUrl] = useState();
    useEffect(()=>{
        const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=8&query=${name}`;
        const options = {
            method: 'GET',
            headers: {
                'X-API-KEY': 'K0SQHHX-CND4NBG-JNZ25MN-G7E3MDX'
            }
        };

        fetch(url,options)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(error => {
            console.error('Ошибка при получении данных', error);
        });
    }, [name])

    useEffect(() => {
        if(data && data.docs) {
            setBackgroundUrl(data.docs[0].backdrop.url);
        }
        
    }, [data]);

    const changeBackground = (url, key) => {
        setName('')
        setA (key);
        setBackgroundUrl(url);
    };

    const pagination = () =>{}
    
    

    return ( 
        <div className="Head" style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <Header pagination={pagination} setName={setName}/>
            <Main pagination={pagination} a={a} data={data} changeBackground={changeBackground}/>
        </div>
     );
}

export default Head;