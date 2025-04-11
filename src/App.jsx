import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Login from "./components/Login";
import { /* useEffect, */ useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PanelEditProduct from './components/PanelEditProduct';
import EditProducts from './components/EditProducts';
import Footer from './components/Footer'
import PanelCreateProduct from './components/PanelCreateProduct';

function App()
{
  //const token = sessionStorage.getItem('token')
  const [logInState, /* setLogInState */] = useState(true);


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
          <div className='h-full flex flex-col gap-4'>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/panelEdit' element={<PanelEditProduct />} />
              <Route path='/editProduct/:id' element={<EditProducts />} />
              <Route path='/panelCreate/:product' element={<PanelCreateProduct />} />
            </Routes>
          </div>
      }
      <Footer />
    </div>
  );
}

export default App;
