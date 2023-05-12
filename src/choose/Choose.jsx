import React, { useState } from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import LogoLogin from "../assets/images/BtechForLogin.png"
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: '20px',
  },
  card: {
    maxWidth: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    background: '#FFFFFF',
    borderRadius: '30px !important',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width:'100%'
  },
  logo: {
    height: "250px",
    marginBottom: "20px",
    paddingRight:'10px',
    maxWidth:'100%'
  },
});

function Choose() {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <div className={classes.root}>
      <Card sx={{ 
          width: "100%", 
          maxWidth:'500px',
          height:'100%',
          maxHeight:'500px',
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={6} xl={6}>
              <div style={{display:'flex',justifyContent:'center',padding:'10px'}}>
              <img src={LogoLogin} alt="Logo" className={classes.logo} />
              </div>
              </Grid>
              <Grid item xs={6} md={6} xl={6} sx={{padding:'16px'}}>
                <div style={{display:'flex',justifyContent:'center',paddingTop:'10px'}}>
                  <h2 style={{fontSize:'20px'}}>Please choose your </h2>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                  <h2 style={{fontSize:'20px'}}>Role</h2>
                </div>
                <br/>
              <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <div>
            <Link to="/admin-login" style={{textDecoration:"none",color:"black"}}>
              <Button type="submit" variant="contained" fullWidth sx={{
                display:'flex',
                borderRadius: '40px'
              }} 
                style={{background:"linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)"}}>
                Login as Admin
              </Button>
            </Link>
            <br/>
            </div>
            <Link to="/engineer-login" style={{textDecoration:"none",color:"black"}}>
              <Button type="submit" variant="contained" fullWidth sx={{
                display:'flex',
                borderRadius: '40px'
              }}  
              style={{background:"linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)"}}>
                Login as Engineer
              </Button>
            </Link>
            <br/>
            <Link to="/user-login" style={{textDecoration:"none",color:"black"}}>
            <Button type="submit" variant="contained" fullWidth sx={{
                display:'flex',
                borderRadius: '40px'
              }} 
              style={{background:"linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)"}}>
              Login as Client
            </Button>
            </Link>
          </form>
              </Grid>
              
            </Grid>
            
      </Card>
      {/* <Card className={classes.card}>
      <img src={LogoLogin} alt="Logo" className={classes.logo} />
        <CardContent className={classes.form}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="body1" sx={{fontSize:"30px",fontWeight:"700"}}>
          Welcome to Login Page
        </Typography>
        </div>
        
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              margin="normal"
              sx={{display:'flex'}}
              fullWidth
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
              sx={{display:'flex'}}
              fullWidth
            />
           <Link to="/overview" style={{textDecoration:"none",color:"black"}}>
            <Button type="submit" variant="contained" fullWidth style={{background:"linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)"}}>
              Login
            </Button>
            </Link>
          </form>
        </CardContent>
      </Card> */}
    </div>
  );
}

export default Choose;

