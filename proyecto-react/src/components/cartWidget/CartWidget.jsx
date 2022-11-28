
import "./CartWidget.css"

import { GiShoppingCart } from "react-icons/gi"

const CartWidget = () => {
    return (
        <div className="container-cart">
            <GiShoppingCart className="item-cart" 
                style={{
                    fontSize: "2rem",
                    color: "white",
                }}/>
        </div>
    )
}

export default CartWidget;