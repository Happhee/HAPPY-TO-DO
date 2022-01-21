import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import DayTodoList from "./pages/DayTodoList";
import Calendar from "./pages/Calendar";
function App() {
  return (
    <BrowserRouter className="App">
      <div className="App">
        <Header />
        <div className='rootApp'>
          <Routes>
            <Route path="/" element={<DayTodoList />} />
            <Route path="calendar" element={<Calendar />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
