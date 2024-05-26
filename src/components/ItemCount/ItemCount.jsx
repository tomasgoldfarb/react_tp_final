import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true)

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
            console.log("Agregaste " + contador + " productos al Carrito.");
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn bg-light" onClick={decrementar}>-</button>
                        <button type="button" className="btn bg-light">{contador}</button>
                        <button type="button" className="btn bg-light" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    {visible ? <button type="button" className="btn bg-light" onClick={addToCart}> Agregar al carrito</button> : <Link to={"/cart"} className="btn bg-light">Terminar mi compra</Link>}
            </div>
        </div>
        </div>
    )
}

export default ItemCount;