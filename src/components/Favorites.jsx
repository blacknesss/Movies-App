import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import arrRight from '../assets/arrow-right.svg';

function Favorites({wishlist}) {
    return (
        <div className='fApp'>
            <div className='container'>
                <div className='fHeader'>
                    <img src={icon} alt="#" />
                    <div className='nav-r'>
                        <Link className='links' to='/'>Movies</Link>
                        <Link className='links' to='/'>TV Shows</Link>
                        <Link className='links' to=''>Suggest me <img src={arrRight} alt="#" /></Link>
                    </div>
                </div>
                <div>
                <h2>Список желаемых</h2>
                        <div>
                        {wishlist ?.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                        </div>
                </div>

            </div>
        </div>
        
     );
}

export {Favorites};