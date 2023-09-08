import Card from 'react-bootstrap/Card';
import './CardProducto.css';
import { Link } from 'react-router-dom';
const CardProducto = (props) => {

  return (
    <Card className='CardProductos'>
      <Card.Img className='imgCardProductos' variant="top" src={props.product.thumbnail} />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text className='cardDescripcion'>
          {props.product.description} <br/>
          Precio: ${props.product.price} <br/> {props.product.discountPercentage}% OFF  <br/> {props.product.rating}⭐
        </Card.Text>
        <Link className='detalle' to={`/detalle-producto/${props.product.id}`}>Detalle</Link>
      </Card.Body>
    </Card>
    );
}
export default CardProducto;