import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar';
//import Contador from './Contador/Contador';
//import Clima from './Clima/Clima';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Nosotros from './Nosotros/Nosotros';

const App = () => {
  return (

    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Nosotros' element={<Nosotros />} />
          <Route path='/category/category' element={ItemListContainer} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

