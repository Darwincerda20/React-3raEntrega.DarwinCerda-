import "./App.css";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from "./Components/NavBar"; /* TRAIGO EL NAVBAR */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; /* TRAIGO LAS IMAGENES DE FONTAWESOME */
import { faShoppingCart,} from "@fortawesome/free-solid-svg-icons"; /* TRAIGO LA IMAGEN DEL CARRITO */
import { ItemListContainer } from "./Components/ItemListContainer"; /* TRAIGO EL GREETINGS */
import { CartWidget } from "./Components/CartWidget"; /* TRAIGO EL CARRITO */
import  ItemDetailContainer  from "./Components/ItemDetailContainer";
import data from "./Data"
import Item from "./Components/Item";


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CartWidget />
        <FontAwesomeIcon icon={faShoppingCart} />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>{/* home */}
          <Route path="/" element={<Item/>}/>{/* home */}
          <Route path="/category/:categoryId" element={ <ItemListContainer/> }/>
          <Route path="/item/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h3>404 NOT FOUND</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
