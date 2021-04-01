import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./root/App";
import { ChakraProvider } from "@chakra-ui/react";
import NewsContextProvider from "./context/NewsContext";

ReactDOM.render(
  <NewsContextProvider>
    <ChakraProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </NewsContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
