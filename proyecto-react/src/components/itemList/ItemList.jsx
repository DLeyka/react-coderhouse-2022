import Item from "../item/Item"
import "./itemList.css"

const ItemList = ({ items }) => {
    return (
        <div className="countainer-cards">
            {items.map( (element) => {
                return <Item key={element.id} element={element} />
            })};
        </div>
    );
};

export default ItemList;