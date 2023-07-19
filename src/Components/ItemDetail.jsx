import ItemCount from "./ItemCount";

const ItemDetail = ({id,nombre,ImagenURL,categoria,Descripcion,precio,stock,}) => {
  return (
    <article className="CardItem">
            <div className="CardContainer">
                <div className="Card" style={{width: "18rem"}}>
                    <img src={ImagenURL} className="ItemImg card-img-top" alt={nombre}></img>
                    <div className="card-body">
                    <h5 className="ItemHeader card-title">{nombre}</h5>
                    <p className="Info card-text">Detalle: {Descripcion}.</p>
                    <p className="info card-text">Precio: ${precio}.-</p>
                    <p className="info card-text">Disponible: {stock} un.-</p>
                    <button href="#" className="Option btn btn-primary">Ver Más</button>
                    </div>
                    <footer className="ItemFooter">
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad Agregada")}/>
                    </footer>
                </div>
            </div>
     </article>
  );
};

export default ItemDetail;
