import { useState } from "react";
import Header from "./Header";
import Main from "./Main";


function Head({data}) {
    const [movie, setMovie] = useState([])

    const lInvisible = () =>{
        let s = document.querySelector('.search-abs');
        let list = document.querySelector('.search');
        list.classList.remove('inv');
        s.classList.add('inv');
    }

    const handler = (e) =>{

        
    }

    return ( 
        <div className="Head">
            <Header lInvisible={lInvisible} handler={handler}/>
            <Main lInvisible={lInvisible} movie={movie}/>
        </div>
     );
}

export default Head;