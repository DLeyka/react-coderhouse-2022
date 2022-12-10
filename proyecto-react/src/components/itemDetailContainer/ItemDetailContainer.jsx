import "./itemDetailContainer.css"

import { useEffect, useState } from "react"

import { products } from "../../productsMock"

import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [ product, setProduct ] = useState({})

    const { id } = useParams()

    useEffect ( () => {
        const productSelected = products.find( producto => producto.id === +id )
        setProduct(productSelected)
    }, [ id ] )

    return (
        <div className="container-details">
            <img src={product.img} className="perfil" />
            <img src={product.imgItemDetail} className="portada" />
            <h1 className="nameDetail">{product.name}</h1>
            <h2 className="subname" >{product.subname}</h2>
            <p>{product.description}</p>
            <div className="container-price">
                <h2 className="priceDetail">${product.price} MXN</h2>
                <h3 className="stock">Disponibles: {product.stock}</h3>
                <button>Añadir al carrito</button>
            </div>
        </div>
    );
};

export default ItemDetailContainer;