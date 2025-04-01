import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogIn } from '../redux/thunks/logIn';


const Login = () =>
{
  const [logInData, setLogInData] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch()

  const handleLogIn = (event) =>
  {
    event.preventDefault();
    setLogInData({
      ...logInData,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = (event) =>
  {
    event.preventDefault()
    dispatch(LogIn(logInData))
    setLogInData({
      email: "",
      password: ""
    })
    
  }

  return (
    <div className='w-full h-[95vh] flex items-center justify-center'>
      <div className="bg-[#f9eae6] w-[20rem] rounded-2xl h-[30rem] flex  flex-col justify-center px-6 py-12 lg:px-8">
        <div className=" rounded-2xl h-[6rem]  flex flex-col items-center justify-center text-[#f9eae6]">
          <img className='w-[8rem]' src="/amarantaLogo.svg" alt="" />
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form onSubmit={handleSubmit} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-[#769164]">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={logInData.email}
                  onChange={handleLogIn}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-[#769164]">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={logInData.password}
                  onChange={handleLogIn}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#769164] px-3 py-1.5 text-sm/6 font-semibold text-[#f9eae6] shadow-xs hover:bg-[#4b5d3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};


export default Login;