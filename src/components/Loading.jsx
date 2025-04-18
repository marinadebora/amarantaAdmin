import React from 'react';
import gif from '../Images/gif.gif';

const Loading = () =>
{
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='w-[30rem] h-[35rem] shadow-2xl'>
        <div className='h-[50%] flex flex-col items-center justify-center gap-5'>
          <h1 className='text-white text-[2rem]'>AMARANTA</h1>
          <p className='text-white '>café resto</p>
          <img src={gif} alt="gif de espera" />
        </div>
      </div>
    </div>
  );
};

export default Loading;