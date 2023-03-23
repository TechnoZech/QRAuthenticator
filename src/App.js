import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import QRHome from "./pages/qrHome";
import QRScan from "./pages/qrScan";
import SecretKey from "./pages/secretKey";
import EnterCode from "./pages/enterCode";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<QRHome />} />
					<Route path="/" element={<QRHome />} />
          <Route path="/qrScan" element={<QRScan />} />
          <Route path="/secretKey" element={<SecretKey />} />
          <Route path="/enterCode" element={<EnterCode />} />
				</Routes>
      </Router>
    </>
  );
}

export default App;
