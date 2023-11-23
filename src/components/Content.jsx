import React, { useState } from 'react';
import ministar from '../assets/star.svg';
import search from '../assets/eva_search-fill.svg';

function Content({wishlist}) {
    const [comments, setCommnents] = useState('')
    const [myCom, setMyCom] = useState([])
    
    const handlerChange = (e) =>{
        setCommnents(e.currentTarget.value)

    }
    const addTask = (comments) =>{
        if(comments){
            const newItem = {
              id: Math.random().toString(36).substring(2, 9),
              comm: comments
            }
            setMyCom([...myCom, newItem])
          }
    }
    const handlerSubmit = (e) =>{
        e.preventDefault()
        addTask(comments)
        setCommnents('')
    }

    return (
        <>
        {wishlist.map(movie =>(
            <div key={movie.id} className='Content'>
                <div style={{backgroundImage: `url(${movie.logo.url})`, backgroundColor: '#000', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain'}} className='poster'>
                    {/* <img className='logo' src={movie.logo.url} alt="#" /> */}
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
                            ))}</div>
                        </div>
                    </div>
                </div>
                <div className='space'></div>
                
            </div>
    ))}
            <div className='comments'>
                <div className="upper-div">
                    <div className="left-inp">
                        <img src={search} alt="#" />
                        <input value={comments} onChange={e => handlerChange(e)} className='inp-comment' type="text" placeholder='Comment...'/>
                    </div>
                        <button onClick={handlerSubmit} className='btn-add'>Add</button>
                </div>
                <div className="under-div">
                    {myCom.map((item, index) => (
                        <div key={index} className="comm">{item.comm}</div>
                    ))}
                </div>
            </div>

    </>    
     );
}

export default Content;