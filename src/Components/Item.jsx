import ItemCount from "./ItemCount";

const Item = ({id, nombre, categoria, ImagenURL, precio, stock, Descripcion}) => {
    
    return (
        <> 
        <div className="CardItem">
            <div className="row">
                <div className="col ">
                    <div className="CardContainer small ">
                        <div className="Card" style={{width: "18rem"}}>
                            <img src={ImagenURL} className="ItemImg card-img-top" alt={nombre}></img>
                            <div className="card-body">
                            <h5 className="ItemHeader card-title">{nombre}</h5>
                            <p className="Info card-text">Detalle: {Descripcion}.</p>
                            <p className="info card-text">Precio: ${precio}.-</p>
                            <p className="info card-text">Stock: {stock} un.-</p>
                            <footer className="ItemFooter">
                                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad Agregada")} />
                            </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Item;