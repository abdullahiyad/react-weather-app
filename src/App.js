// import { useContext, useEffect, useState } from "react";
import "./styles/components/App.scss";
import Main from "./components/Main";
import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";

function App() {
  const dark = useSelector((state) => state.theme);
  return (
    <div className={`App-${dark ? "dark" : "light"}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
