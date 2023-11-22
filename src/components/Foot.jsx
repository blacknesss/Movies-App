import add from '../assets/add.svg';
import ministar from '../assets/star.svg';
import { useEffect, useState } from 'react';
import { fetchWishList } from '../services';


function Foot({addToWishlist}) {
    const [movies, setMovies] = useState([]);
    
    
 

    useEffect(() => {
        fetchWishList().then((result) => setMovies(result.docs));
    }, []);

    return ( 
        <div className="Foot">
            <div className="Foot__header">
                <h1 className="Foot__movies">Movies</h1>
                <div className="dg">
                {movies.map((movie) =>(
                    <div key={movie.id} className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">{movie.rating.imdb}</p>
                        </div>
                        <img className='BW' src={movie.poster.url} alt="#" />
                        <h1 className='cart__h1'>{movie.alternativeName.length <= 0 ? movie.name : movie.alternativeName}</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <p onClick={() => addToWishlist(movie)} className="add">Add to my list</p>
                        </div>
                    </div>
            ))}    
                </div>
            </div>

        </div>
     );
}

export default Foot;