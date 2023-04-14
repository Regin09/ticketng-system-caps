import React from 'react'
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

const DetailFeedback = () => {
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item md={12} xl={12} sm={12} >
          <h2>User Feedback</h2>
        </Grid>
        <Grid item md={12} xl={12} sm={12}>
        <Grid item md={12} xl={12} sm={12}>
          <Card sx={{ 
            minWidth: "1000px",
            height:"600px",
            border:"1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "10px", 
            }}>
          <CardContent>
          <Stack spacing={2} direction="row">
          <Grid item md={4} xl={4} sm={4}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
              ID
              </Typography>
              <TextField id="outlined-basic" variant="outlined"  size='small' 
                sx={{
                  width:"211px", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
          </Grid>
          <Grid item md={4} xl={4} sm={4}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Sender Username
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size='small' 
                sx={{
                  width:"211px", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
          </Grid>
          <Grid item md={4} xl={4} sm={4}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Sender Name
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size='small' 
                sx={{
                  width:"211px", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
          </Grid>
          </Stack>
          <br/>
          <Stack spacing={2} direction="row">
          <Grid item md={4} xl={4} sm={4}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
              Sender Client
              </Typography>
              <TextField id="outlined-basic" variant="outlined"  size='small' 
                sx={{
                  width:"211px", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
          </Grid>
          <Grid item md={4} xl={4} sm={4}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                 Engineer Username
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size='small' 
                sx={{
                  width:"211px", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
          </Grid>
          <Grid item md={4} xl={4} sm={4}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Engineer Name
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size='small' 
                sx={{
                  width:"211px", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
          </Grid>
          </Stack>
          <br/>
          <Grid item md={12} xl={12} sm={12}>
            <br/>
            <Typography variant="body2" sx={{fontSize:"17px"}}>
              Description
              <br />
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={12}
              sx={{
                width:"1100px", 
                height:"5px",  
                background:"#FFFFFF",
                borderRadius: "7px"
              }}
            />
          </Grid>
          </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Grid>
    </Container>
  )
}

export default DetailFeedback