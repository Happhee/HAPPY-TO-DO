import React from "react";
import './App.css';
import AddTodoListRoot from './components/AddTodoListRoot';
import DisplayTodoListRoot from "./components/DisplayTodoListRoot";

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
