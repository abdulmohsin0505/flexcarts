import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { MenuProvider } from "./context/menuContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MenuProvider>
        <App />
      </MenuProvider>
    </Provider>
  </React.StrictMode>
);
