import React, { useEffect, useState } from 'react';
import CreateProducts from './CreateProducts';
import { useParams } from 'react-router-dom';
import values from '../utils'

const PanelCreateProduct = () =>
{
  //recibe por params el nombre de la colleccion 
  const {product} = useParams()
  const [productData, setProductData] = useState({});

  useEffect(() => {
    //carga productData con el objeto que viene de values 
    setProductData(values[product])
  }, [product]);
 
  
  return (
    <main className='w-full h-full flex items-center justify-center'>
      <div className='w-full h-full' >
        <CreateProducts productData={productData} />
      </div>
    </main>
  );
};


export default PanelCreateProduct;