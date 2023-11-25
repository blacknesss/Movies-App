import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import arrRight from '../assets/arrow-right.svg';
import { Flist } from './Flist';
import { Tvshows } from './Tvshows';

function Favorites({wishlist}) {
    return (
        <div className='fApp'>
            <div className='container'>
                <div className='fHeader'>
                    <img src={icon} alt="#" />
                    <div className='nav-r'>
                        <Link className='links' to='/favorites'>Favorites</Link>
                        <Link className='links' to='/favorites/tvshows'>TV Shows</Link>
                        <Link className='links' to='/'>Suggest me <img src={arrRight} alt="#" /></Link>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Flist />}/>
                    <Route path='/tvshows' element={<Tvshows wishlist={wishlist}/>}/>
                </Routes>
                
            </div>
        </div>
        
     );
}

export {Favorites};