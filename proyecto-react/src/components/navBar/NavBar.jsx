
import "./Navbar.css"

import CartWidget from "../cartWidget/CartWidget"

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar-conteiner">
            <Link to="/">
                <div className="conteiner-logo">
                    <img className="logo-navbar" src="https://res.cloudinary.com/djc19cos6/image/upload/v1669589867/react/logoUbi_rhai3c.png" alt="" />
                </div>
            </Link>
            <ul className="navbar">
                <Link className="navbar-item" to="/">Todo</Link>
                <Link className="navbar-item" to="/category/ofertas">Ofertas</Link>
                <Link className="navbar-item" to="/category/pre-ventas">Pre-ventas</Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default Navbar;