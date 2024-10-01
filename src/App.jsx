import React, { useEffect, useState } from 'react';
import Slider from './components/Slider';
import logo from './assets/ApnaTV.svg';
import search from './assets/eva_search-fill.svg';
import notion from './assets/Vector.svg';
import btnIcon from './assets/Polygon 1.svg';
import stars from './assets/Group 2.svg';
import rec from './assets/Rectangle 11.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './asyncActions/data';


export default function App() {
  const [value, setValue] = useState('');
  const [isTouch, setIsTouch] = useState(false);

  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const isLoading = useSelector(state => state.custom.isLoading)

  useEffect(() => {
    dispatch(fetchData())
  },[dispatch]);
  
  console.log(data);
  
  

  return (
    <>
      <div className='upper' style={{backgroundImage: `url(${data[0]?.poster?.previewUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className='container'>

          <header className='header'>
            <ul className='header__left'>
              <li>Movies</li>
              <li>Favorites</li>
            </ul>
            <img className='header__center' src={logo} />
            <div className='header__right'>
            {isTouch ? (
              <form id='tr' className="search">
              <svg className='search__icon' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed"><path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"/></svg>
              <input
                value={value}
                placeholder='search...'
                className='search__input'
                type="text"
                onChange={(e) => setValue(e.target.value)} />
              {value && (<svg onClick={() => setValue('')} className='search__close' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>)}
            </form>
              ) : (
              <img onClick={() => setIsTouch(true)} src={search} />)}
              <img src={notion} />
              <p>Sigh Up</p>
            </div>
          </header>

          <main className='main'>
              <div className='main__center'>
                <h1 className="main__center__name">{data[0]?.name}</h1>
                <p className="main__center__p">{data[0]?.description}</p>
                <img className="main__center__stars" src={stars} alt='#'/>
                <div className="main__center__btns">
                  <button className="main__center__btns__btn1">
                    <img src={btnIcon} alt="#" />
                    Watch Now
                  </button>
                  <button className="main__center__btns__btn2">Trailer</button>
                </div>
              </div>

            <Slider>
              {!isLoading ? <div>loading</div> : data.map((item, i) => (
                <div key={i} className='main-block__div'>
                  <img src={item.poster.url} alt="#" />
                </div>)
              )}
            </Slider>
          </main>
        </div>
      </div>
      <div className='under'>
        <div className="container">
          <h1 className='under__h1'>Movies</h1>
          <div className="under__gridblock">
            <div className='under__gridblock__current'>
                <span className='star'>
                  <img src="" alt="" />
                  <p></p>
                </span>
                <img src="" alt="" />
                <h3></h3>
                <span>
                  <img src="" alt="" />
                  <p>Add to my list</p>
                </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
