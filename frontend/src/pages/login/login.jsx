import { React, useState } from "react"
import {Container, CssBaseline, Avatar, Typography, Box, TextField, FormControlLabel, Button, Grid, Link, Checkbox} from '@mui/material'
//import {LockOutlinedIcon} from "@mui/icons-material/LockOutlined"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios"
const Login=()=>{
  const [userDetails, setUserDetails] = useState({
    organisationName:"",
    username:"",
    password:"",
  })
// useEffect(()=>{
//     setUserDetails(formData)
// },[formData])

  const handleInput=(e)=>{
    const {name, value}=e.target
    setUserDetails({...userDetails, [name]:value})
  }

  const handleSubmit=async (e)=>{
      e.preventDefault()
      const loginDetails={
          organisationName:"",
          username:userDetails.username,
          password:userDetails.password,
      }
      await axios.post("http://localhost:3001/login",loginDetails,{
      'Content-type': 'application/json'
      }).then((response)=>{
          const status=response.status;
          console.log(`${response.statusText}`);
          console.log(`${response.data.organisationName}`);
          if(status==200){
              window.localStorage.setItem("organisation",`${response.data.organisationName}`);
              window.location="/donate/add"
          }
      })
      setUserDetails({
          username:"",
          password:"",
      })
  }
    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User name"
              name="username"
              autoComplete="email"
              autoFocus
              value={userDetails.username} 
              onChange={handleInput}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={userDetails.password}
              onChange={handleInput}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link component= {RouterLink} to="/register" href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
}

export default Login;