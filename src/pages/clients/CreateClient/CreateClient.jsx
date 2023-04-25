import React, { Fragment } from 'react'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const CreateClient = () => {
  return (
    <Fragment>
      <h1>Create Client</h1>
        <Card sx={{ 
                width: "100%",
                border:"1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "10px", 
                padding:"16px",
                }}>
                <Grid container spacing={10}>
                  <Grid item xs={12} md={6} xl={6}> 
                    <Typography variant="body2" sx={{fontSize:"17px"}}>
                      Client Name
                    </Typography>      
                    <TextField id="outlined-basic" variant="outlined" size='small' 
                      sx={{
                          width:"100%", 
                          height:"5px",  
                          background:"#FFFFFF",
                          borderRadius: "7px"
                      }}/>
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}> 
                    <Typography variant="body2" sx={{fontSize:"17px"}}>
                      Client Address
                    </Typography>      
                    <TextField id="outlined-basic" variant="outlined" size='small' 
                      sx={{
                          width:"100%", 
                          height:"5px",  
                          background:"#FFFFFF",
                          borderRadius: "7px"
                      }}/>
                    </Grid>
                    </Grid>
                    <br/><br/>
                    <Grid container spacing={10}>
                      <Grid item xs={12} md={6} xl={6}> 
                      <Typography variant="body2" sx={{fontSize:"17px"}}>
                        Client Code
                      </Typography>      
                      <TextField id="outlined-basic" variant="outlined" size='small' 
                      sx={{
                          width:"100%", 
                          height:"5px",  
                          background:"#FFFFFF",
                          borderRadius: "7px"
                      }}/>
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}> 
                    <Typography variant="body2" sx={{fontSize:"17px"}}>
                    Client Email
                    </Typography>      
                    <TextField id="outlined-basic" variant="outlined" size='small' 
                      sx={{
                          width:"100%", 
                          height:"5px",  
                          background:"#FFFFFF",
                          borderRadius: "7px"
                      }}/>
                    </Grid>
                    </Grid>
                    <br/><br/>
                    <Grid container spacing={10}>
                      <Grid item xs={12} md={6} xl={6}> 
                      <Typography variant="body2" sx={{fontSize:"17px"}}>
                        Client Regional
                      </Typography>      
                      <TextField id="outlined-basic" variant="outlined" size='small' 
                      sx={{
                          width:"100%", 
                          height:"5px",  
                          background:"#FFFFFF",
                          borderRadius: "7px"
                      }}/>
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}> 
                    <Typography variant="body2" sx={{fontSize:"17px"}}>
                    Client Phone
                    </Typography>      
                    <TextField id="outlined-basic" variant="outlined" size='small' 
                      sx={{
                          width:"100%", 
                          height:"5px",  
                          background:"#FFFFFF",
                          borderRadius: "7px"
                      }}/>
                    </Grid>
                    </Grid>
                    <br/><br/>
                    <div style={{display:"flex",justifyContent:"flex-start",marginTop:"10px"}}> 
                    <Link to="/clients" style={{textDecoration:"none",color:"black"}}>
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
                          Create Client
                      </Button>
                      </Link>
                    </div>     
                    <br/>
        </Card>
    </Fragment>
  )
}

export default CreateClient