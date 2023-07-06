import React from "react";
import Product from "./Id/Product";
import Products from "../sections/Products";
import Search from "./Search";
import Banner from "../sections/banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
 
  return (
    <div>
        <Navbar />
      <Products />
      <Footer/>
      
    </div>
  );
};

export default Home;