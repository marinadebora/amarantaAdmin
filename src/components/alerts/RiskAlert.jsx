import React from 'react';
import PropTypes from 'prop-types';

const RiskAlert = ({funYes,funNo}) => {
  return (
    <div role="alert">
    <div className="bg-red-700 text-white font-semibold rounded-t-xl px-4 py-1 mt-1">
     <p className='text-sm'>CUIDADO!!!</p> 
    </div>
    <div className="border border-t-0 border-red-700 rounded-b-xl bg-red-100 flex flex-col gap-2 py-1 text-red-700">
      <p className='w-full text-center text-xs'>Seguro quieres borrar este producto?</p>
      <div className='w-full flex items-center justify-center gap-5'>
      <button className='bg-red-700 text-white w-[5rem] rounded-lg text-xs cursor-pointer hover:bg-red-800' onClick={() => funYes()}>Si</button>
      <button className='bg-red-700 text-white w-[5rem] rounded-lg text-xs cursor-pointer hover:bg-red-800' onClick={() => funNo(false)}>No</button>
      </div>
    </div>
  </div>
  );
};

RiskAlert.propTypes = {
  funYes:PropTypes.func,
  funNo:PropTypes.func,
};

export default RiskAlert;