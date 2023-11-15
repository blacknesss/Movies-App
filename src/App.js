import {Routes, Route, Link} from 'react-router-dom';

import {Favorites} from './components/Favorites';
import { Layout } from './components/Layout';



function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}/>
      <Route path="/favorites" element={<Favorites/>}/>
    </Routes>
    </>
  );
}

export default App;
