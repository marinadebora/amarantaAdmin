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
        <div className=' w-full h-[4rem] md:h-[5rem] flex items-center justify-between gap-2'>
          <div className=" md:w-[12rem]"><img className='w-[4rem] ml-2' src="/amarantaLogo.svg" alt="" /></div>

            <div className="w-[12rem] h-[2rem] flex flex-col pt-2 ">
          
              <button onClick={() => setIsOpenCreate(!isOpenCreate)} className="text-[0.7rem] md:text-sm text-[#769164] hover:text-[#4a5b3f] cursor-pointer">Crear Productos</button>
            
  
            <div className={`z-50  ${isOpenCreate ? 'visible' : 'hidden'}`}>{/* -translate-x-full */}
              <ul className="bg-[#f9eae6] mt-6 md:mt-8 w-full h-full shadow-xl flex flex-col gap-2 rounded-sm p-2">
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/cafeteria" className="flex items-center text-[0.6rem] md:text-sm gap-2"><FiCoffee/>Cafeteria</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/pasteleria" className="flex items-center text-[0.6rem] md:text-sm gap-2"><RiCake3Line/>Pastelería</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/tapeo" className="flex items-center text-[0.6rem] md:text-sm gap-2"><MdFoodBank />Tapeo</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/pizzaTartasEmpanadas" className="flex items-center text-[0.6rem] md:text-[0.8rem] gap-2"><LuPizza />Pizzas Tartas y Empanadas</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/entrePanes" className="flex items-center text-[0.6rem] md:text-sm gap-2"><LuSandwich />Entre Panes</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/ensaladasGuarniciones" className="flex items-center text-[0.6rem] md:text-[0.8rem] gap-2"><LuSalad />Ensaladas y Guarniciones</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/alPlato" className="flex items-center text-[0.6rem] md:text-sm gap-2"><GiMeal />Al Plato</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/postres" className="flex items-center text-[0.6rem] md:text-sm gap-2"><LuIceCreamBowl />Postres</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/bebidas" className="flex items-center text-[0.6rem] md:text-sm gap-2"><RiDrinks2Fill />Bebidas</a></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><a href="/panelCreate/bebidasAlcohol" className="flex items-center text-[0.6rem] md:text-sm gap-2"><BiDrink />Con Alcohol</a></li>
              </ul>
            </div>
          </div>
  
          <div className="w-[12rem] h-[2rem] flex flex-col pt-2 ">
  
         
              <button onClick={() => setIsOpeEdit(!isOpenEdit)} className="text-[0.7rem] md:text-sm text-[#769164] hover:text-[#4a5b3f] cursor-pointer">Editar Productos</button>
         
  
            <div className={` z-50   ${isOpenEdit ? 'visible' : 'hidden'}`}>{/* -translate-x-full */}
              <ul className="bg-[#f9eae6] mt-6 md:mt-8 h-full shadow-xl flex flex-col gap-2 rounded-sm p-2">
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('cafeteria')} className="flex items-center text-[0.6rem] md:text-sm gap-2"><FiCoffee /> Cafeteria</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('pasteleria')} className="flex items-center text-[0.6rem] md:text-sm gap-2"><RiCake3Line/><p className="text-xs md:text-sm">Pastelería</p></button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('tapeo')} className="flex items-center text-[0.6rem] md:text-sm gap-2"><MdFoodBank /> Tapeo</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('pizzaTartasEmpanadas')} className="flex items-center text-[0.6rem] md:text-[0.8rem] gap-2"><LuPizza /> Pizzas Tartas y Empanadas</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('entrePanes')} className="flex items-center text-[0.6rem] md:text-sm gap-2"><LuSandwich /> Entre Panes</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('ensaladasGuarniciones')} className="flex items-center text-[0.6rem] md:text-[0.8rem] gap-2"><LuSalad /> Ensaladas y Guarniciones</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('alPlato')} className="flex items-center text-[0.6rem] md:text-sm gap-2"><GiMeal /> Al Plato</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('postres')} className="flex items-center text-[0.6rem] md:text-sm gap-2"><LuIceCreamBowl /> Postres</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('bebidas')} className="flex items-center text-[0.6rem] md:text-sm gap-2"><RiDrinks2Fill /> Bebidas</button></li>
                <li className="cursor-pointer hover:bg-[#f2d0c7]"><button onClick={()=>handleEdit('bebidasAlcohol')} className="flex items-center text-[0.6rem] md:text-sm gap-2"><BiDrink />Con Alcohol</button></li>
              </ul>
            </div>
          </div>
  
          <div className="w-[5rem] h-full flex items-center justify-center "><button className="text-[0.7rem] md:text-sm text-[#769164] hover:text-[#4a5b3f] cursor-pointer">LogOut</button></div>
        </div>
  
      </nav>
  );
}

export default NavBar;