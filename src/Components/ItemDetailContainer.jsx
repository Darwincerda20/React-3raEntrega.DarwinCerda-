import { useState, useEffect } from "react";
import { getProductById } from '../Data'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer= () => {
    const [product, setProducts] = useState(null)

    const {itemId}= useParams()
    
    useEffect(() =>{
        getProductById(itemId)
            .then(response => {
             setProducts(response)
            })
            .catch(error => {
                console.error(error)
           })

    }, [itemId])

    return(
        <div className=" ItemDetailContainer ">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;
