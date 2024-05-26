import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, getTotalProducts, getSumProducts } = useContext(CartContext);

    if (getTotalProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-light" role="alert"><h4>No hay productos en el carrito</h4></div>
                        <Link to={"/"} className="btn bg-light my-5">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="align-middle text-end"><button className="btn bg-light" onClick={clear}>Vaciar carrito</button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imageUrl} alt={item.name} width={64} /></td>
                                    <td className="align-middle text-start text-white">{item.name}</td>
                                    <td className="align-middle text-center text-white">${item.price}</td>
                                    <td className="align-middle text-center text-white">x{item.quantity}</td>
                                    <td className="align-middle text-center text-white">${item.quantity * item.price}</td>
                                    <td className="align-middle text-end text-white"><i className="bi bi-trash3" onClick={() => { removeItem(item.id) }} title="Eliminar producto"></i></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="align-middle text-center text-white"><b>Total</b></td>
                                <td className="align-middle text-center text-white"><b>${getSumProducts()}</b></td>
                                <td className="align-middle text-end "><Link to={"/checkout"} className="btn bg-light">Continuar</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;