import {Routes, Route} from 'react-router-dom';
import {Favorites} from './components/Favorites';
import { Layout } from './components/Layout';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const [wishlist, setWishlist] = useState([]);
  const [tvshows, setTvShows] = useState([]);
  const dispatch = useDispatch();
  const states = useSelector(state => state);
  
  
  const dispatching = (movieId) =>{
    setTimeout(() => {
      dispatch({
            type: 'entering',
            payload: states.map(item =>{
                if(item.id === movieId){
                    return {...item, isEnter: true}
                }
                  return item
                })
            });
    }, 3000);
        
        clearTvShows();
    }  

  

  const addToTvShows = (movie, movieId) =>{
      if(!tvshows.some((m) => movie.id === m.id)){
        setTvShows([...tvshows, movie]);
      }
      return movie
  }
  
  const clearTvShows = () => {
    setTvShows([]);
  };
  
  const addToWishlist = (movie, movieId) => {
    if (!wishlist.some((m) => m.id === movie.id)) {
      setWishlist([...wishlist, movie]); 
    }
    dispatching(movieId)
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
