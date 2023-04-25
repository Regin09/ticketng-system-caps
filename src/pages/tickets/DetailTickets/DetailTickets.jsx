import React, { Fragment } from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';

const DetailTickets = () => {
  return (
      <Fragment>
        <Link to="editTickets" style={{textDecoration:"none",color:"black"}}>
          <Button 
            variant="contained" size='small'
            sx={{
              color:"black",
              background:"#FFFFFF",
              height:"36px",
              cursor: "pointer",
              "&:hover":{
                backgroundColor:"white"
              }
              }}>
              Edit Ticket
          </Button>
          </Link>
          <Button 
            variant="contained" size='small'
            sx={{
              color:"black",
              background:"#FFFFFF",
              height:"36px",
              cursor: "pointer",
              marginLeft:"16px",
              "&:hover":{
                backgroundColor:"white"
              }
              }}>
            <Link to="/tickets" style={{textDecoration:"none",color:"black"}}>Close Ticket</Link>
          </Button>
          <br/>

          <Grid container spacing={2} style={{paddingTop:"16px"}}>
            <Grid item xs={12} md={6} lg={9}>
            <Card sx={{ 
              width:'100%',
              border:"1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px", 
              padding:"16px",
              }}
              >
            <Typography variant="body1" sx={{fontSize:"30px",fontWeight:"700"}}>
              Host 14 is down
            </Typography><br/>
            <Typography variant="body2" sx={{fontSize:"20px",fontWeight:"400"}}>
            Vivamus blandit, odio eget tristique volutpat, eros lectus auctor lorem, vitae sagittis sapien mauris interdum ex. Donec eu eleifend massa. Donec viverra, ex ut euismod hendrerit, nunc nisi cursus est, nec scelerisque lorem erat vel nunc. Duis non urna ornare, commodo felis ac, fringilla tortor. Nulla dui libero, dignissim et eros id, elementum rutrum risus
            Vivamus blandit, odio eget tristique volutpat, eros lectus auctor lorem, vitae sagittis sapien mauris interdum ex. Donec eu eleifend massa. Donec viverra, ex ut euismod hendrerit, nunc nisi cursus est, nec scelerisque lorem erat vel nunc. Duis non urna ornare, commodo felis ac, fringilla tortor. Nulla dui libero, dignissim et eros id, elementum rutrum risussadasdsadasddddddddddddddddddddda
            </Typography>
            </Card>
            <br/>
            <Card sx={{ 
              width:'100%',
              border:"1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px", 
              padding:"16px",
              }}>
            <Typography variant="body1" sx={{fontSize:"22px",fontWeight:"700"}}>
              John Smith
            </Typography><br/>
            <Typography variant="body2" sx={{fontSize:"17px",fontWeight:"400"}}>
            eros lectus auctor lorem, vitae sagittis sapien mauris interdum ex. 
            </Typography>   
            </Card>
          <br/>
            <Card sx={{ 
              width:'100%',
              border:"1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px", 
              padding:"16px",
              }}>
            <Typography variant="body1" sx={{fontSize:"22px",fontWeight:"700"}}>
              Regin Georgius
            </Typography><br/>
            <Typography variant="body2" sx={{fontSize:"17px",fontWeight:"400"}}>
            commodo felis ac, fringilla tortor. Nulla dui libero, dignissim et eros id, elementum rutrum risus
            </Typography>   
            </Card>
            <br/>
            <Card sx={{ 
              width:'100%',
              border:"1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "10px", 
              padding:"16px",
              }}>
              <FormatBoldOutlinedIcon/><FormatItalicOutlinedIcon/><FormatUnderlinedOutlinedIcon/>
              <hr/><br/>
              <Typography variant="body2" sx={{fontSize:"17px",fontWeight:"400"}}>
              commodo felis ac, fringilla tortor. Nulla dui libero, dignissim et eros id, elementum rutrum risus
              </Typography> 
            </Card>
           </Grid>
            <Grid item xs={10} md={4} lg={3} >
              <Card 
              sx={{ 
                width:'100%',
                border:"1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "10px", 
                padding:"16px",
                }}>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
              Created by
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
              Regin Georgius Sembiring
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
              Assignee
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
              tono36
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
              Status
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
              Done
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
              Client
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
              ITB
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
              Priority
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
              Critical
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
              Estimated Resolution Time
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
              09:50 - 25/06/2022
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
            Last Updated
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
            07:38 - 21/06/2022
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
            Ticket Start
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
            07:38 - 21/06/2022
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
            Ticket Finished
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
            09:38 - 25/06/2022
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
            Labels
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
            Kubernetes, Openstack
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
              Created by
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
              Regin Georgius Sembiring
            </Typography>  
            <hr/><br/>
            <Typography variant="body1" sx={{fontSize:"18px",fontWeight:"700"}}>
              Score
            </Typography>
            <Typography variant="body1" sx={{fontSize:"15px",fontWeight:"200"}}>
              5
            </Typography>  
            <hr/><br/>
              </Card>
            </Grid>
            </Grid>
            </Fragment>
         
    
  )
}

export default DetailTickets