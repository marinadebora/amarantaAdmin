import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import values from '../utils';
import { getProductId } from '../redux/thunks/producId';
import FuncionSeccion from '../utils/funciones/seccion';
import capitalize from '../utils/funciones/capitalizeFirstLatter';
import gif from '../Images/gif.gif';


const PanelEditProduct = () =>
{
  //recibe por params el nombre de la colleccion 
  const { product } = useParams()
  const data = useSelector(state => state.products);
  const [productData, setProductData] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() =>
  {
    //carga productData con el objeto que viene de values 
    setProductData(values[product])
  }, [product]);
  
  const handleClick = (value) =>
  {
    dispatch(getProductId({ colection: product, id: value.id }))
    navigate(`/editProduct/${product}/${value.id}`)

  }

  return (
    <main>
      <div className="overflow-x-auto w-full flex items-center justify-center ">
        {
          data[product] ?
            <table className="min-w-full  bg-[#f9eae6] border border-[#f2d0c7] ">
              <thead className="bg-[#f2d0c7]">
                <tr>
                  {productData?.header.map((column) => (
                    <th
                      key={column.Header}
                      className="py-1 px-2 border-b border-[#f2d0c7] text-left text-[#769164]"
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data[product] && data[product].map((row, rowIndex) => (
                  <tr key={rowIndex} onClick={() => handleClick(row)} className="even:bg-[#f8dfd8] cursor-pointer hover:bg-[#f2d0c7]">
                    {productData?.header.map((column) => (
                      <td
                        key={column.accessor}
                        className="py-1 px-2 text-[#769164] text-sm"
                      >
                        {column.accessor === "name" ? capitalize(row[column.accessor]) : column.accessor === "section" ? FuncionSeccion(row[column.accessor]) : row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            :
            <div className='w-full h-full flex items-center justify-center '>
            <div className='w-[30rem] h-[35rem] shadow-2xl'>
              <div className='h-[50%] flex flex-col items-center justify-center gap-5'>
                <h1 className='text-white text-[2rem]'>AMARANTA</h1>
                <p className='text-white '>café resto</p>
                <img src={gif} alt="gif de espera" />
              </div>
            </div>
          </div>
           /*  <div className="bg-[#f2d0c7] w-[20rem] h-[18rem] rounded-2xl flex items-center justify-center border border-[#f2d0c7] ">
              <div className=' bg-[#f9eae6] rounded-2xl flex items-center justify-center w-[80%] h-[80%] '>
              <img src={gif} alt="" />
            </div>
            </div> */
        }

      </div>
    </main>
  );
};


export default PanelEditProduct;