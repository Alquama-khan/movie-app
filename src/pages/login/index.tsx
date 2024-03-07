import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    InputBase,
    Link,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  
  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const submitHandle = (e: any) => {
      e.preventDefault();
      console.log(`Email : ${email} and Password : ${password}`);
      setEmail("");
      setPassword("");
    };
    return (
      <Box
        sx={{
          backgroundColor: "#adbab1" ,
          backgroundSize: "contain",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <Box
          p={4}
          sx={{
            width: "100%",
            background: "#769c80",
            maxWidth: "380px",
          }}
        >
          <Typography variant="h2" mb={3} fontSize="1.25rem">
            Sign Up
          </Typography>
          <Box component="form" sx={{ color: "#fff" }} onSubmit={submitHandle}>
            <InputBase
              required
              placeholder=" Enter Email address"
              type="email"
              fullWidth
              sx={{
                mb: 2,
                padding: "5px 10px",
                background: "#fff",
                fontSize: "15px",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputBase
              required
              placeholder=" Enter Password"
              type="password"
              fullWidth
              sx={{
                mb: 1,
                padding: "5px 10px",
                background: "#fff",
                fontSize: "15px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Login;