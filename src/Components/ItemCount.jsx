import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return(
        <div className="Counter">
            <div className="d-flex align-items-center">
                <button className="btn btn-primary" onClick={decrement}>-</button>
                <h2 className="mx-3">{quantity}</h2>
                <button className="btn btn-primary" onClick={increment}>+</button>
            </div>
            <div className="mt-3">
                <button className="btn btn-primary" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}


export default ItemCount;