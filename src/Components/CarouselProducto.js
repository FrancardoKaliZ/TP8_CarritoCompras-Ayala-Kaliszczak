import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from 'react-router-dom'

const CarouselProducto = (props) => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detalle-producto/${props.product.id}`)
  }
    return (
        <Carousel >
          {props.product.images.map((im) => (
            <Carousel.Item className="slide" key={im}>
              <img
                style={{ height: "410px", width: "200px" }}
                className="d-block w-100"
                src={im}
                alt=""
                onClick={() => handleClick()}
              ></img>
              <Carousel.Caption>
                <p>{props.product.title}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
    )
}
export default CarouselProducto;