//import "./navbar.css";
import logo from '../../assets/images/logo_navbar.png'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="container">
            {/*  <div className="row my-3">
                <div className="col">
                    <Link to={"/"}>
                        <img src={logo} alt="logo de Syncro" width="70" height="30" />
                    </Link>
                </div>
            </div> */}
            <div className="row">
                <div className="col"><Link to={"/"}>
                    <img src={logo} alt="logo de Syncro" width="70" height="30" />
                </Link></div>
                <div className="col">

                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/category/ainner"}>Paletas Ainner</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to={"/category/snauwaert"}>Paletas Snauwaert</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    );
}

export default NavBar;