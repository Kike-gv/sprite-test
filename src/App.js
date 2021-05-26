import React from "react";
import "./App.css";

import Player from "./components/Player";

function App() {

  const skins = ['growlite','kabutops','sudowodo'];

  return <div> <Player skin={skins[1]}/></div>;
}

export default App;
