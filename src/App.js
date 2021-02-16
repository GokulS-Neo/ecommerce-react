import Navbar from './Components/Navbar/Navbar';
import React from "react";
import "./App.css"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
      
    </>
  );
}

export default App;
