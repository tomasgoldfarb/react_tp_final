import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Error404 from './components/Error404/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar />
                <Routes>
            <Route exact path='/' element={<ItemListContainer/>}/>
            <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route exact path='item/:id' element={<ItemDetailContainer/>}/>
            <Route exact path={"*"} element={<Error404 />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App