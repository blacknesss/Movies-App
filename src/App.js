import {Routes, Route} from 'react-router-dom';
import {Favorites} from './components/Favorites';
import { Layout } from './components/Layout';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishList } from './services';



function App() {
  const [wishlist, setWishlist] = useState([]);
  
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
            })
          }, 3000);
      }   
  
  
  const addToWishlist = (movie, movieId) => {
    if (!wishlist.some((m) => m.id === movie.id)) {
      setWishlist([...wishlist, movie]); 
    }
      dispatching(movieId)
      // localStorage.setItem(`isEnter_${movieId}`, true);
    return movie
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout addToWishlist={addToWishlist}/>}/>
      <Route path="/favorites/*" element={<Favorites dispatching={dispatching} wishlist={wishlist}/>}/>
    </Routes>
    </>
  );
}

export default App;
