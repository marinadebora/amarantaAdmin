import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config";
import { error_alPlato, get_alPlato } from "../slice/al_plato_slice";



export const getAlPlato = ()=>{
  return async(dispatch)=>{
    try {
      
       const alPlatoRef = collection(db,"alPlato")
           let data = await getDocs(alPlatoRef)
             .then(res=>{
               
              return res.docs.map(e=>({...e.data(),id:e.id}))
             
             })
             dispatch(get_alPlato({data}))
    } catch (error) {
      dispatch(error_alPlato(error))
    }
  }
}