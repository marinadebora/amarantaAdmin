import React from 'react';
/* import { addDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"; */
import { useForm } from "react-hook-form";

const CreateCoffe = () => {
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
    <main className='w-full h-[80vh] flex flex-col items-center justify-center p-12 max-md:p-2'>
      <section className='h-full w-full text-white flex flex-col items-center justify-center '>
        <div className='bg-[#f9eae6] w-full rounded-3xl '>
          <div className='w-full grid grid-cols-40/60'>
            <div className='flex flex-col gap-8 p-4 max-md:w-full'>
              <div className='text-[#dcb4b4]'>
                <h1 className='font-bold text-3xl max-md:text-2xl'>
                  Panel
                </h1>
              </div>
              <form onSubmit={handleSubmit(submitForm)} className='flex flex-col  gap-4 w-full relative text-[#dcb4b4]'>
                <label
                  htmlFor='name'
                  className='block text-lg font-medium '>
                  Nombre
                </label>
                <input
                  className='bg-transparent border border-[#769164]  text-sm rounded-lg block w-full p-2.5 '
                  {...register("name", { required: true })}
                  required
                />

                <label
                  htmlFor='price'
                  className='block text-lg font-medium '>
                  Precio
                </label>
                <input
                  className='bg-transparent border border-[#769164]  text-sm rounded-lg block w-full p-2.5'
                  {...register("price", { required: true })}
                  required
                />

                <label
                  htmlFor='description'
                  className='block text-lg font-medium'>
                  Descripcion
                </label>
                <input
                  className='bg-transparent border border-[#769164]  text-sm rounded-lg block w-full p-2.5'
                  {...register("description", { required: true })}
                  required
                />

                <label
                  htmlFor='section'
                  className='block text-lg font-medium'>
                  Seccion
                </label>
                <select

                  className='bg-transparent border border-[#769164]  text-sm rounded-lg block w-full p-2.5'
                  {...register("section", { required: true })}
                >
                  <option value=''></option>
                  <option className='text-[#dcb4b4]' value='Inputs'>Entradas</option>
                  <option className='text-[#dcb4b4]' value='Menu'>Menu</option>
                  <option className='text-[#dcb4b4]' value='Desserts'>Postres</option>
                  <option className='text-[#dcb4b4]' value='Drinks'>Bebidas</option>
                  <option className='text-[#dcb4b4]' value='coffee'>Cafeteria</option>
                </select>
                <div className='w-full flex items-center justify-center text-lg font-medium'>
                <input className='border border-[#769164] w-[8rem] p-1.5 rounded-lg cursor-pointer hover:text-[#769164]' type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
};

CreateCoffe.propTypes = {};

export default CreateCoffe;