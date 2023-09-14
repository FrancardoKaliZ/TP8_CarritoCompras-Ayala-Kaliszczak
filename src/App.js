import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Productos from './Components/Productos';
import DetalleProductos from './Components/DetalleProductos';
import Contacto from './Components/Contacto';
import DetalleCategoria from './Components/detalleCategoria';
import Cart from './Components/Cart';
import carritoContext from './Context/Context.js';
import { useState } from 'react';

const App = () => {
  const [carrito, setCarrito] = useState([]);
  return (
  <carritoContext.Provider value = {{carrito,setCarrito}}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/productos' element={<Productos />}/>
        <Route path='/detalle-producto/:productoId' element={<DetalleProductos />}/>
        <Route path='/quienes-somos' element={<Contacto />}/>
        <Route path='/detalle-categoria/:categoria' element={<DetalleCategoria/>}/>
        <Route path='/carrito' element={<Cart/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </carritoContext.Provider>
  )
}

export default App;
