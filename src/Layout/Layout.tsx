import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

interface Props {
   children: React.ReactNode;
}

function Layout({ children }: Props) {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
}

export default Layout;
