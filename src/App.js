import { useContext, useEffect, useState } from "react";
import "./styles/components/App.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  const dark = true;
  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
