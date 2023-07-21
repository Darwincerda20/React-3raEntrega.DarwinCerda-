import { useState } from "react";

/*************************************** FUNCION PARA CONTAR *********************************/
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

    /**********************************BOTON PARA SUMAR Y RESTAR HTML **********************/
    return(
        <div className="Counter text-center">
            <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-primary btn-sm" onClick={decrement}>-</button>
                <h2 className="mx-3 small">{quantity}</h2>
                <button className="btn btn-primary btn-sm" onClick={increment}>+</button>
            </div>
            <div className="mt-3">
                <button className="btn btn-primary btn-sm" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )
}


export default ItemCount;