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

const EditTickets = () => {
  return (
    <Container>
    <Grid container spacing={5}>
      <Grid item md={12} xl={12} sm={12} >
        <h2>Edit Ticket</h2>
      </Grid> 
      
      <Grid item md={12} xl={12} sm={12}>
        <Card sx={{ 
          minWidth: "1000px",
          height:"600px",
          border:"1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "10px", 
          }}>
        <CardContent>
          <Typography variant="body2" sx={{fontSize:"17px"}}>
            Title
          </Typography>
          <TextField id="outlined-basic" variant="outlined" size='small'  
          sx={{
              width:"1100px", 
              height:"5px",  
              background:"#FFFFFF",
              borderRadius: "7px"
          }}/>
        <Grid item md={12} xl={12} sm={12}>
          <br/>
          <br/>
          <Typography variant="body2" sx={{fontSize:"17px"}}>
            Description
            <br />
          </Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            sx={{
              width:"1100px", 
              height:"5px",  
              background:"#FFFFFF",
              borderRadius: "7px"
            }}
          />
        </Grid>
        <br/><br/> <br/> <br/>
        <br/><br/>

        <Stack spacing={2} direction="row">
        <Grid item md={3} xl={3} sm={3}> 
            <Typography variant="body2" sx={{fontSize:"17px"}}>
              Asignee
            </Typography>
            <TextField
              id="outlined-select-currency"
              size='small'
              select
              defaultValue="Selected"
              helperText="Please select the user"
            >
              {User.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              </TextField>
        </Grid>
        <Grid item md={3} xl={3} sm={3}> 
            <Typography variant="body2" sx={{fontSize:"17px"}}>
              Priority
            </Typography>
            <TextField
              id="outlined-select-currency"
              size='small'
              select
              defaultValue="Selected"
              helperText="Please select your urgency"
            >
              {prior.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
        </Grid>
        <Grid item md={3} xl={3} sm={3}> 
            <Typography variant="body2" sx={{fontSize:"17px"}}>
            Estimated Resolution Time
            </Typography>
            <TextField id="outlined-basic" variant="outlined"  size='small' 
              sx={{
                width:"211px", 
                height:"35px",  
                background:"#FFFFFF",
                borderRadius: "7px"
               }}/>
        </Grid>
        <Grid item md={3} xl={3} sm={3}> 
            <Typography variant="body2" sx={{fontSize:"17px"}}>
              Labels
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
        <Grid item md={3} xl={3} sm={3}> 
            <Typography variant="body2" sx={{fontSize:"17px"}}>
              Client Code
            </Typography>
            <TextField id="outlined-basic" defaultValue="Unassigned" variant="outlined" size='small'  
              sx={{
                width:"211px", 
                height:"35px",  
                background:"#FFFFFF",
                borderRadius: "7px",
               }}/>
        </Grid>
        <Grid item md={3} xl={3} sm={3}> 
            <Typography variant="body2" sx={{fontSize:"17px"}}>
              Reporter
            </Typography>
            <TextField id="outlined-basic" defaultValue="Unassigned" variant="outlined" size='small'  
              sx={{
                width:"211px", 
                height:"35px",  
                background:"#FFFFFF",
                borderRadius: "7px",
               }}/>
        </Grid>
        <Grid item md={3} xl={3} sm={3}> 
            <Typography variant="body2" sx={{fontSize:"17px"}}>
               Status
            </Typography>
            <TextField
              id="outlined-select-currency"
              size='small'
              select
              defaultValue="Selected"
              helperText="Please select your progress"
            >
              {Stat.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                  {option.label}
              </MenuItem>
              ))}
            </TextField>
        </Grid>
        </Stack>
        
        <Grid item md={12} xl={12} sm={12} style={{display:"flex",justifyContent:"flex-end"}}> 
        <Button 
          variant="contained"
          sx={{
            color:"black",
            background:"#BFFF58",
            height:"53px",
            width:"200px",
            "&:hover":{
              backgroundColor:"green"
            }
            }}>
             <Link to="/tickets" style={{textDecoration:"none",color:"black"}}>Edit Tickets</Link>
         </Button>     

        </Grid>
        </CardContent>
        </Card>
        </Grid>
      </Grid>
  </Container>
  )
}

export default EditTickets