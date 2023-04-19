import React, { Fragment } from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const CreateMember = () => {
  return (
    <Fragment>
        <h2>Create Ticket</h2>
          <Card sx={{ 
              minWidth: "100%",
              border:"1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px", 
              padding:"16px",
              }}>
              <div>  
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Title
              </Typography>
              
              <TextField id="outlined-basic" variant="outlined" size='small' 
              sx={{
                  width:"100%", 
                  height:"5px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
              }}/>
              </div>
              <br/>
          </Card>    
    </Fragment>
  )
}

export default CreateMember