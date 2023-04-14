import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import "./choose.css";
import LogoLogin from "../../assets/images/BtechForLogin.png"
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const Choose = () => {
  return (
    <Container>
      <Helmet>
          <style>{'body { background: linear-gradient(45deg, #8DF35D, #95B613) }'}</style>
      </Helmet>
      <div class="container">
        <div class="login-left">
            <div class="login-header">
                <h1>Please Choose</h1>
            </div>
            <form class="login-form">
                <div class="login-form-content">
                  <Stack spacing={4} direction="column">
                    <Button variant="outlined" 
                    sx={{
                      color:"black",
                      fontWeight:"500px",
                      fontSize:"20px",
                      border: "1px solid #FFFF",
                      borderRadius: "40px",
                      background:"linear-gradient(45deg, #8DF35D, #95B613)",
                    }}>
                      <Link to="login" style={{textDecoration:"none",color:"black"}}>Login as Admin</Link>
                    </Button>
                    <Button variant="outlined"
                    sx={{
                      color:"black",
                      fontWeight:"500px",
                      fontSize:"20px",
                      border: "1px solid #FFFF",
                      borderRadius: "40px",
                      background:"linear-gradient(45deg, #8DF35D, #95B613)",
                    }}>
                      <Link to="login" style={{textDecoration:"none",color:"black"}}>Login as Engineer</Link>
                    </Button>
                    <Button variant="outlined"
                    sx={{
                      color:"black",
                      fontWeight:"500px",
                      fontSize:"20px",
                      border: "1px solid #FFFF",
                      borderRadius: "40px",
                      background:"linear-gradient(45deg, #8DF35D, #95B613)",
                    }}>                      
                    <Link to="login" style={{textDecoration:"none",color:"black"}}>Login as User</Link>
                    </Button>
                  </Stack>

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

export default Choose