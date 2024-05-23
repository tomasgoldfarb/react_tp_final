import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import arrayProductos from "../../productos.jsx"
import { useParams } from "react-router-dom";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";

/* const fetchItems = () => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve(arrayProductos)
      }, 2000)
   })
}; */

const ItemListContainer = () => {
   const [items, setItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const { categoryId } = useParams();

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

   /*  useEffect(() => {
       const fetchData = async () => {
          const data = await fetchItems();
          setItems(categoryId ? data.filter(item => item.category == categoryId) : data);
          setLoading(false);
       };
 
       fetchData();
    }, [categoryId]); */

   useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      getDocs(itemsCollection).then(snapShot => {
         console.log(snapShot);
         if (snapShot.size > 0) {
            console.log("Existe el documento");
            setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
            setLoading(false);

         } else {
            console.log("No existe el documento")
         }

      })
   },[]);

   return (
      <div className="container my-5">
         <div className="row">
            {
               loading ? <Loading /> : <ItemList items={items} />
            }
         </div>
      </div>
   )
};

export default ItemListContainer;