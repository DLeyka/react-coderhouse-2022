import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import PortadaInicio from "./PortadaInicio"

import { products } from "../../productsMock"

import ItemList from "../itemList/ItemList"

import { useParams } from "react-router-dom"


const ItemListContainer = (  ) => {

    const { categoryName } = useParams()

    // para guardar los items en algun lado
    const [ items, setItems ] = useState([])

    useEffect ( () => {

        const filterProducts = products.filter( productos => productos.category === categoryName )

        const task = new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve (categoryName ? filterProducts : products)
            }, 500);
        })
    
        task
        // setItems va a setear lo que yo tenga en mi respuesta, que es el array con los objetos de products
        .then ( (res) => {setItems( res )} )
        .catch ( (err) => {console.log("Se rechazo")} )
    }, [ categoryName ])


    // console.log(items)


    return (
        <div>
            <PortadaInicio />
            <ItemList items = {items} />
        </div>
    )
}

export default ItemListContainer