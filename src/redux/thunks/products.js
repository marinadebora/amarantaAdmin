import { collection, getDocs,addDoc } from "firebase/firestore"
import { db } from "../../firebase/config";
import { error_products, get_products, post_products } from "../slice/products_slice";

//thunks que sirve para traer las distintas colecciones ya que recibe por payload el nombre de dicha coleccion

export const getProducts = (payload)=>{
  return async(dispatch)=>{
    try {
      
       const alPlatoRef = collection(db,payload)
           let data = await getDocs(alPlatoRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_products({data}))
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