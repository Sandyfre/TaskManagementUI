// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
// import LoginPage from "./components/LoginPage";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          // <PrivateRoute>
            <Dashboard />
          // </PrivateRoute>
        }
      />
      {/* add more routes as needed */}
    </Routes>
  );
}

export default App;
