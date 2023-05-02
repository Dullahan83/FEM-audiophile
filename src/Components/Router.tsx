import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../Features/Store";
import Home from "../Pages/Home";
import Headphones from "../Pages/Headphones";
import Earphones from "../Pages/Earphones";
import Speakers from "../Pages/Speakers";
import Checkout from "../Pages/Checkout";
import Product from "../Pages/Product";
interface Props {}

function Router(props: Props) {
   const {} = props;

   return (
      <>
         <Provider store={store}>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/headphones" element={<Headphones />} />
                  <Route path="/earphones" element={<Earphones />} />
                  <Route path="/speakers" element={<Speakers />} />
                  <Route path=":checkout" element={<Checkout />} />
                  <Route path="/product/:id" element={<Product />} />
               </Routes>
            </BrowserRouter>
         </Provider>
      </>
   );
}

export default Router;
