import React, { useState } from 'react';
import ministar from '../assets/star.svg';

// доделать
function Flist({wishlist}) {
    const [movies, setMovies] = useState(wishlist.map(movie => ({
        ...movie,
        comments: [],
        isExpanded: false
    })));

    const toggleMovieVisibility = (movieId) => {
        setMovies(movies.map(movie => {
            if (movie.id === movieId) {
                return { ...movie, isExpanded: !movie.isExpanded };
            }
            return movie;
        }));
    };

    return ( 
        <div>
            {wishlist.map(movie => (
                <div key={movie.id}>
                    <button
                        className='btn-show'
                        onClick={() => toggleMovieVisibility(movie.id)}>
                        {movie.isExpanded ? 'Hide Details' : 'Show Details'}
                    </button>
                    {movie.isExpanded && (
                        <div className='Content'>
                            <div
                                style={{backgroundImage: `url(${movie.logo.url})`, backgroundColor: '#000',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain'}}
                                className='poster'>
                                <div className='nameofposter'>
                                    <h1 className='start'>StartBar / Favorites</h1>
                                    <p className='NameF'>{movie.alternativeName}</p>
                                </div>
                            </div>
                            <div className='mainF'>
                                <img
                                className='mini-logo'
                                src={movie.poster.url}
                                alt="#" />
                                <div className='mini-right-block'>
                                <h1 className="mini-name">{movie.alternativeName}</h1>
                                <p className="mini-p">{movie.description}</p>
                                <div className='mini-cart'>
                                    <img src={ministar} alt="#" />
                                    <p className="num">{movie.rating.imdb}</p>
                                </div>
                                <div className="mini-block">
                                    <h1 className='mini-up'>type</h1>
                                    <p className='mini-under'>{movie.type}</p>
                                </div>
                                <div className="mini-block">
                                    <h1 className='mini-up'>Release Date:</h1>
                                    <p className='mini-under'>{movie.year}</p>
                                </div>
                                <div className="mini-block">
                                    <h1 className='mini-up'>Run time</h1>
                                    <p className='mini-under'>{movie.movieLength + ' min'}</p>
                                </div>
                                <div className="mini-block">
                                    <h1 className='mini-up'>Genres</h1>
                                    <div className='mini-under'>{movie.genres.map(item => (<div key={item.name}>
                                        <p key={item.name}>{item.name}</p>
                                    </div>))}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
            ))}
        </div>
     );
}

export {Flist};