import './DropdownCategorias.css';
import { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { Link } from 'react-router-dom';

const DropdownCategorias = (props) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products/categories").then((res) => {
      setCategorias(res.data);
    });
  }, []);

  return (
    <Dropdown className="d-inline mx-2">
    <Dropdown.Toggle id="dropdown-autoclose-true" className='toggle'>
      Categorias
    </Dropdown.Toggle>

    <Dropdown.Menu className='menu'>
    {categorias.map(categoria=>
    <Dropdown.Item className='item' key={categoria}>
    <Link to={`/detalle-categoria/${categoria}`} className='item'>{categoria}</Link>
    </Dropdown.Item>
      )}
    </Dropdown.Menu>
  </Dropdown>
  );
};

export default DropdownCategorias;
