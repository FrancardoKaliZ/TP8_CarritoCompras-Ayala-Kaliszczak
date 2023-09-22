import "./CardProducto.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import carritoContext from "../context/Context";
import green_check from '../green_check.png';
import { useContext , useEffect , useState } from "react";
const CardProducto = (props) => {
  const context = useContext(carritoContext);
  const [enCarrito,setEnCarrito] = useState();
  useEffect(() => {
    let result = '';
    result = context.carrito.filter(checkCart);
    result.length > 0 ? result[0].cantidad > 0 ? setEnCarrito(true) : setEnCarrito(false) : <></>;
  }, []);
  const checkCart = (producto) => {
    return producto.producto.id === props.product.id;
  };
  

  

  return (
    <Card className="CardProductos">
      <Card.Img
        className="imgCardProductos"
        variant="top"
        src={props.product.thumbnail}
      />
      <Card.Body>
        <Card.Title>{props.product.name}</Card.Title>
        <Card.Text className="cardDescripcion">
          {props.product.description} <br />
          Precio: ${props.product.price} <br />{" "}
          {props.product.discountPercentage}% OFF <br /> {props.product.rating}
          ⭐
        </Card.Text>
        <Card.Footer className="footer">
          {enCarrito ? <img className="imgCheck" src={green_check}/> : <></>}
          <Link
            className="detalle"
            to={`/detalle-producto/${props.product.id}`}
            state={enCarrito}
          >
            Detalle
          </Link>
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};
export default CardProducto;
