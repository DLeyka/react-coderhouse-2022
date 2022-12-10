import "./item.css"

import { Link } from "react-router-dom"

const Item = ({element}) => {
    return (
        <div className="card">
            <img src={element.img} alt="" />
            <h2>{element.name}</h2>
            <h3>{element.subname}</h3>
            <h1>${element.price} MXN</h1>
            <Link className="link" to={`/itemDetail/${element.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;