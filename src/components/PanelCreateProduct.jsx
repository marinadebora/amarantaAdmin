import React, { useEffect, useState } from 'react';
import CreateProducts from './CreateProducts';
import { useParams } from 'react-router-dom';
import values from '../utils'
import Loading from './Loading';

const PanelCreateProduct = () =>
{
  //recibe por params el nombre de la colleccion 
  const { product } = useParams()
  const [productData, setProductData] = useState(null);

  useEffect(() =>
  {
    //carga productData con el objeto que viene de values 
    setProductData(values[product])
  }, [product]);


  return (
    <>
      {

        productData ?
          <main className='w-full h-full flex items-center justify-center'>
            <div className='w-full h-full' >
              <CreateProducts productData={productData} />
            </div>
          </main>
          : <Loading />
      }
    </>
  );
};


export default PanelCreateProduct;