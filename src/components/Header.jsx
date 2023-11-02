import apna from '../assets/ApnaTV.svg';
import notification from '../assets/Vector.svg';
import search from '../assets/eva_search-fill.svg';


function Header() {
    return ( 
        <div className="header">
            <div className='header__text'>
                <a href='#'><h4 className="header__text__movies">Movies</h4></a>
                <a href=""><h4 className="header__text__movies">Favorites</h4></a>
            </div>
            <img src={apna} alt="error" />
            <div className='header__text'>
                <img src={search} alt="err" />
                <img src={notification} alt="err" />
                <a href=""><h4 className="header__text__movies fw600">Sign Up</h4></a>
            </div>
        </div>
     );
}

export default Header;