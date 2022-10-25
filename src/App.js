import React from "react";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/Global";
import { store } from "./store";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
