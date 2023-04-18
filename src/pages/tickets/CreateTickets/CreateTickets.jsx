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

const prior = [
  {
    value: 'low',
    label: 'Low',
  },
  {
    value: 'medium',
    label: 'Medium',
  },
  {
    value: 'high',
    label: 'High',
  },
  {
    value: 'critical',
    label: 'Critical',
  },
];
const Stat =[
  {
    value: 'selected',
    label: 'Selected',
  },
  {
    value: 'toDo',
    label: 'To-Do',
  },
  {
    value: 'inprogress',
    label: 'In-Progress',
  },
  {
    value: 'done',
    label: 'Done',
  },
];
const User =[
  {
    value: 'unassigned',
    label: 'Unassigned',
  },
  {
    value: 'user1',
    label: 'Regin',
  },
  {
    value: 'user2',
    label: 'Nathan',
  },
  {
    value: 'user3',
    label: 'Gilang',
  },
  {
    value: 'user3',
    label: 'Daus'
  }
];

const CreateTickets = () => {
  return (
    <Container>
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
            <div>  
            <Typography variant="body2" sx={{fontSize:"17px"}}>
              Description
              <br />
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={5}
              sx={{
                width:"100%", 
                height:"5px",  
                background:"#FFFFFF",
                borderRadius: "7px"
              }}
            />
            </div>
            <br/><br/><br/><br/><br/><br/>
          <div>
          <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={3}> 
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Asignee
              </Typography>
              <TextField
                id="outlined-select-currency"
                size='small'
                select
                defaultValue="Selected"
                helperText="Please select the user"
                sx={{width:"100%"}}
              >
                {User.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Priority
              </Typography>
              <TextField
                id="outlined-select-currency"
                size='small'
                select
                defaultValue="Selected"
                helperText="Please select your urgency"
                sx={{width:"100%"}}
              >
                {prior.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{fontSize:"17px"}}>
              Estimated Resolution Time
              </Typography>
              <TextField id="outlined-basic" variant="outlined"  size='small' 
                sx={{
                  width:"100%", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Labels
              </Typography>
              <TextField id="outlined-basic" variant="outlined" size='small' 
                sx={{
                  width:"100%", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
          </Grid>
          </Grid>
          </div>
          <br/>
          <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Client Code
              </Typography>
              <TextField id="outlined-basic" defaultValue="Unassigned" variant="outlined" size='small'  
                sx={{
                  width:"100%", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px",
                 }}/>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                Reporter
              </Typography>
              <TextField id="outlined-basic" defaultValue="Unassigned" variant="outlined" size='small'  
                sx={{
                  width:"100%", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px",
                 }}/>
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{fontSize:"17px"}}>
                 Status
              </Typography>
              <TextField
                id="outlined-select-currency"
                size='small'
                select
                defaultValue="Selected"
                sx={{width:'100%'}}
              >
                {Stat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
                ))}
              </TextField>
          </Grid>
          </Grid>
          <div style={{display:"flex",justifyContent:"flex-end",marginTop:"10px"}}> 
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
              <Link to="/tickets" style={{textDecoration:"none",color:"black"}}>Create Tickets</Link>
           </Button>
           </div>     
          
          </Card>
        
    </Container>
  )
}

export default CreateTickets