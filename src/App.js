import React from "react";
import Todo from "./components/Todo/Todo";
import WeatherApp from "./components/Weather/WeatherApp"
import NoPage from './components/Routing/NoPage'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/weatherapp" element={<WeatherApp />} />
       
       <Route path="*" component={<NoPage />} />
     
     </Routes>
      </div>
    </Router>
  );
}