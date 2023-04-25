import React, { Fragment } from 'react'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

const UserMember =[
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'engineer',
    label: 'Engineer',
  },
];
const CreateMember = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
        <h1>Create Account</h1>
        <br/>
          <Card sx={{ 
              width: "100%",
              border:"1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px", 
              padding:"16px",
              }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}> 
                  <Typography variant="body2" sx={{fontSize:"17px"}}>
                    Fullname
                  </Typography>      
                  <TextField id="outlined-basic" variant="outlined" size='small' 
                    sx={{
                        width:"100%",  
                        background:"#FFFFFF",
                        borderRadius: "7px"
                    }}/>
                    <br/>
                  </Grid>
                  <Grid item xs={12} md={6} xl={6}> 
                    <Typography variant="body2" sx={{fontSize:"17px"}}>
                      Email
                    </Typography>      
                    <TextField id="outlined-basic" variant="outlined" size='small' 
                      sx={{
                          width:"100%", 
                          background:"#FFFFFF",
                          borderRadius: "7px"
                      }}/>
                    <br/><br/>
                  </Grid>         
              </Grid>        
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}> 
                  <Typography variant="body2" sx={{fontSize:"17px"}}>
                    Username
                  </Typography>      
                  <TextField id="outlined-basic" variant="outlined" size='small' 
                    sx={{
                        width:"100%", 
                        background:"#FFFFFF",
                        borderRadius: "7px"
                    }}/>
                  </Grid>
                  <Grid item xs={12} md={6} xl={6}> 
                    <Typography variant="body2" sx={{fontSize:"17px"}}>
                      Password
                    </Typography>      
                    <FormControl sx={{ width: '100%' }} variant="outlined" size='small'>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
                    
                  </Grid>         
              </Grid>     
          <br/>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Role
              </Typography>      
              <TextField
                id="outlined-select-currency"
                size='small'
                select
                defaultValue="Selected"
                sx={{width:"100%"}}
              >
                {UserMember.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={6} xl={6}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Client Code
              </Typography>      
              <TextField id="outlined-basic" variant="outlined" size='small' 
              sx={{
                  width:"100%", 
                  background:"#FFFFFF",
                  borderRadius: "7px"
              }}/>
              <br/><br/>
              </Grid>
              </Grid>
              <br/>
              <div style={{display:"flex",justifyContent:"flex-start",marginTop:"10px"}}> 
              <Link to="/members" style={{textDecoration:"none",color:"black"}}>
                <Button 
                  variant="contained"
                  sx={{
                    color:"black",
                    background:"#BFFF58",
                    height:"53px",
                    width:"fix-content",
                    "&:hover":{
                      backgroundColor:"green"
                    }
                    }}>
                    Create Tickets
                </Button>
              </Link>
              </div>
            <br/>
          </Card>    
    </Fragment>
  )
}

export default CreateMember