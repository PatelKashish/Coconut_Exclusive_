import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import Admin from './components/Extra/admin';
import ProductForm from './components/Admin/ProductForm';
import ProductList from './components/Admin/ProductList';
import AdminLogin from './components/Admin/AdminLogin';
import Displayproduct from './pages/displayproducts';
import Details from "./components/Product/Details";
import ProductDet from "./pages/Product_details";
//  Assuming you have a Register component
import Searchproduct from './components/Search/searchproduct';
import Searchingproduct from './components/Search/searchingproduct';
import Searchproductname from './components/Search/searchproductname';
import Searchingproductname from './components/Search/searchingproductname';

import Cart from './components/Cart/Cart';
import End from './components/Cart/End';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Displayproduct />} />
          <Route path="/display" element={<Displayproduct/>}/> */}

          <Route path="/" element={<Home/>} />
          <Route path="/display" element={<Home/>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/addproduct" element={<ProductForm/>} />	
          <Route  path="/productlist" element={<ProductList/>} />
          <Route  path="/productlist/:productid" element={<ProductList/>} />
          <Route path='/adminlogin' element={<AdminLogin/>} />

          <Route path="/display/:id" element={<Details/>} />

          {/* Pallavi's Routes */}
          {/* <Route path="/" element={<Displayproduct/>}/> */}
{/* 
          {/* <Route path="/display" element={<Displayproduct/>}/> */}
          {/* <Route path="/display/product/:id" element={<ProductDet/>}/> */}
          <Route path="/searchgender" element={<Searchproduct/>} />
          <Route path="/searchname" element={<Searchproductname/>} />
          <Route path="/searchgender/searchgender/:id" element={<Searchingproduct/>} />
          <Route path="/searchname/searchname/:id" element={<Searchingproductname/>} /> 
		
          {/* Murari's Routes */}

          {/* <Route path="/display" element={<DisplayProd />} /> */}
          {/* <Route path="/display/:id" element={<ProdDet />} /> */}
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/end" element={<End />} />
        



        </Routes>
      </Router>
    </div>
  );
};

export default App;
