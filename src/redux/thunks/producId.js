import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config";
import { error_product_id, get_product_Id, post_product, put_product_id } from "../slice/productId_slice";


export const getProductId = (payload) =>
{
  return async (dispatch) =>
  {
    try {

      const docRef = doc(db, payload.colection, payload.id)
      let data = (await getDoc(docRef)).data()
     
      dispatch(get_product_Id (data))
    } catch (error) {
      dispatch(error_product_id(error))
    }
  }
}

//recibe el nombre de la colleccion payload.collection y la data a enviar
export const postProduct = (payload) =>
{
  return async (dispatch) =>
  {
    try {
      await addDoc(collection(db, payload.collection), payload.values);
      dispatch(post_product({ data:"cargado con exito" }))
    } catch (error) {
      dispatch(error_product_id(error))
    }
  }
}

export const putProduct = (payload) =>
{
  return async (dispatch) =>
  {
    try {

      const myCollection = collection(db, payload.collection)
      const myDocRef = doc(myCollection, payload.id);
      await setDoc(myDocRef, payload.values);
      dispatch(put_product_id({ data:"cargado con exito" }))
    } catch (error) {
      dispatch(error_product_id(error))
    }
  }
}