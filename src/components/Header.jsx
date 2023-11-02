import apna from '../assets/ApnaTV.svg';
import notification from '../assets/Vector.svg';
import search from '../assets/eva_search-fill.svg';


function Header() {
    return ( 
        <div className="header">
            <div className='header__text'>
                <h4 className="movies__text">Movies</h4>
                <h4 className="movies__text">Favorites</h4>
            </div>
            <img src={apna} alt="error" />
            <div>
                <img src={search} alt="err" />
                <img src={notification} alt="err" />
            </div>
        </div>
     );
}

export default Header;