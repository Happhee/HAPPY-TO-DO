import React from "react";
import './App.css';
import AddTodoListRoot from './Components/AddTodoListRoot';
import DisplayTodoListRoot from "./Components/DisplayTodoListRoot";

function App() {
  return (
    <div className="App">
      <div className="rootApp">
        <AddTodoListRoot></AddTodoListRoot>
        <DisplayTodoListRoot></DisplayTodoListRoot>
      </div>

    </div>
  );
}

export default App;
