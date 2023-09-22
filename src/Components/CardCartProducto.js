import './CardCartProducto.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import closeCross from '../close_cross.png';
import {object , func} from 'prop-types';

const CardCartProducto = (props) => {
    return (
        <Card className='cardProducto'>
            <Card.Body>
                <Card.Title><Row><Col>{props.element.producto.title}</Col><Col><img src={closeCross} className="imgCross" onClick={() => props.eliminarProducto(props.element.producto.id) }/></Col></Row></Card.Title>
                <Card.Text className='cardDescripcion'>
                    <Row><Col sm='auto'>
                        <Card.Img className='imgCardProductos' src={props.element.producto.thumbnail}></Card.Img></Col>
                        <Col>
                            {props.element.producto.description} <br />
                            Precio: ${props.element.producto.price} <br /> {props.element.producto.discountPercentage}% OFF  <br /> {props.element.producto.rating}⭐
                        </Col></Row>
                </Card.Text>
                <Card.Footer><Col>Cantidad: {props.element.cantidad}</Col><Col><Button onClick={() => props.sumarValor(-1,props.element.producto.id)}>-</Button><Button onClick={()=> props.sumarValor(1,props.element.producto.id)}>+</Button></Col></Card.Footer>
            </Card.Body>
        </Card>
    )
}
CardCartProducto.propTypes = {
    product: object,
    eliminarProducto: func,
    sumarValor: func
}
export default CardCartProducto;