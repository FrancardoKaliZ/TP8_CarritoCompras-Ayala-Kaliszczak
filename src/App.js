import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Productos from './Components/Productos';
import DetalleProductos from './Components/DetalleProductos';
import Contacto from './Components/Contacto';
import DetalleCategoria from './Components/detalleCategoria';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/productos' element={<Productos />}></Route>
        <Route path='/detalle-producto/:productoId' element={<DetalleProductos />}></Route>
        <Route path='/quienes-somos' element={<Contacto />}></Route>
        <Route path='/detalle-categoria/:categoria' element={<DetalleCategoria/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
