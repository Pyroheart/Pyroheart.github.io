import './App.css';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import MainPage from './MainPages/landingPage';
import ManageProfile from './MainPages/manageProfile';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/selectProfile" />} />
        <Route path="/selectProfile" element={<ManageProfile />} />
        <Route path="/browse" element={<MainPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
