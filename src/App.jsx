import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Login from "./components/Login";
import { useEffect, useState } from 'react';
import Home from './components/Home';
import CreateCoffe from './components/CreateCoffe';
import NavBar from './components/NavBar';


function App()
{
  const token = sessionStorage.getItem('token')
  const [logInState, setLogInState] = useState(true);


  useEffect(() =>
  {
    if (token) {
      setLogInState(true)
    } else {
      setLogInState(null)
    }
  }, [token]);

  return (

    <div className="min-h-screen flex flex-col justify-between ">


      {
        !logInState ? <Routes><Route path='/' element={<Login />} /></Routes> :
          <>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/createCoffe' element={<CreateCoffe />} />
            </Routes>
          </>
      }





      <footer className="bg-[#000] text-white ">
        fffff
      </footer>
    </div>
  );
}

export default App;
