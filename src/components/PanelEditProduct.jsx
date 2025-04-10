import React  from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PanelEditProduct = () => {
  const {data} = useSelector(state => state.products);
  const navigate =useNavigate()
const handleClick=(value)=>{
  navigate(`/editProduct/${value.id}`)
 console.log(value)
}
  const columns = [
    { Header: 'Nombre', accessor: 'name' },
    { Header: 'Descripcion', accessor: 'description' },
    { Header: 'Precio', accessor: 'price' },
    { Header: 'Precio 1', accessor: 'price1' },
    { Header: 'Precio 2', accessor: 'price2' },
    { Header: 'Seccion', accessor: 'section' },
    { Header: 'Sub Seccion', accessor: 'subsection' },
  ];

  return (
    <main>
         <div className="overflow-x-auto w-full flex items-center justify-center ">
      <table className="min-w-full  bg-[#f9eae6] border border-[#f2d0c7] ">
        <thead className="bg-[#f2d0c7]">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-1 px-2 border-b border-[#f2d0c7] text-left text-[#769164]"
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data&&data.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={()=>handleClick(row)} className="even:bg-[#f8dfd8] cursor-pointer hover:bg-[#f2d0c7]">
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-1 px-2 text-[#769164] text-sm"
                >
                  {row[column.accessor]?row[column.accessor]:"--"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </main>
  );
};


export default PanelEditProduct;