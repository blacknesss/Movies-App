import React from 'react';
import ministar from '../assets/star.svg';

function Content({wishlist}) {
    
    
    return (
        <>
        {wishlist.map(movie =>(
            <div key={movie ? movie[0].id : ''} className='Content'>
                <div  className='poster'>
                    <img className='logo' src={movie&&movie[0]&&movie[0].logo ? movie[0].logo.url : 'err'} alt="#" />
                    <div className='nameofposter'>
                        <h1 className='start'>StartBar / Favorites</h1>
                        <p className='NameF'>{movie && movie[0] && movie[0].alternativeName ? movie[0].alternativeName : 'loading'}</p>
                    </div>
                </div>
                <div className='mainF'>
                    <img className='mini-logo' src={movie&&movie[0]&&movie[0].poster ? movie[0].poster.url : 'err'} alt="#" />
                    <div className='mini-right-block'>
                        <h1 className="mini-name">{movie && movie[0] && movie[0].alternativeName ? movie[0].alternativeName : 'loading'}</h1>
                        <p className="mini-p">{movie && movie[0] && movie[0].description ? movie[0].description : 'loading'}</p>
                        <div className='mini-cart'>
                            <img src={ministar} alt="#" />
                            <p className="num">{movie && movie[0] && movie[0].rating && movie[0].rating.imdb ? movie[0].rating.imdb : 0}</p>
                        </div>
                        <div className="mini-block">
                            <h1 className='mini-up'>type</h1>
                            <p className='mini-under'>{movie&&movie[0]&&movie[0].type ? movie[0].type : 'loading'}</p>
                        </div>
                        <div className="mini-block">
                            <h1 className='mini-up'>Release Date:</h1>
                            <p className='mini-under'>{movie&&movie[0]&&movie[0].year ? movie[0].year : 'loading'}</p>
                        </div>
                        <div className="mini-block">
                            <h1 className='mini-up'>Run time</h1>
                            <p className='mini-under'>{movie&&movie[0]&&movie[0].movieLength ? movie[0].movieLength + ' min' : 'loading'}</p>
                        </div>
                        <div className="mini-block">
                            <h1 className='mini-up'>Genres</h1>
                            <div className='mini-under'>{movie&&movie[0]&&movie[0].genres ? movie[0].genres.map(item => (<div key={item.name}>
                                <p key={item.name}>{item.name}</p>
                              </div>  
                            )) : 'loading'}</div>
                        </div>
                    </div>
                </div>
                
                <div className='comments'>
                    
                </div>
            </div>
    ))}
            

    </>    
     );
}

export default Content;