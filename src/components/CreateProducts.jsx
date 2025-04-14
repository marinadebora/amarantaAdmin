import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { postProduct } from '../redux/thunks/producId';
import { GiMeal } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { BiDrink } from "react-icons/bi";
import { FiCoffee } from "react-icons/fi";
import { LuSalad } from "react-icons/lu";
import { LuSandwich } from "react-icons/lu";
import { RiCake3Line } from "react-icons/ri";
import { LuPizza } from "react-icons/lu";
import { LuIceCreamBowl } from "react-icons/lu";
import { MdFoodBank } from "react-icons/md";

const CreateProducts = ({ productData }) =>
{
  console.log(productData)
  const [selectPastas, setSelectPastas] = useState(false);
  const [selecJuugos, setSelectJugos] = useState(null);
  const [selectRefrescos, setSelectRefrescos] = useState(null);
  const [selectBodega, setSelectBodega] = useState(null);
  const [selectCervezas, setSelectCervezas] = useState(null);
  const [selectHamburguesas, setSelectHamburguesas] = useState(null);
  const [selectPicadas, setSelectPicadas] = useState(null);
  const [subSelect, setSubSelect] = useState(null);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: productData?.defaultValues
  });
  //objeto que contiene todos los iconos
  let icon = {
    alPlato: <GiMeal />,
    bebidas: <RiDrinks2Fill />,
    bebidasAlcohol: <BiDrink />,
    cafeteria: <FiCoffee />,
    ensaladasGuarniciones: <LuSalad />,
    entrePanes: <LuSandwich />,
    pasteleria: <RiCake3Line />,
    pizzaTartasEmpanadas: <LuPizza />,
    postres: <LuIceCreamBowl />,
    tapeo: <MdFoodBank />
  }
  const seccion = watch("section");
  const price = watch("price");
  const price2 = watch("price2");
//el useEffect consulta si debe o no abrir subSelect o price2 segun correspoda para cada coleccion
  useEffect(() =>
  {

    if (seccion === "pastas") {
      setSelectPastas(true)
    } else {
      setSelectPastas(false)
    }

    if (seccion === "jugos") {
      setSelectJugos(true)
    } else {
      setSelectJugos(null)
    }
    if (seccion === "refrescos") {
      setSelectRefrescos(true)
    } else {
      setSelectRefrescos(null)
    }
    if (seccion === "cervezas") {
      setSelectCervezas(true)
    } else {
      setSelectCervezas(null)
    }
    if (seccion === "vinos") {
      setSelectBodega(true)
    } else {
      setSelectBodega(null)
    }
    if (seccion === "hamburguesas") {
      setSelectHamburguesas(true)

    } else {
      setSelectHamburguesas(null)
    }
    if (seccion === "picadas") {
      setSelectPicadas(true)
    } else {
      setSelectPicadas(null)
    }
   //se asignan a una sola variable sera true en cualquiera de estos tres caso
    if (selectPastas || selectHamburguesas || selectPicadas) {
      setSubSelect(true)
    } else {
      setSubSelect(null)
    }
  }, [selectPastas, price, price2, seccion, selectHamburguesas, selectPicadas]);
 
  const submitForm = (values) =>
  {
    //despacha la accion postProduct que carga la db envia el nombre de la coleccion y sus datos
     dispatch(postProduct({ collection:productData.collection, values }))
    reset()
  };


  return (
    <main className=' w-full h-full flex flex-col items-start justify-center md:p-0 '>
      <div className=' w-full h-full py-2 flex items-center justify-center'>
        <div className="bg-[#f9eae6] w-[80%]  md:w-[20rem] flex flex-col items-center gap-4 rounded-2xl py-4 px-6 lg:px-8">
          <div className="rounded-2xl h-[4rem] w-[15rem] flex items-center justify-center gap-4 text-[#769164] md:text-xl">
           {/* asigna el titulo segun el objeto que trae desde productData y luego agrega el icono segun corresponda */}
           <p className='text-lg font-bold'>{productData?.title}</p>{icon[productData?.collection]}
          </div>
          <div className=" mx-auto w-full max-w-sm ">

            <form onSubmit={handleSubmit(submitForm)} className="space-y-2">
              {
                productData?.section &&

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="section" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
                      Sección
                    </label>
                  </div>
                  <select
                    className="block w-full rounded-md  px-3 py-2.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-xs"
                    {...register("section", { required: true })}
                  >
                    <option value=''></option>
                    {
                      productData.section.map(e => (
                        <option key={e.name} className='text-[#4b5d3f]' value={e.value}>{e.name}</option>
                      ))
                    }
                  </select>
                </div>

              }
              {
                subSelect &&
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="subSection" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
                      {selectPastas && "Sub Seccion"} {selectHamburguesas && "Tipo de Hamburguesa"} {selectPicadas && "Tipo de Picada"}
                    </label>
                  </div>
                  <select
                    className="block w-full rounded-md  px-3 py-2.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-xs"
                    {...register("subSection", { required: true })}
                  >
                    <option value=''></option>
                    {
                      productData.subSection.map(e => (
                        <option key={e.name} className='text-[#4b5d3f]' value={e.value}>{e.name}</option>
                      ))
                    }
                  </select>
                </div>

              }
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("name", { required: true })}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
                  Descripcion
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    {...register("description")}
                  />
                </div>
              </div>
              {
                selectBodega &&
                <>
                  <div className="flex items-center justify-between">
                    <label htmlFor="bodega" className="block text-sm/6 font-medium text-[#769164]">
                      Bodega
                    </label>
                  </div>

                  <select
                    className="block w-full rounded-md  px-3 py-2.5 text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-xs"
                    {...register("bodega", { required: true })}
                    required
                  >
                    <option value=''></option>
                    <option className='text-[#4b5d3f]' value='vinos de potrero'>Vinos de Potrero</option>
                    <option className='text-[#4b5d3f]' value=' '>Otra</option>
                  </select>
                </>
              }
              {
                productData?.defaultValues?.price2 && selecJuugos || selectRefrescos || selectCervezas || selectPicadas ?
                  <div className='flex items-center justify-around gap-1'>
                    <div className='w-[40%]'>
                      <div className="flex items-center justify-between">
                        <label htmlFor="price" className="block text-sm/6 font-medium text-[#769164]">
                          {selecJuugos && "Precio Jarra"}{selectRefrescos && "Precio 500 cc"}{selectCervezas && "Precio Botella"}{selectPicadas && "Precio Para 2"}
                        </label>
                      </div>
                      <div className="">
                        <input
                          className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          {...register("price", { required: true })}
                          required
                        />
                      </div>
                    </div>

                    <div className='w-[40%]'>
                      <div className="flex items-center justify-between">
                        <label htmlFor="price2" className="block text-sm/6 font-medium text-[#769164]">
                          {selecJuugos && "Precio Vaso"} {selectRefrescos && "Precio 1.5 L"}{selectCervezas && "Precio Lata"}{selectPicadas && "Precio Para 4"}
                        </label>
                      </div>

                      <div className="">
                        <input
                          className="block w-full rounded-md bg-white px-3 py-1 text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          {...register("price2", { required: true })}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  :
                  <div>
                    <label htmlFor="price" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
                      Precio
                    </label>
                    <div className="mt-2">
                      <input
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        {...register("price", { required: true })}
                        required
                      />
                    </div>
                  </div>
              }

              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#769164] px-3 py-1.5 text-sm/6 font-semibold text-[#f9eae6] shadow-xs hover:bg-[#4b5d3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Crear
              </button>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
};

CreateProducts.propTypes = {
  productData: PropTypes.object,

};

export default CreateProducts;