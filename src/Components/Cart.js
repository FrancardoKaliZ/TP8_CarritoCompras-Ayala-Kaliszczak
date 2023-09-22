import './Cart.css';
import { useContext, useEffect, useState } from 'react';
import CardCartProducto from './CardCartProducto';
import carritoContext from '../context/Context';
import { Button, Col, Row } from 'react-bootstrap';

const Carrito = () => {
    const initialState = [];
    const [carrito, setCarrito] = useState(initialState);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [vacio, setVacio] = useState(true);
    const context = useContext(carritoContext);
    useEffect(() => {
        setVacio(true);
        setCarrito(context.carrito);
        console.log("carrito: ",context.carrito);
    }, [])

    useEffect(() => {
        let total = 0;
        if (carrito.length === 0) {
            setVacio(true)
        }
        else {
            setVacio(false)
            carrito.forEach(element => {
                total = total + element.producto.price*element.cantidad;
            });
            setPrecioTotal(total);
        }
        context.setCarritoContext(carrito);
    }, [carrito])

    const eliminarProducto = (id) => {
        console.log("eliminar producto id",id);
        setCarrito((current) =>
            current.filter((producto) => producto.producto.id !== id));
        context.setCarritoContext(carrito);
    }

    const sumarValor = (value,id) => {
        
        const nuevoCarrito = context.carrito.map(e => {
            if (e.producto.id === id) {
                if (e.cantidad === 0) {
                    eliminarProducto(e.producto.id)
                }
                else{
                    e.cantidad += value;    
                }
            }

            return e;
        });

        setCarrito([...nuevoCarrito.filter((element) => element.cantidad !== 0)])
        context.setCarritoContext(carrito);
    }


    return vacio ? (
        <div className='pVacio'>
            <h3><b>El carrito está vacio</b></h3></div>
    ) : (
        <Col className='body'>
            <Row><Col><Button variant='secondary' className='buttonLimpiar' onClick={() => setCarrito(initialState)}>Limpiar</Button></Col></Row>
            <Row>{ carrito.map(element => <CardCartProducto element={element} eliminarProducto={eliminarProducto} sumarValor={sumarValor}></CardCartProducto>)}</Row>
            <Row>
                <Col><p className='pTotal'>Monto Total: $ {precioTotal} </p></Col> <Col><Button className='buttonLimpiar' onClick={()=> alert("Compra finalizada, gracias por contar con nosotros!")}>Finalizar Compra</Button></Col>
            </Row>
        </Col>
    )

}
export default Carrito;