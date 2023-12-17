import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import icon from '../assets/icon.svg';
import arrRight from '../assets/arrow-right.svg';
import { Flist } from './Flist';
import { Tvshows } from './Tvshows';

function Favorites({wishlist, dispatching, tvshows}) {
    // const delLocalStore = () =>{
    //     setTimeout(() => {
    //         localStorage.clear();
    //       }, 3000);
    // }

    return (
        <div className='fApp'>
            <div className='container'>
                <div className='fHeader'>
                    <img src={icon} alt="#" />
                    <div className='nav-r'>
                        <NavLink className='links' to='/favorites'>TV Shows</NavLink>
                        <NavLink className='links' to='/favorites/tvshows'>Favorites</NavLink>
                        <NavLink onClick={dispatching} className='links' to='/'>Suggest me <img src={arrRight} alt="#" /></NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<Flist tvshows={tvshows}/>}/>
                    <Route path='/tvshows' element={<Tvshows wishlist={wishlist}/>}/>
                </Routes>
                
            </div>
        </div>
        
     );
}

export {Favorites};