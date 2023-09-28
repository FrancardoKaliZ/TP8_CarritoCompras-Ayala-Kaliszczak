import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";
import CardProducto from "./CardProducto";

const DetalleCategoria = () => {
    const [loading,setLoading] = useState(true);
    const {categoria} = useParams();
    const [productos,setProductos] = useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/products/category/'+categoria)
    .then(res=>{
       setProductos(res.data.products);
       setLoading(false);
    })
    },[])

    return loading ? (
        <h2>loading</h2>
      ) : (
        <>
        <Row ><Col style={{display:'flex',flexWrap:'wrap',justifyContent:'center',fontSize:'xx-large',fontWeight:'bold',padding:'0px'}}>{categoria}</Col></Row>
        <Row>
        {productos.map(product => <Col sm={2} key={product.id}><CardProducto product = {product}></CardProducto></Col>)}
        </Row>
        </>
    )
}

export default DetalleCategoria;