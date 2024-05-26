import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

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

   useEffect(() => {
      const db = getFirestore();
      const itemsCollection = collection(db, "items");
      const resultQuery = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;
      getDocs(resultQuery).then(snapShot => {
         if (snapShot.size > 0) {
            setItems(snapShot.docs.map(item => ({ id: item.id, ...item.data() })));
            setLoading(false);
         } else {
            console.log("No existen documentos!");
            setItems([]);
         }
      });
   }, [categoryId]);

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