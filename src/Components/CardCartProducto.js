import './CardCartProducto.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import closeCross from '../close_cross.png';

const CardCartProducto = (props) => {
    console.log("props:", props);
    return (
        <Card className='cardProducto'>
            <Card.Body>
                <Card.Title><Row><Col>{props.product.title}</Col><Col><img src={closeCross}/></Col></Row></Card.Title>
                <Card.Text className='cardDescripcion'>
                    <Row><Col sm='auto'>
                        <Card.Img className='imgCardProductos' src={props.product.thumbnail}></Card.Img></Col>
                        <Col>
                            {props.product.description} <br />
                            Precio: ${props.product.price} <br /> {props.product.discountPercentage}% OFF  <br /> {props.product.rating}⭐
                        </Col></Row>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default CardCartProducto;