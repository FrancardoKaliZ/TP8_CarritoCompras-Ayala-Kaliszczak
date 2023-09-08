import './Productos.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardProducto from './CardProducto.js';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownCategorias from './DropdownCategorias';
import SearchBar from './SearchBar';
import LoadingSpinner from './Spinner';

const Productos = () => {
    const [loading, setLoading] = useState(true);
    const [skipMostrados, setSkipMostrados] = useState(0);
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products?limit=10&', {
            params: {
                skip: skipMostrados
            }
        })
            .then(res => {
                setListProducts(res.data.products);
                setLoading(false);
            });
    }, [skipMostrados]);

    const paginationAuto = (n) => {

        if ((skipMostrados + n) >= 0 && (skipMostrados + n) <= 90) {
            setLoading(true);
            setSkipMostrados(skipMostrados + n);
        } else { alert('Error: La pagina no existe o no ha sido encontrada') }
    }

    const paginationManual = (n) => {
        setLoading(true);
        setSkipMostrados(n);
    }

    return loading ? <LoadingSpinner/> : (
        <div className='mainBody'>
            <Row>
                <Col><DropdownCategorias setListProducts={setListProducts}></DropdownCategorias></Col>
                <Col sm={2}><SearchBar></SearchBar></Col>
            </Row>
            <Row >
                {listProducts.map(product => <Col sm={2}><CardProducto product={product}></CardProducto></Col>)}
            </Row>
            <Row className="justify-content-md-center" style={{ marginTop: '1%' }}>
                <Col lg="auto">
                    <div class="pagination">
                        {skipMostrados - 10 >= 0 ? <Button onClick={() => paginationAuto(-10)} >&laquo;</Button> : <Button disabled={true} >&laquo;</Button>}
                        {skipMostrados !== 0 ? <Button href="#" onClick={() => paginationManual(0)}>1</Button> : <Button href="#" disabled={true}>1</Button>}
                        {skipMostrados !== 10 ? <Button href="#" onClick={() => paginationManual(10)}>2</Button> : <Button href="#" disabled={true}>2</Button>}
                        {skipMostrados !== 20 ? <Button href="#" onClick={() => paginationManual(20)}>3</Button> : <Button href="#" disabled={true}>3</Button>}
                        {skipMostrados !== 30 ? <Button href="#" onClick={() => paginationManual(30)}>4</Button> : <Button href="#" disabled={true}>4</Button>}
                        {skipMostrados !== 40 ? <Button href="#" onClick={() => paginationManual(40)}>5</Button> : <Button href="#" disabled={true}>5</Button>}
                        {skipMostrados !== 50 ? <Button href="#" onClick={() => paginationManual(50)}>6</Button> : <Button href="#" disabled={true}>6</Button>}
                        {skipMostrados !== 60 ? <Button href="#" onClick={() => paginationManual(60)}>7</Button> : <Button href="#" disabled={true}>7</Button>}
                        {skipMostrados !== 70 ? <Button href="#" onClick={() => paginationManual(70)}>8</Button> : <Button href="#" disabled={true}>8</Button>}
                        {skipMostrados !== 80 ? <Button href="#" onClick={() => paginationManual(80)}>9</Button> : <Button href="#" disabled={true}>9</Button>}
                        {skipMostrados !== 90 ? <Button href="#" onClick={() => paginationManual(90)}>10</Button> : <Button href="#" disabled={true}>10</Button>}
                        {skipMostrados + 10 < 100 ? <Button onClick={() => paginationAuto(10)} >&raquo;</Button> : <Button disabled={true} >&raquo;</Button>}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Productos;