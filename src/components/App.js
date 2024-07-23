import React from "react";
import "./App.scss";
import Board from "./Board/Board";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
