import React from 'react'
import { Container } from '@mui/material';
import LogoLogin from "../../assets/images/BtechForLogin.png"
import "./login.css";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {Helmet} from 'react-helmet';

const Login = () => {
  return (
 <Container>
    <Helmet>
        <style>{'body { background: linear-gradient(45deg, #8DF35D, #95B613) }'}</style>
    </Helmet>
    <div class="container">
        <div class="login-left">
            <div class="login-header">
                <h1>Admin Login</h1>
                
            </div>
            <form class="login-form">
                <div class="login-form-content">
                    <div class="form-item">
                        <label for="email">Username/Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div class="form-item">
                        <label for="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <Button variant="outlined"
                    sx={{
                      color:"black",
                      fontWeight:"500px",
                      fontSize:"20px",
                      border: "1px solid #FFFF",
                      borderRadius: "40px",
                      background:"linear-gradient(45deg, #8DF35D, #95B613)",
                    }}>
                    <Link to="/overview" style={{textDecoration:"none",color:"black"}}>Sign In</Link>
                    </Button>
                </div>
                <div class="login-form-footer"></div> 
            </form>
        </div>
        <div class="login-right">
        <img src={LogoLogin} alt="Logo"  />
        </div>
    </div>
    </Container>
  )
}

export default Login