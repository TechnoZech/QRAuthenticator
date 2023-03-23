import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import QRHome from "./pages/qrHome";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<QRHome />} />
					<Route path="/" element={<QRHome />} />
				</Routes>
      </Router>
    </>
  );
}

export default App;
