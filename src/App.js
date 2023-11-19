import {Routes, Route, Link} from 'react-router-dom';

import {Favorites} from './components/Favorites';
import { Layout } from './components/Layout';
import { useState } from 'react';



function App() {
  
//   const [movies, setMovies] = useState([
//     {id: 1, title: 'Black Widow', star: 6.8, }
// ]);
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (movie) => {
    if (!wishlist.some((m) => m.id === movie.id)) {
      setWishlist([...wishlist, movie]);
    } else {
      alert('Этот фильм уже в вашем списке желаемых!');
    }
  };

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout addToWishlist={addToWishlist}/>}/>
      <Route path="/favorites" element={<Favorites wishlist={wishlist}/>}/>
    </Routes>
    </>
  );
}

export default App;
