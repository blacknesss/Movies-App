import { useState } from 'react';
import apna from '../assets/ApnaTV.svg';
import notification from '../assets/Vector.svg';
import search from '../assets/eva_search-fill.svg';
import { Link } from 'react-router-dom';



function Header({setName}) {
    const [movie, setMovie]=useState('');

    const handlerChange = (e)=>{
            setMovie(e.currentTarget.value)
        }
        
    const handlerSubmit = (e) =>{
        e.preventDefault()
        if (movie.length > 0){
            let name = movie
            setName(name)}
        setMovie('')

        let inp = document.querySelector('.inp');
        inp.classList.toggle('inp-v')
    }
    const handlerPress = (e) =>{
        if(e.key === 'Enter'){
            handlerSubmit(e)
        }
    }

    const handleScroll = () => {
        window.scrollTo({ top: 1000, behavior: 'smooth' });
      };

    return (
        <div className="header">
            <div className='header__text'>
                <h4 onClick={handleScroll} className="header__text__movies mov" style={{cursor: 'pointer'}}>Movies</h4>
                <Link to="/favorites"><h4 className="header__text__movies">Favorites</h4></Link>
            </div>
            <a id='apna' href='/'><img src={apna} alt="error" /></a>
            <div className='header__text'>
                <div className='search-abs '>
                    <input onChange={handlerChange} onKeyDown={handlerPress} className='inp' value={movie} placeholder='searching...' type="text" />
                    <img onClick={handlerSubmit} className='search' src={search} alt="err" />
                </div>
                
                <img className='notif' src={notification} alt="err" />
                <a href="#"><h4 className="header__text__movies fw600">Sign Up</h4></a>
            </div>   
        </div>
     );
}

export default Header;