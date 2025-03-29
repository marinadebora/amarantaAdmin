import { Route, Routes } from 'react-router-dom'
import Carta from "./components/Carta";
import "./App.css"
import Footer from "./components/Footer";
import Login from "./components/Admin/Login";
import Panel from './components/Admin/Panel';
import NavBar from './components/NavBar';
function App()
{
  return (

    <div className="min-h-screen flex flex-col justify-between ">
      <NavBar  />
    {/*   <Routes>
        <Route path='/LoginACR' element={<Login  />} />
      </Routes> */}


      <footer className="bg-[#000] text-white ">
        fffff
      </footer>
    </div>
  );
}

export default App;
