import { React, useState } from "react";
import {Container, CssBaseline, Avatar, Typography, Box, TextField, FormControlLabel, Button, Grid, Link, Checkbox} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
const Register=()=>{

    const [userDetails, setUserDetails] = useState({
        organisationName:"",
        username:"",
        password:"",
    })

    const handleInput=(e)=>{
        const {name, value}=e.target
        setUserDetails({...userDetails, [name]:value})
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        const loginDetails={
            organisationName:userDetails.organisationName,
            username:userDetails.username,
            password:userDetails.password,
        }
        
        axios.post("http://localhost:3001/register",loginDetails,{
        'Content-Type': 'application/json'
        }).then((response)=>{
            const status=response.status
            console.log(response);
            if(status===200){
                window.location="/"
            }
            console.error(response.data)
        }) 
        setUserDetails({
            organisationName:"",
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
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="organisationName"
                  required
                  fullWidth
                  id="organisation"
                  label="Organisation"
                  autoFocus
                  value={userDetails.organisationName}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Username"
                  name="username"
                  value={userDetails.username}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="password"
                  label="Password"
                  name="password"
                  value={userDetails.password}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component= {RouterLink} to="/" href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
}

export default Register;