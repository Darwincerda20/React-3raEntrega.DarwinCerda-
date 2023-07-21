import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../Data'
import  ItemList  from'./ItemList'

import { useParams } from "react-router-dom";


export const ItemListContainer = ({greeting}) =>{
  const [products, setProducts] = useState([]);

  const {categoryId}= useParams()

  useEffect(() => {
    const asyncFunc= categoryId ? getProductsByCategory: getProducts

    asyncFunc(categoryId) 
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  },[categoryId])
      
  return (
        <div style={{ backgroundColor: 'orange' , padding: '20px' }}>
          <br />
          <br />
          <br />
          <br />
          <h2 style={{position:"relative", left:"250px"}}>Bienvenidos a nuestro servicio de mantenimiento de bicicletas</h2>
          <p style={{position:"relative", left:"250px"}}>Mantén tu bicicleta en excelente estado y disfruta de tus paseos al máximo.</p>
          <ItemList products = {products}/> 
        </div>
      );
}

export default ItemListContainer;
