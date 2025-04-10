import { collection, getDocs,addDoc, setDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config";
import { error_products, get_products, post_products, put_products } from "../slice/products_slice";

//thunks que sirve para traer las distintas colecciones ya que recibe por payload el nombre de dicha coleccion

export const getProducts = (payload)=>{
  return async(dispatch)=>{
    try {
      
       const docRef = collection(db,payload)
           let data = await getDocs(docRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             console.log(data)
             dispatch(get_products(data))
    } catch (error) {
      dispatch(error_products(error))
    }
  }
}

//recibe el nombre de la colleccion payload.collection y la data a enviar
export const postProduct = (payload)=>{
  return async(dispatch)=>{
    try {
      let data = await addDoc(collection(db, payload.collection),payload.values).value;
      dispatch(post_products({data}))
    } catch (error) {
      dispatch(error_products(error))
    }
  }
}

export const putProducts = (payload)=>{
  return async(dispatch)=>{
    try {
      
       const myCollection  = collection(db,payload.collection)
       const myDocRef = doc(myCollection , payload.id);  
       let data = await setDoc(myDocRef, payload.values); 
             dispatch(put_products({data}))
    } catch (error) {
      dispatch(error_products(error))
    }
  }
}