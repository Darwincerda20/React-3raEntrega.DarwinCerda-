import "../App.css";
import Item from './Item'


const ItemList = ({products}) => {
    return(
        <div className='container d-flex flex-wrap ListGroup'>
            {products.map (prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList