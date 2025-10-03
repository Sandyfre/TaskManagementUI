// src/components/LoginPage.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Alert,
  CircularProgress
} from "@mui/material";
import { Visibility, VisibilityOff, Lock, Facebook, Twitter, Apple } from "@mui/icons-material";
// import API from "../api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    const demail = 'Sandeep1234@gmail.com'
    const dpassword = 'Divya1234'
  
    try {
         if(email=== demail && password=== dpassword){
          navigate("/dashboard");
        // return setLoading(false) 
    }else{
        
        alert(`Wrong username or password`)
        return setLoading(false)
    }
    } catch (error) {
        console.log(error.message);
        
    }
   
    
   
    
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    setLoading(true);
    // try {
    //   const res = await API.post("/auth/login", { email, password });
    //   // adapt if backend returns { token } or { token, user }
    //   const token = res.data.token || res.data.accessToken || null;
    //   if (!token) {
    //     throw new Error(res.data.message || "No token returned from server");
    //   }
    //   localStorage.setItem("token", token);
    //   // optionally store user info: localStorage.setItem("user", JSON.stringify(res.data.user));
    //   navigate("/dashboard");
    // } catch (err) {
    //   console.error(err);
    //   setError(err.response?.data?.message || err.message || "Login failed");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Box
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // gradient similar to your screenshot
        background: "linear-gradient(135deg, #9b164bff 0%, #395b17a3 40%, #c68d2bff 100%)",
        p: 2,
      }}
    >
      <Card sx={{ width: 420, borderRadius: 3, boxShadow: 6 }}>
        <CardContent sx={{ textAlign: "center", p: 5 }}>
          <Typography variant="h4" fontWeight="700" gutterBottom>
            Log in
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            New to Task Manager?{" "}
            <a href="/signup" style={{ textDecoration: "none", fontWeight: "600" }}>
              Sign up for free
            </a>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <TextField
              fullWidth
              label="Email address"
              type="email"
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              margin="normal"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end" aria-label="toggle password">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Typography variant="body2" sx={{ textAlign: "left", mt: 1 }}>
              <a href="/forgot-password" style={{ textDecoration: "none" }}>
                Forgot password?
              </a>
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#2dcf7eff", color: "#f6f3f3ff" }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : "Log in"}
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1, mb: 2 }}>
            <IconButton aria-label="facebook"><Facebook /></IconButton>
            <IconButton aria-label="apple"><Apple /></IconButton>
            <IconButton aria-label="twitter"><Twitter /></IconButton>
          </Box>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<Lock />}
            sx={{ borderRadius: 5 }}
            onClick={() => alert("SSO not implemented")}
          >
            Log in with SSO
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
