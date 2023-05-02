import { useEffect, useState } from "react";
import "./App.css";
import Router from "./Components/Router";
import { fetchDatas } from "./Features/Slices/productSlice";
import { useAppDispatch } from "./Features/Hooks";

function App() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(fetchDatas());
   }, []);
   return (
      <>
         <Router />
      </>
   );
}

export default App;
