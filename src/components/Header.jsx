import apna from '../assets/ApnaTV.svg';
import notification from '../assets/Vector.svg';
import search from '../assets/eva_search-fill.svg';

function Header() {
    return ( 
        <div className="header">
            <div className='header__text'>
                <a href='#'><h4 className="header__text__movies" id='mov'>Movies</h4></a>
                <a href="#"><h4 className="header__text__movies">Favorites</h4></a>
            </div>
            <a href='/'><img src={apna} alt="error" /></a>
            <div className='header__text'>
                <img className='search' src={search} alt="err" />
                <img className='notif' src={notification} alt="err" />
                <a href="#"><h4 className="header__text__movies fw600">Sign Up</h4></a>
            </div>
        </div>
     );
}

export default Header;