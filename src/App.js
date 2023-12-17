import {Routes, Route} from 'react-router-dom';
import {Favorites} from './components/Favorites';
import { Layout } from './components/Layout';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishList } from './services';



function App() {
  const [wishlist, setWishlist] = useState([]);
  const [tvshows, setTvShows] = useState([]);
  const dispatch = useDispatch();
  const states = useSelector(state => state);

  
  
  const dispatching = (movie ,movieId) =>{
        clearTvShows()

        setTimeout(() => {
            dispatch({
              type: 'entering',
              payload: states.map(item =>{
                if(item.id === movieId){
                  return {...item, isEnter: true}
                }
                return item
              })
            })
          }, 2000);
          
  }   

  

  const addToTvShows = (movie) =>{
      if(!tvshows.some((m) => movie.id === m.id)){
        setTvShows([...tvshows, movie]);
      }
      
  }
  
  const clearTvShows = () => {
    setTvShows([]);
  };
  
  const addToWishlist = (movie) => {
    if (!wishlist.some((m) => m.id === movie.id)) {
      setWishlist([...wishlist, movie]); 
    }
      
    return movie
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout addToWishlist={addToWishlist} addToTvShows={addToTvShows}/>}/>
      <Route path="/favorites/*" element={<Favorites dispatching={dispatching} wishlist={wishlist} tvshows={tvshows}/>}/>
    </Routes>
    </>
  );
}

export default App;
