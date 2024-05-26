import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/Error404/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './components/Context/CartContext';
import Cart from './components/Cart/Cart';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <div>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
            <Route exact path={"/"} element={<ItemListContainer />} />
              <Route exact path={"/category/:categoryId"} element={<ItemListContainer />} />
              <Route exact path={"/item/:id"} element={<ItemDetailContainer />} />
              <Route exact path={"/cart"} element={<Cart />} />
              <Route exact path={"/checkout"} element={<Checkout />} />
              <Route exact path={"*"} element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </div>
    </>
  )
}

export default App