import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Info from './components/Info/Info';



function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
          <NavBar />
        </header>
        <section className="main">
          <Routes>
            <Route exact path="/" element={<ItemListContainer saludo="Productos" />} />
            <Route exact path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route exact path="/productos/:category" element={<ItemListContainer saludo="Remeras" />} />
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/form" element={<Form/>}/>
            <Route exact path="/contacto" element={<Info/>}/>
          </Routes>
        </section>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )

}

export default App
