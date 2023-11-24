import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import arrRight from '../assets/arrow-right.svg';
import Content from './Content';

function Favorites({wishlist}) {
    return (
        <div className='fApp'>
            <div className='container'>
                <div className='fHeader'>
                    <img src={icon} alt="#" />
                    <div className='nav-r'>
                        <Link className='links' to='/'>Movies</Link>
                        <Link className='links' to='/'>TV Shows</Link>
                        <Link className='links' to='/'>Suggest me <img src={arrRight} alt="#" /></Link>
                    </div>
                </div>
                <Content wishlist={wishlist}/>
            </div>
        </div>
        
     );
}

export {Favorites};