import {Routes, Route} from 'react-router-dom';
import {Favorites} from './components/Favorites';
import { Layout } from './components/Layout';
import { useState } from 'react';



function App() {
  const [wishlist, setWishlist] = useState([]);

  const [isEnter, setIsEnter] = useState(false);

  const addToWishlist = (movie) => {
    if (!wishlist.some((m) => m.id === movie.id)) {
      setWishlist([...wishlist, movie]);
      setIsEnter(true)
    }
    return movie
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout isEnter={isEnter} addToWishlist={addToWishlist}/>}/>
      <Route path="/favorites/*" element={<Favorites wishlist={wishlist}/>}/>
    </Routes>
    </>
  );
}

export default App;
