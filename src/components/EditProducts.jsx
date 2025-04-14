import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { clean_product_id } from '../redux/slice/productId_slice';
import { putProduct } from '../redux/thunks/producId';

const EditProducts = () =>
{
  const { data } = useSelector(state => state.productId);
 const [exito, setExito] = useState(false);
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const { product,id } = useParams()
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      ...data
    }
  })
 

  const submitForm = (values) =>
  {
    let dataValue = {}
    if (data.price2) {
      dataValue = {
        name: values.name ? values.name : data.name,
        description: values.description ? values.description : data.description,
        price: values.price ? values.price : data.price,
        price2: values.price2 ? values.price2 : data.price2
      }
    } else {
      dataValue = {
        name: values.name ? values.name : data.name,
        description: values.description ? values.description : data.description,
        price: values.price ? values.price : data.price,
      }
    }
    dispatch(putProduct({collection:product,id:id,values:dataValue}))
    dispatch(clean_product_id())
    reset()
    console.log(dataValue)
  }
  useEffect(() => {
   if(data === "cargado con exito"){
     setExito(true)
     setTimeout(()=>{
      navigate('/')
     },1000)
   }
  }, [data, navigate]);
  return (
    <div className=" mx-auto w-full max-w-sm shadow-2xl p-4 rounded-2xl">
      {
exito&&
<div class="flex items-center bg-blue-400 text-white text-sm font-bold px-4 py-3" role="alert">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p>Editado correctamente</p>
</div>
      }
      <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
        <div >
          <label htmlFor="name" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
            Nombre
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              {...register("name")}
              placeholder={data.name}
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
            Descripcion
          </label>
          <div className="mt-2">
            <input
              placeholder={data.description}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              {...register("description")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
            Precio
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              {...register("price")}
              placeholder={data.price}
            />
          </div>
        </div>
        {
          data.price2 &&
          <div>
            <label htmlFor="price2" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
              Precio
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                {...register("price2")}
                placeholder={data.price2}
                required
              />
            </div>
          </div>
        }
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#769164] px-3 py-1.5 text-sm/6 font-semibold text-[#f9eae6] shadow-xs hover:bg-[#4b5d3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Editar
        </button>
      </form>
    </div>
  );
};


export default EditProducts;