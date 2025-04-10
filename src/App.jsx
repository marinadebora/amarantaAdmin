import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Login from "./components/Login";
import { useEffect, useState } from 'react';
import Home from './components/Home';
import CreateCoffe from './components/CreateCoffe';
import NavBar from './components/NavBar';
import CreateAlPlato from './components/CreateAlPlato';
import CreateBebidas from './components/CreateBebidas';
import CreateBebidasAlcohol from './components/CreateBebidasAlcohol';
import CreateEnsaladasGuarniciones from './components/CreateEnsaladasGuarniciones';
import CreateEntrePanes from './components/CreateEntrePanes';
import CreatePasteleria from './components/CreatePasteleria';
import CreatePostres from './components/CreatePostres';
import CreateTapeo from './components/CreateTapeo';
import CreatePizzaTartasEmpanadas from './components/CreatePizzaTartasEmpanadas';
import PanelEditProduct from './components/PanelEditProduct';
import EditProducts from './components/EditProducts';
import Footer from './components/Footer'
import PanelCreateProduct from './components/PanelCreateProduct';

function App()
{
  const token = sessionStorage.getItem('token')
  const [logInState, setLogInState] = useState(true);


 /*  useEffect(() =>
  {
    if (token) {
      setLogInState(true)
    } else {
      setLogInState(null)
    }
  }, [token]); */

  return (

    <div className="min-h-screen flex flex-col justify-between ">


      {
        !logInState ? <Routes><Route path='/' element={<Login />} /></Routes> :
          <>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/createAlPlato' element={<CreateAlPlato />} />
              <Route path='/createBebidas' element={<CreateBebidas />} />
              <Route path='/createBebidasA' element={<CreateBebidasAlcohol />} />
              <Route path='/createCafeteria' element={<CreateCoffe />} />
              <Route path='/createEnsGuar' element={<CreateEnsaladasGuarniciones />} />
              <Route path='/createEntreP' element={<CreateEntrePanes />} />
              <Route path='/createPasteleria' element={<CreatePasteleria />} />
              <Route path='/createPizzTarEmp' element={<CreatePizzaTartasEmpanadas />} />
              <Route path='/createPostres' element={<CreatePostres />} />
              <Route path='/createTapeo' element={<CreateTapeo />} />
              <Route path='/panelEdit' element={<PanelEditProduct />} />
              <Route path='/editProduct/:id' element={<EditProducts />} />
            </Routes>
          </>
      }



<Footer />
    </div>
  );
}

export default App;
