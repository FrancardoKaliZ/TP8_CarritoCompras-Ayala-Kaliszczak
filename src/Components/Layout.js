import './Layout.css';
import { Link , Outlet} from 'react-router-dom';
import cartImg from '../shoppingCart.svg'

const Layout = () =>{
    return (
        <>
        <nav className='mainNavbar'>
            <Link to='/' className='title'>Mercado Mercantil</Link>
            <Link to='/productos' className='anchorLayout'>productos</Link>
            <Link to='/quienes-somos' className='anchorLayout'>Contáctanos</Link>
            <Link to='/carrito' className='carritoLayout'> <img src={cartImg} className='imgCart' alt=''></img></Link>
        </nav>
        <Outlet/>
        </>
        
    )
}
export default Layout;