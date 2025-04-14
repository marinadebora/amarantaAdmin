import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config";
import { error_products, get_products } from "../slice/products_slice";

//thunks que sirve para traer las distintas colecciones ya que recibe por payload el nombre de dicha coleccion

export const getProducts = (payload) =>
{
  return async (dispatch) =>
  {
    try {

      const docRef = collection(db, payload)
      let data = await getDocs(docRef)
        .then(res =>
        {
          return res.docs.map(e => ({ ...e.data(), id: e.id }))
        })
      dispatch(get_products({data:data,collection:payload}))
    } catch (error) {
      dispatch(error_products(error))
    }
  }
}
