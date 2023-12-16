import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";


function Head() {
    const [a, setA]=useState();
    const [name, setName]=useState('');
    const [data, setData] = useState([]);
    const [backgroundUrl, setBackgroundUrl] = useState();
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        const url = `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=8&query=${name}`;
        const options = {
            method: 'GET',
            headers: {
                'X-API-KEY': '0VYK7VV-ZHTM3RH-JNX85BN-A5JGDVR'
            }
        };

        fetch(url,options)
        .then(res => res.json())
        .then(res => {
            setData(res)
            setLoading(false)
        })
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
            <Main loading={loading} pagination={pagination} a={a} data={data} changeBackground={changeBackground}/>
        </div>
     );
}

export default Head;