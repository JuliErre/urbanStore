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
        <Routes>
          <Route exact path ="/" element = {<ItemListContainer saludo="Productos" />}/>
          <Route exact path ="/detalle/:id" element = {<ItemDetailContainer />}/>
          <Route exact path ="/jaja" element = {<h1> jajaja </h1>}/>
         

          
          { /* <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
  */}
        </Routes>
      </header>
    </BrowserRouter>
  )

}

export default App
