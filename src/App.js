import React from "react";
import { Titlebar } from "./components/Titlebar";
import { Menu } from "./components/Menu";
import { loadRestoAsync } from "./redux/restoSlice";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  dispatch(loadRestoAsync());
  return (
    <div className="App">
      <div class="header">
        <Titlebar />
      </div>
      <div class="main">
        <Menu />
      </div>
    </div>
  );
}

export default App;
