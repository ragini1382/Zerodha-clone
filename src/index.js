import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./landing_space/home/HomePage";
import Signup from "./landing_space/signup/Signup";
import AboutPage from "./landing_space/about/AboutPage";
import ProductPage from "./landing_space/products/ProductPage";
import PricingPage from "./landing_space/pricing/PricingPage";
import SupportPage from "./landing_space/support/SupportPage";
import NotFound from "./landing_space/NotFound";
import Navbar from "./landing_space/Navbar";
import Footer from "./landing_space/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage />}/>
      <Route path='/support' element={<SupportPage />}/>
      <Route path='/*' element={<NotFound />}></Route>
      
    </Routes>
    <Footer/>
  </BrowserRouter>
);

