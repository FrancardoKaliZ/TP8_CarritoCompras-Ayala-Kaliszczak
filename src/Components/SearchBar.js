import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== "") {
      axios
        .get("https://dummyjson.com/products/search", {
          params: {
            q: searchInput,
          },
        })
        .then(function (response) {
          if (response.data.products.length>0)
            navigate(`/detalle-producto/${response.data.products[0].id}`);
          else alert("No se han encontrado productos.")
        });
    } else {
      alert("Escriba algo primero");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row style={{ alignItems: 'center' }}>
        <Col>
          <input
            type="search"
            placeholder="Ej: Iphone..."
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Button type="submit">Buscar</Button>
        </Col>
      </Row>
    </form>
  );
};

export default SearchBar;
