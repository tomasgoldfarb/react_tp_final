import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.imageUrl} alt={item.name} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h1 className="text-white">Modelo {item.name}</h1>
                    <p className="item-price text-white"><b>Precio ${item.price}</b></p>
                    <p className="text-white">{item.description}</p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;