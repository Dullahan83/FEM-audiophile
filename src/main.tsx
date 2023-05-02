import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Features/Store";
import { persistStore } from "reduxjs-toolkit-persist";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

import "./index.css";
let persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
         <App />
      </PersistGate>
   </Provider>
);
