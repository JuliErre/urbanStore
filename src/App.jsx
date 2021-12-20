import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <header className="App-header">
        <NavBar />
      </header>
      <section className="main">
      <Routes>
          <Route exact path ="/productos" element = {<ItemListContainer saludo="Productos" />}/>
          <Route exact path ="/detalle/:id" element = {<ItemDetailContainer />}/>
          <Route exact path ="/productos/:category" element = {<ItemListContainer saludo="Productos" />}/>
        </Routes>
      </section>
    </BrowserRouter>
  )

}

export default App
