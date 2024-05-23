import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import arrayProductos from "../../productos.jsx"
import { useParams } from "react-router-dom";

const fetchItems = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(arrayProductos);
      }, 2000)
   })
};

const Loading = () => {
   return (
      <div className="container my-5">
         <div className="row">
            <div className="col text-center">
               <div className="spinner-grow text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>
         </div>
      </div>
   )

}

const ItemDetailContainer = () => {
   const [item, setItem] = useState({});
   const [loading, setLoading] = useState(true);
   const { id } = useParams();

   useEffect(() => {
      const fetchData = async () => {
         const data = await fetchItems();
         setItem(id ? data.find(item => item.id == id) : {});
         setLoading(false);
      };

      fetchData();
   }, [id]);

   return (
      <>
         {
            loading ? <Loading /> : <ItemDetail item={item} />
         }
      </>
   )
}

export default ItemDetailContainer;