import React from "react";
import Navbar from "./components/Navbar/index";
import {BrowserRouter as Router} from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products/index";
import {productData,productDataTwo} from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";


const App=()=>{

return(

  <Router>
  <GlobalStyle />
  <Hero />
  <Products  heading="Choose Your Favorite Pizza" data={productData}/>
  <Feature />
  <Products  heading="Sweet Treat for You" data={productDataTwo}/>
  <Footer />
  </Router>
);

}

export default App;