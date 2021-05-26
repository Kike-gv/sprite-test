import React from "react";
import "./App.css";

import Player from "./components/Player";

function App() {
  const skins = ["growlite", "kabutops", "sudowodo"];
  const size = 1;

  return (
    <div>
      <Player skin={skins[1]} size={size} />
    </div>
  );
}

export default App;
