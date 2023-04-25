import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const DetailFeedback = () => {
  return (
    <Container>
    <h2 style={{paddingBottom:"15px"}}>Create Ticket</h2>
    
      <Card sx={{ 
        width: "100%",
        border:"1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "10px", 
        padding:"16px",
        }}>
      <div>
      <Grid container spacing={2}>
      <Grid item xs={12} md={4} xl={4}> 
          <Typography variant="body2" sx={{fontSize:"17px"}}>
            ID
          </Typography>
          <TextField id="outlined-basic" variant="outlined"  size='small' 
                sx={{
                  width:"100%", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
      </Grid>
      <Grid item xs={12} md={4} xl={4}>
               <Typography variant="body2" sx={{fontSize:"17px"}}>
               Sender Username
               </Typography>
               <TextField id="outlined-basic" variant="outlined" size='small' 
                sx={{
                  width:"100%", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px"
                 }}/>
      </Grid>
      <Grid item xs={12} md={4} xl={4}>
          <Typography variant="body2" sx={{fontSize:"17px"}}>
          Sender Name
          </Typography>
          <TextField id="outlined-basic" variant="outlined"  size='small' 
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
      <Grid item xs={12} md={4} xl={4}>
          <Typography variant="body2" sx={{fontSize:"17px"}}>
            Sender Client
          </Typography>
          <TextField id="outlined-basic" variant="outlined" size='small'  
            sx={{
              width:"100%", 
              height:"35px",  
              background:"#FFFFFF",
              borderRadius: "7px",
             }}/>
      </Grid>
      <Grid item xs={12} md={4} xl={4}>
          <Typography variant="body2" sx={{fontSize:"17px"}}>
            Engineer Username
          </Typography>
          <TextField id="outlined-basic" variant="outlined" size='small'  
            sx={{
              width:"100%", 
              height:"35px",  
              background:"#FFFFFF",
              borderRadius: "7px",
             }}/>
      </Grid>
      <Grid item xs={12} md={4} xl={4}>
          <Typography variant="body2" sx={{fontSize:"17px"}}>
             Engineer Name
          </Typography>
          <TextField
            id="outlined-basic"
            size='small'
            variant='outlined'
            sx={{width:'100%'}}
          >
          </TextField>
      </Grid>
      </Grid>
      <br/>
      <div style={{width:'100%'}}>
        <Typography variant="body2" sx={{fontSize:"17px"}}>
          Description
          <br />
        </Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={10}
          sx={{
            width:"100%", 
            height:"100%",  
            background:"#FFFFFF",
            borderRadius: "7px",
            
          }}
        /> 
        </div>
      </Card>
</Container>
    // <Container>
    //     <h2>User Feedback</h2>
    //       <Card sx={{ 
    //         minWidth: "100%",
    //         border:"1px solid rgba(0, 0, 0, 0.2)",
    //         borderRadius: "10px", 
    //         padding:"16px",
    //         }}>
    //       <div>
    //       <Grid container spacing={2}>
    //       <Grid item md={12} xl={6} sm={3}> 
    //           <Typography variant="body2" sx={{fontSize:"17px"}}>
    //           ID
    //           </Typography>
    //           <TextField id="outlined-basic" variant="outlined"  size='small' 
    //             sx={{
    //               width:"100%", 
    //               height:"35px",  
    //               background:"#FFFFFF",
    //               borderRadius: "7px"
    //              }}/>
    //       </Grid>
    //       <Grid item md={12} xl={6} sm={3}> 
    //           <Typography variant="body2" sx={{fontSize:"17px"}}>
    //           Sender Username
    //           </Typography>
    //           <TextField id="outlined-basic" variant="outlined" size='small' 
    //             sx={{
    //               width:"100%", 
    //               height:"35px",  
    //               background:"#FFFFFF",
    //               borderRadius: "7px"
    //              }}/>
    //       </Grid>
    //       <Grid item md={12} xl={6} sm={3}> 
    //           <Typography variant="body2" sx={{fontSize:"17px"}}>
    //             Sender Name
    //           </Typography>
    //           <TextField id="outlined-basic" variant="outlined" size='small' 
    //             sx={{
    //               width:"100%", 
    //               background:"#FFFFFF",
    //              }}/>
    //       </Grid>
    //      </Grid>
    //      </div>
    //       <br/>
    //       <div>
    //       <Grid container spacing={3}>
    //       <Grid item md={12} xl={6} sm={3}> 
    //           <Typography variant="body2" sx={{fontSize:"17px"}}>
    //           Sender Client
    //           </Typography>
    //           <TextField id="outlined-basic" variant="outlined"  size='small' 
    //             sx={{
    //               width:"100%", 
                  
    //              }}/>
    //       </Grid>
    //       <Grid item md={12} xl={6} sm={3}> 
    //           <Typography variant="body2" sx={{fontSize:"17px"}}>
    //              Engineer Username
    //           </Typography>
    //           <TextField id="outlined-basic" variant="outlined" size='small' 
    //             sx={{
    //               width:"100%", 
                 
    //              }}/>
    //       </Grid>
    //       <Grid item md={12} xl={6} sm={3}> 
    //           <Typography variant="body2" sx={{fontSize:"17px"}}>
    //             Engineer Name
    //           </Typography>
    //           <TextField id="outlined-basic" variant="outlined" size='small' 
    //             sx={{
    //               width:"100%", 
                 
    //              }}/>
    //       </Grid>
    //       </Grid>
    //       </div>
    //       <br/>
    //       <div>
    //       <Grid item md={12} xl={6} sm={3}>
    //         <br/>
    //         <Typography variant="body2" sx={{fontSize:"17px"}}>
    //           Description
    //           <br />
    //         </Typography>
    //         <TextField
    //           id="outlined-multiline-static"
    //           multiline
    //           rows={12}
    //           sx={{
    //             width:"100%", 
    //             height:"5px",  
    //             background:"#FFFFFF",
    //             borderRadius: "7px"
    //           }}
    //         />
    //       </Grid>
    //       </div>
    //       </Card>
    
      
    // </Container>
  )
}

export default DetailFeedback