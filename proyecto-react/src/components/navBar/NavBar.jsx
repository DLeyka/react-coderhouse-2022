
import "./Navbar.css"

import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
    return (
        <div className="navbar-conteiner">
            <div className="conteiner-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/djc19cos6/image/upload/v1669589867/react/logoUbi_rhai3c.png" alt="" />
            </div>
            <ul className="navbar">
                <li className="navbar-item">Todo</li>
                <li className="navbar-item">Ofertas</li>
                <li className="navbar-item">Pre-ventas</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default Navbar;