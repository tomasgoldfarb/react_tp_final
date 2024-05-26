import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";

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
      const db = getFirestore();
      const docRef = doc(db, "items", id);
      getDoc(docRef).then(snapShot => {
         if (snapShot.exists()) {
            setItem({ id: snapShot.id, ...snapShot.data() });
            setLoading(false);
         } else {
            console.log("No existe el documento!");
            setItem({});
         }
      });
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