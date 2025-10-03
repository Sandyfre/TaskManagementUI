// src/pages/Dashboard.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography sx={{ mt: 2 }}>Welcome — your login worked.</Typography>
      <Button variant="contained" color="secondary" sx={{ mt: 3 }} onClick={logout}>
        Logout
      </Button>
    </Box>
  );
};

export default Dashboard;
