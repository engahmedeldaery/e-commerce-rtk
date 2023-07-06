import React from 'react';
import './App.css';
import Main from './components/Main/Main';
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './components/FilteredProducts/SingleProduct';
import Login from './components/Login/Login';
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log('user', user);
  console.log('authUser', authUser);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes >
            <Route path='/' element={authUser ? <Main></Main> : <Login></Login>}></Route>
            <Route path='/FilteredProducts/:type' element={<FilteredProducts></FilteredProducts>}></Route>
            <Route path='/FilteredProducts/:type/:id' element={<SingleProduct></SingleProduct>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
