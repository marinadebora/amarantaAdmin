import { Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
import { useEffect, useState } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PanelEditProduct from './components/PanelEditProduct';
import EditProducts from './components/EditProducts';
import Footer from './components/Footer'
import PanelCreateProduct from './components/PanelCreateProduct';
import SinLogIn from './components/SinLogIn';
import { useSelector } from 'react-redux';

function App()
{
  const token = sessionStorage.getItem('token')
  const { data } = useSelector(state => state.logIn);
  const [logInState, setLogInState] = useState(false);


  useEffect(() =>
  {
    if (data || token) {
      setLogInState(true)
    } else {
      setLogInState(null)
    }
  }, [data, token]);

  return (

    <div className="min-h-screen flex flex-col justify-between ">
      {
        !logInState ?
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<SinLogIn />} />
            <Route path='/panelEdit/:product' element={<SinLogIn />} />
            <Route path='/editProduct/:product/:id' element={<SinLogIn />} />
            <Route path='/panelCreate/:product' element={<SinLogIn />} />
          </Routes> :
          <div className='h-full flex flex-col gap-4'>
            <NavBar />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/panelEdit/:product' element={<PanelEditProduct />} />
              <Route path='/editProduct/:product/:id' element={<EditProducts />} />
              <Route path='/panelCreate/:product' element={<PanelCreateProduct />} />
            </Routes>
          </div>
      }
      <Footer />
    </div>
  );
}

export default App;
