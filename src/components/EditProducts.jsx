import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clean_product_id } from '../redux/slice/productId_slice';
import { deleteProduct, putProduct } from '../redux/thunks/producId';
import ExitoAlert from './alerts/ExitoAlert';
import ErrorAlert from './alerts/ErrorAlert';
import RiskAlert from './alerts/RiskAlert';

const EditProducts = () =>
{
  const [exito, setExito] = useState(false);
  const [error, setError] = useState(false);
  const [buttonDeletProduct, setButtonDeletProduct] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //recibe por params el nombre de la colleccion y el id del producto
  const { product, id } = useParams()
  const { data, errors } = useSelector((state) => state.productId);
  const msjEdit = "Producto editado exitosamente";
  const msjDelete = "Producto borrado exitosamente"

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    price2: '',
    description: '',
  });

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitForm = (event) =>
  {
    event.preventDefault();
    dispatch(putProduct({ collection: product, id: id, values: formData }))
    dispatch(clean_product_id())
  }

  useEffect(() =>
  {
    if (data) {
      setFormData({
        name: data.name || '',
        price: data.price || '',
        price2: data.price2 || '',
        description: data.description || '',
      });
    }
  }, [data]);

  useEffect(() =>
  {
    if (errors) {
      setError(true)
      setTimeout(() =>
      {
        navigate('/')
      }, 1000)
    } else {
      setError(false)
    }
    if (data === msjEdit || data === msjDelete) {
      setExito(data)
      setTimeout(() =>
      {
        navigate('/')
      }, 1000)
    }
  }, [data, errors, navigate]);
  const handleDeleteProduct = () =>
  {
    dispatch(deleteProduct({ collection: product, id }))
    setButtonDeletProduct(false)
  }

  return (
    <div className=" mx-auto w-full max-w-sm shadow-2xl p-4 rounded-2xl">
      {/* alertas solo se muestran cuando es necesario */}
      {exito && <ExitoAlert text={exito} />}
      {error && <ErrorAlert text="No se pudo actualizar." />}

      <form onSubmit={submitForm} className="space-y-2">
        {/* el formulario se carga con los datos del producto a editar si no se modifican esos datos guarda los que ya existian */}
        <div >
          <label htmlFor="name" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
            Nombre
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              name='name'
              value={formData.name}
              onChange={handleChange}
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
              name='description'
              value={formData?.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
            Precio
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              name='price'
              value={formData?.price}
              onChange={handleChange}
            />
          </div>
        </div>
        {
          data.price2 &&
          <div>
            <label htmlFor="price2" className="block text-xs md:text-sm/6 font-medium text-[#769164]">
              Precio
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md bg-white px-3 py-1.5 text-xs md:text-base text-[#4b5d3f] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                name='price2'
                value={formData?.price2}
                onChange={() => handleChange()}
                required
              />
            </div>
          </div>
        }
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#769164] px-3 py-1.5 text-sm/6 font-semibold text-[#f9eae6] shadow-xs hover:bg-[#4b5d3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Editar
        </button>
      </form>
      {/* si existen los datos y el id se muestra el boton para borra el producto de la db */}
      {product && id && <button className="flex w-full justify-center rounded-md bg-[#769164] px-3 py-1.5 text-sm/6 font-semibold text-[#f9eae6] shadow-xs hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-2xl" onClick={() => setButtonDeletProduct(true)}>Borrar Producto</button>}
      {/* el boton de borrar solo envia esta alerta para prevenir borrados por accidente handleDeleteProduct es quien realmente borra el podructo */}
      {buttonDeletProduct && <RiskAlert funYes={handleDeleteProduct} funNo={setButtonDeletProduct} />}

    </div>
  );
};


export default EditProducts;