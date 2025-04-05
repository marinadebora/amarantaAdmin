import React from 'react';
import { useForm } from "react-hook-form";
import { GiMeal } from "react-icons/gi";

const CreateAlPlato = () => {
   const { register, handleSubmit } = useForm({
  
      defaultValues: {
        name: '',
        price: '',
        description: '',
        section: "",
      }
    });
  
    const submitForm = () => { }
  return (
    <main className='w-full h-[80vh] flex flex-col items-center justify-center p-12 max-md:p-2 overflow-y-scroll'>
    <div className='w-full h-full md:h-dvh md:py-2 flex items-center justify-center'>
      <div className="bg-[#f9eae6] w-[20rem] rounded-2xl h-full md:py-2  flex flex-col justify-around px-6 lg:px-8">
      <div className="rounded-2xl h-[6rem]  flex items-center justify-around gap-1 text-[#769164]">
      <img className='w-[6rem]' src="/amarantaLogo.svg" alt="" />
          <p>AL PLATO</p><GiMeal />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <form onSubmit={handleSubmit(submitForm)} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-[#769164]">
                Nombre
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register("name", { required: true })}
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="description" className="block text-sm/6 font-medium text-[#769164]">
                  Descripcion
                </label>
              </div>

              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register("description")}
                />
                
              </div>
            </div>
            
             <div className="flex items-center justify-between">
                <label htmlFor="section" className="block text-sm/6 font-medium text-[#769164]">
                  Sección
                </label>
              </div>
            <select
              className="block w-full rounded-md  px-3 py-2.5 text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 text-xs"
              {...register("section", { required: true })}
            >
              <option value=''></option>
              <option className='text-[#4b5d3f]' value='pastas'>Pastas</option>
              <option className='text-[#4b5d3f]' value='carnes y pollos'>Carnes y Pollos</option>
            </select>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="price" className="block text-sm/6 font-medium text-[#769164]">
                  Precio
                </label>

              </div>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  autoComplete="current-password"
                  {...register("price", { required: true })}
                  required

                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#769164] px-3 py-1.5 text-sm/6 font-semibold text-[#f9eae6] shadow-xs hover:bg-[#4b5d3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Crear
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </main>
  );
};


export default CreateAlPlato;