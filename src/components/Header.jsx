import apna from '../assets/ApnaTV.svg';
import notification from '../assets/Vector.svg';
import search from '../assets/eva_search-fill.svg';

function Header({lInvisible, handler}) {
    


    const sInvisible = () =>{
        let list = document.querySelector('.search');
        let s = document.querySelector('.search-abs');
        list.classList.add('inv');
        s.classList.remove('inv');
    }

    

    return ( 
        <div className="header">
            <div className='header__text'>
                <a href='#'><h4 className="header__text__movies" id='mov'>Movies</h4></a>
                <a href="#"><h4 className="header__text__movies">Favorites</h4></a>
            </div>
            <a href='/'><img src={apna} alt="error" /></a>
            <div className='header__text'>
                <div onClick={lInvisible} className='search-abs inv'>
                    <h1 onClick={(e) => handler(e)} className='search-h1'>Captain America</h1>
                    <h1 onClick={(e) => handler(e)} className='search-h1'>Star Wars</h1>
                    <h1 onClick={(e) => handler(e)} className='search-h1'>Star Wars</h1>
                    <h1 onClick={(e) => handler(e)} className='search-h1'>Uncharted</h1>
                    <h1 onClick={(e) => handler(e)} className='search-h1'>Spider-man</h1>
                    <h1 onClick={(e) => handler(e)} className='search-h1'>Avengers</h1>
                </div>
                <img onClick={sInvisible} className='search' src={search} alt="err" />
                <img className='notif' src={notification} alt="err" />
                <a href="#"><h4 className="header__text__movies fw600">Sign Up</h4></a>
            </div>
        </div>
     );
}

export default Header;