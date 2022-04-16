import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';

import MainPage from './pages/MainPage';
import PIform from './pages/PIform';
import Report from './pages/Report';
import "./App.css"
import AllRecords from './pages/AllRecords';
function App() {
  return (
    <div className="App" style={{
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
    }}>
      <Router>
        <div>
          <NavBar />
          <Routes>

            <Route path="/" caseSensitive={false} element={<MainPage />} />
            <Route path="/pi" caseSensitive={false} element={<PIform />} />
            <Route path="/rp" caseSensitive={false} element={<Report />} />
            <Route path="/ar" caseSensitive={false} element={<AllRecords />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
