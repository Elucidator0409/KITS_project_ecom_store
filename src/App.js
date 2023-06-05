import {
  Routes, Route
} from "react-router-dom";

import React, { useState } from "react";
import './App.css';
import Home from "./components/pages/Home";
import { PrimaryLayout } from "components/Layout";




function App() {
  return (
    
    <Routes>
      
      <Route element={<PrimaryLayout />}>
        <Route path="/" element={<Home />} />
        
      </Route>
        
      
      
    </Routes>
    
  );
}

export default App;
