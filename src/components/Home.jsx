import React, { useEffect } from 'react';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { clean_product_id } from '../redux/slice/productId_slice';

const Home = () =>
{
  const dispatch = useDispatch();

  useEffect(() =>
  {
    dispatch(clean_product_id())
  }, [dispatch]);
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='w-[30rem] h-[35rem] shadow-2xl'>
        <div className='h-[50%] flex flex-col items-center justify-center gap-5'>
          <h1 className='text-white text-[2rem]'>AMARANTA</h1>
          <p className='text-white '>café resto</p>
          <p className='text-white '>Panel de Administrador</p>
        </div>
      </div>
    </div>
  );
};


export default Home;