
import "./CartWidget.css"

import { Link } from "react-router-dom"

import { GiShoppingCart } from "react-icons/gi"

const CartWidget = () => {
    return (
        <Link to="/cart">
            <div className="container-cart">
                <GiShoppingCart className="item-cart" 
                    style={{
                        fontSize: "2rem",
                        color: "white",
                    }}/>
            </div>
        </Link>
    )
}

export default CartWidget;