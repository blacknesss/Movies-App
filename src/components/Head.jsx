import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";


function Head({data, setName}) {
    
    

    const [backgroundUrl, setBackgroundUrl] = useState();

    useEffect(() => {
        if(data && data.docs) {
            setBackgroundUrl(data.docs[4].poster.url);
        }
    }, [data]);

    const changeBackground = (url) => {
        setBackgroundUrl(url);
    };


    
    

    return ( 
        <div className="Head" style={{ backgroundImage: `url(${backgroundUrl})` }}>
            <Header setName={setName}/>
            <Main data={data} changeBackground={changeBackground}/>
        </div>
     );
}

export default Head;