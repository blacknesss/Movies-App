import React, { useState } from 'react';
import ministar from '../assets/star.svg';
import search from '../assets/eva_search-fill.svg';

function Tvshows({ wishlist}) {
    const [movies, setMovies] = useState(wishlist.map(movie => ({
        ...movie,
        comments: [],
        isExpanded: false // Свойство для управления раскрытием информации о фильме
    })));
    const [comment, setComment] = useState('');

    const handleCommentChange = (e) => {
        setComment(e.currentTarget.value);
    };

    const addComment = (movieId, comment) => {
        setMovies(movies.map(movie => {
            if (movie.id === movieId) {
                return { ...movie, comments: [...movie.comments, comment] };
            }
            return movie;
        }));
    };

    const handleCommentSubmit = (movieId) => {
        addComment(movieId, comment);
        setComment('');
    };

    const toggleMovieVisibility = (movieId) => {
        setMovies(movies.map(movie => {
            if (movie.id === movieId) {
                return { ...movie, isExpanded: !movie.isExpanded };
            }
            return movie;
        }));
    };

    return (
        <>
            {movies.map(movie => (
                <div key={movie.id}>
                    <button className='btn-show' onClick={() => toggleMovieVisibility(movie.id)}>
                        {movie.isExpanded ? 'Hide Details' : 'Show Details'}
                    </button>
                    {movie.isExpanded && (
                        <div className='Content'>
                            <div style={{backgroundImage: `url(${movie.logo.url})`, backgroundColor: '#000', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}} className='poster'>
                                <div className='nameofposter'>
                                    <h1 className='start'>StartBar / Favorites</h1>
                                    <p className='NameF'>{movie.alternativeName}</p>
                                </div>
                            </div>
                            <div className='mainF'>
                                <img className='mini-logo' src={movie.poster.url} alt="#" />
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
                              </div>  
                            ))}</div></div>
                                </div>
                            </div>
                            <div className='comments'>
                                <div className="upper-div">
                                    <div className="left-inp">
                                        <img src={search} alt="#" />
                                        <input
                                            value={comment}
                                            onChange={handleCommentChange}
                                            className='inp-comment'
                                            type="text"
                                            placeholder='Comment...'
                                        />
                                    </div>
                                    <button onClick={() => handleCommentSubmit(movie.id)} className='btn-add'>Add</button>
                                </div>
                                <div className="under-div">
                                    {movie.comments.map((comm, index) => (
                                        <div key={index} className="comm">{comm}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export { Tvshows };
