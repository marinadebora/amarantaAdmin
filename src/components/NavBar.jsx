import { NavLink, useNavigate } from "react-router";
/* import { useAuth } from "../../Store/authStore"; */
import { useState } from "react"
import { BiDrink } from "react-icons/bi";
import { RiDrinks2Fill, RiCake3Line } from "react-icons/ri";
import { LuIceCreamBowl, LuSalad, LuSandwich, LuPizza } from "react-icons/lu";
import { GiMeal } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FiCoffee } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getProducts } from "../redux/thunks/products";

function NavBar() {
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenEdit, setIsOpeEdit] = useState(false);
const dispatch = useDispatch();
const navigate = useNavigate()


const handleEdit = (value)=>{
  dispatch(getProducts(value))
  navigate('/panelEdit')
  setIsOpeEdit(!isOpenEdit)
}
  return (
  
      <nav className='w-full bg-[#f9eae6] flex items-center justify-center'>
        <div className=' w-[95%] h-[4rem] md:h-[5rem] flex items-center justify-between gap-1'>
          <div className=" md:w-[12rem]"><img className='w-[4rem]' src="/amarantaLogo.svg" alt="" /></div>

            <div className="w-[18rem] mt-[3rem] md:w-[12rem] h-full md:mt-[4.5rem]">
            <div className=" ">
              <button onClick={() => setIsOpenCreate(!isOpenCreate)} className="text-[0.7rem] md:text-sm text-[#769164] hover:text-[#4a5b3f] cursor-pointer">Crear Productos</button>
            </div>
  
            <div className={`transition-transform transform z-50  ${isOpenCreate ? 'translate-x-0 translate-y-0' : 'hidden'}`}>{/* -translate-x-full */}
              <ul className="bg-[#f9eae6] inset-y- md:inset-y-10  h-full shadow-xl flex flex-col gap-2 rounded-sm p-2">
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createCafeteria" className="flex items-center gap-2"><FiCoffee/><p className="text-xs md:text-sm">Cafeteria</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createPasteleria" className="flex items-center gap-2"><RiCake3Line/><p className="text-xs md:text-sm">Pastelería</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createTapeo" className="flex items-center gap-2"><MdFoodBank /><p className="text-xs md:text-sm">Tapeo</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createPizzTarEmp" className="flex items-center gap-2"><LuPizza /><p className="text-xs md:text-sm">Pizzas Tartas y Empanadas</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createEntreP" className="flex items-center gap-2"><LuSandwich /><p className="text-xs md:text-sm">Entre Panes</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createEnsGuar" className="flex items-center gap-2 "><LuSalad /><p className="text-xs md:text-sm">Ensaladas y Guarniciones</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createAlPlato" className="flex items-center gap-2"><GiMeal /><p className="text-xs md:text-sm">Al Plato</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createPostres" className="flex items-center gap-2"><LuIceCreamBowl /><p className="text-xs md:text-sm">Postres</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createBebidas" className="flex items-center gap-2"><RiDrinks2Fill /><p className="text-xs md:text-sm">Bebidas</p></a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/createBebidasA" className="flex items-center gap-2"><BiDrink /><p className="text-xs md:text-sm">Con Alcohol</p></a></li>
              </ul>
            </div>
          </div>
  
          <div className="w-[12rem] h-full mt-[4.5rem] ">
  
            <div className=" ">
              <button onClick={() => setIsOpeEdit(!isOpenEdit)} className="text-[#769164] hover:text-[#4a5b3f] cursor-pointer">Editar Productos</button>
            </div>
  
            <div className={`transition-transform transform z-50  ${isOpenEdit ? 'translate-x-0 translate-y-0' : 'hidden'}`}>{/* -translate-x-full */}
              <ul className="bg-[#f9eae6] inset-y-10 -left-0  top-10 h-full shadow-xl flex flex-col gap-2 rounded-sm p-2">
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('cafeteria')} className="flex items-center gap-2"><FiCoffee /> Cafeteria</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('pasteleria')} className="flex items-center gap-2"><RiCake3Line/><p className="text-xs md:text-sm">Pastelería</p></button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('tapeo')} className="flex items-center gap-2"><MdFoodBank /> Tapeo</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('pizzaTartasEmpanadas')} className="flex items-center gap-2"><LuPizza /> Pizzas Tartas y Empanadas</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('entrePanes')} className="flex items-center gap-2"><LuSandwich /> Entre Panes</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('ensaladasGuarniciones')} className="flex items-center gap-2"><LuSalad /> Ensaladas y Guarniciones</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('alPlato')} className="flex items-center gap-2"><GiMeal /> Al Plato</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('postres')} className="flex items-center gap-2"><LuIceCreamBowl /> Postres</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('bebidas')} className="flex items-center gap-2"><RiDrinks2Fill /> Bebidas</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('bebidasAlcohol')} className="flex items-center gap-2"><BiDrink />Con Alcohol</button></li>
              </ul>
            </div>
          </div>
  
          <div className="w-[12rem] flex items-center justify-end "><button className="text-[#769164] hover:text-[#4a5b3f] cursor-pointer">LogOut</button></div>
        </div>
  
      </nav>
  );
}

export default NavBar;