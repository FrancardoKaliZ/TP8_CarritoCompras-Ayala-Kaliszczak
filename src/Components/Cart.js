import './Cart.css';
import carritoContext from '../Context/Context.js';
import { useContext, useEffect, useState } from 'react';
import CardCartProducto from './CardCartProducto';

const Carrito = () => {
    const [carrito, setCarrito] = useState([]);
    const context = useContext(carritoContext);
    useEffect(() => {
        console.log(context.carrito);
        setCarrito(context.carrito);
    }, [])

    return (
        <div className='body'>
            {carrito.map(producto => <CardCartProducto product={producto}></CardCartProducto>)}
        </div>
    )

}
export default Carrito;