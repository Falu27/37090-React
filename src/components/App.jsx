import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartContextProvider } from '../context/CartContext';

import Navbar from './navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout'
import Nosotros from './Nosotros/Nosotros';
import Servis from './Servis/Servis';

const App = () => {
  return (

    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/product/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/Servis' element={<Servis />} />
            <Route path='/checkout' element={<Checkout/>}> </Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App