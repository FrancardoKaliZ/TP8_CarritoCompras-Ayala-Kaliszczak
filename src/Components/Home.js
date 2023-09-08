import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import CardProducto from "./CardProducto.js";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import CarouselProducto from "./CarouselProducto";
import LoadingSpinner from "./Spinner";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100&").then((res) => {
      setProductos(res.data.products);
      setLoading(false);
    });
  }, []);

  const randomNumber = () => {
    let min = 1;
    let max = 100;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  };

  return loading ? (
    <LoadingSpinner/>
  ) : (
    <Row>
      <Row><Col style={{display:'flex',flexWrap:'wrap',justifyContent:'center',fontSize:'xx-large',fontWeight:'bold',padding:'0px',alignItems:'center'}}><p>Bienvenido al </p><p className="rainbow-text">¡Mercado Mercantil!</p><p style={{fontSize:'10px'}}>(hover me)</p></Col></Row>
      <Row
        style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
      >
        <CarouselProducto
          product={productos[randomNumber()]}
        ></CarouselProducto>
      </Row>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
      <Col sm={2}>
        <CardProducto product={productos[randomNumber()]}></CardProducto>
      </Col>
    </Row>
  );
};
export default Home;
