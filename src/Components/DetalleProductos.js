import axios from "axios";
import "./DetalleProductos.css";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/esm/Button";
import LoadingSpinner from './Spinner';
import { Rating } from 'primereact/rating';
import { Link } from "react-router-dom";
import carritoContext from '../context/Context'; 

const DetalleProductos = () => {
  const [loading, setLoading] = useState(true);
  const { productoId } = useParams();
  const [producto, setProducto] = useState([]);
  const context = useContext(carritoContext);
  const {state} = useLocation();
  const enCarrito = state;

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + productoId)
      .then((res) => {
        setProducto(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    context.setCarritoContext([...context.carrito,{producto: producto , cantidad: 1}]);

  }

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="info-producto">
      <Row style={{ display: 'flex', justifyContent: 'left', }}>
        <Col sm='auto'>
          <Carousel pauseOnHover={true}>  
            {producto.images.map(im =>
              <Carousel.Item className="slide">
                <img className='img-responsive center-block'  src={im} alt="" id="imgProducto"></img>
              </Carousel.Item>
            )}
          </Carousel></Col>
        <Col sm={'4'}>
          <Row> <Col style={{ fontWeight: 'bold', fontSize: 'xx-large' }}>{producto.title}</Col><Col>de<b> {producto.brand}</b></Col></Row>
          <Rating style={{ display: 'flex' }} cancel={false} value={producto.rating} stars={5} />
          <Row style={{ fontSize: 'x-large', fontWeight: 'bolder', marginTop: '5%' }}>{producto.price}$ {producto.discountPercentage}% OFF  <p style={{ fontSize: 'medium', fontWeight: 'bold' }}>(solo en nuestra tienda)</p></Row>
          <Row>{producto.description}</Row>
        </Col>
      </Row>
      <div>
        <Row style={{marginTop:'5px'}}><p>categoria del producto: <Link to={`/detalle-categoria/${producto.category}`} className='item'><b>{producto.category}</b></Link></p></Row>
        <Row><Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: '20%' }} sm={8}><Button variant="primary" disabled={enCarrito} onClick={()=> handleClick()}>Agregar al Carrito</Button></Col></Row>
        <Row><Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', bottom: '18%' }} sm={8}>{enCarrito ? <>Ya se encuentra en el carrito</>:<>Quedan <b> {producto.stock}</b></>} </Col></Row>
      </div>
    </div>
  );
};
export default DetalleProductos;
