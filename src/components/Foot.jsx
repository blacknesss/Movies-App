import add from '../assets/add.svg';
import ministar from '../assets/star.svg';
import { useEffect, useState } from 'react';
import { fetchWishList } from '../services';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Foot({addToWishlist, addToTvShows}) {
    
    const movies = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchWishList())
    }, []);

    return ( 
        <div className="Foot">
            <div className="Foot__header">
                <h1 className="Foot__movies">Movies</h1>
                <div className="dg">
                {movies.map(movie =>(
                    <div key={movie.id} className="cart">
                        <div className='cart__up'>
                            <img src={ministar} alt="#" />
                            <p className="num">{movie.rating.imdb}</p>
                        </div>
                        <NavLink id='img-c' to='/favorites/'>
                        <img  onClick={() => addToTvShows(movie, movie.id)} className='BW' src={movie.poster.url} alt="#" />
                        </NavLink>
                        <h1 className='cart__h1'>{movie.alternativeName.length <= 0 ? movie.name : movie.alternativeName}</h1>
                        <div className='cart__foot'>
                            <img src={add} alt="#" />
                            <NavLink to='/favorites/tvshows'>
                            <p onClick={()=> addToWishlist(movie, movie.id)} className="add">{ movie.isEnter ? 'Added' : 'Add to my list'}</p>
                            </NavLink>
                        </div>
                    </div>
            ))}    
                </div>
            </div>

        </div>
     );
}

export default Foot;