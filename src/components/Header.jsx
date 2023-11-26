import { useState } from 'react';
import apna from '../assets/ApnaTV.svg';
import notification from '../assets/Vector.svg';
import search from '../assets/eva_search-fill.svg';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import arrRight from '../assets/arrow_forward_FILL0_wght400_GRAD0_opsz24.svg';

function Header({setName}) {
    const [movie, setMovie]=useState('');
    const [notActive, setNotActive]=useState(false)
    const [modalActive, setModalActive]=useState(false)
    const [user, setUser]=useState(false)

    
    

    const handlerChange = (e)=>{
            setMovie(e.currentTarget.value)
        }
        
    const handlerSubmit = (e) =>{
        e.preventDefault()
        if (movie.length > 0){
            let name = movie
            setName(name)}
        setMovie('')

        let inp = document.querySelector('.inp');
        inp.classList.toggle('inp-v')
    }
    const handlerPress = (e) =>{
        if(e.key === 'Enter'){
            handlerSubmit(e)
        }
    }

    const handleScroll = () => {
        window.scrollTo({ top: 1000, behavior: 'smooth' });
      };

    return (
        <div className="header">
            <div className='header__text'>
                <h4 onClick={handleScroll} className="header__text__movies mov" style={{cursor: 'pointer'}}>Movies</h4>
                <Link to="/favorites"><h4 className="header__text__movies">Favorites</h4></Link>
            </div>
            <a id='apna' href='/'><img src={apna} alt="error" /></a>
            <div className='header__text'>
                <div className='search-abs '>
                    <input onChange={handlerChange} onKeyDown={handlerPress} className='inp' value={movie} placeholder='searching...' type="text" />
                    <img onClick={handlerSubmit} className='search' src={search} alt="err" />
                </div>
                
                <img onClick={()=> setNotActive(true)} className='notif' src={notification} alt="err" />
                <button id='btn-sign' onClick={() => setModalActive(true)} disabled={user}><h4 className="header__text__movies fw600">{user ? 'User1' : 'Sign up'}</h4></button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className='create__acc'>
                    <h1>Create account</h1>
                    <p>Already have an account? <a href="#">Sign in</a></p>
                    <input placeholder='firstname...' type="text" className="username nameee" />
                    <input placeholder='lastname...' type="text" className="username nameee" />
                    <input placeholder='example@mail.ru' type="email" className='username nameee' />
                    <button onClick={()=>{setModalActive (false); setUser(true)}} className='nameee username sign-up'>Sign up<img src={arrRight} alt="#" /></button>
                </div>
            </Modal>
            <Modal active={notActive} setActive={setNotActive}>
                <div className="create__acc">
                    <h1>Входящее уведомление!</h1>
                </div>
            </Modal>
        </div>
     );
}

export default Header;