import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {styled, useTheme } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import "./clients.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MuiToggleButton from '@mui/material/ToggleButton';
import { Link } from "react-router-dom";

const Clients = () => {
  const theme=useTheme()

  React.useEffect(() => {
    document.title = 'Menu Klien';
  }, []);

  const ToggleButton = styled(MuiToggleButton)({
    '&.Mui-selected, &.Mui-selected:hover': {
      color: '#1F305C !important',
      backgroundColor: 'rgba(31, 48, 92, 0.25)',
    },
  });
  return (
  <React.Fragment>
    <div style={{width:'100%',paddingBottom:'15px',maxWidth:'500px'}}>
    <Grid container spacing={3} >
      <Grid item xs={12} md={6} xl={6}>
      <Link to="createClient" style={{textDecoration:"none",color:"black"}}>
          <Button 
            variant="contained"
            sx={{
              color:"black",
              background:"#FFFFFF",
              width:"100%",
              "&:hover":{
                backgroundColor:"white"
              }
              }}>
            <AddCircleOutlineOutlinedIcon
            sx={{
              display: "flex",
              alignItems: "center",
              paddingRight: "2.5px",
              cursor: "pointer",
              marginTop: "3.4px",
              marginBottom: "5px",
              }}/>
            Create Client
          </Button></Link>
          </Grid>
          
          <Grid item xs={12} md={6} xl={6} >
          <Link to="ClientAnalysis" style={{textDecoration:"none",color:"black"}}>
          <Button 
            variant="contained" 
            sx={{
              color:"black",
              background:"#FFFFFF",
              width:"100%",
              "&:hover":{
                backgroundColor:"white"

              }
              }}>
            <AnalyticsOutlinedIcon
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "2px",
              cursor: "pointer",
              marginTop: "3.4px",
              marginBottom: "5px",
              }}/>
            Client Analytics
          </Button>
          </Link>
          </Grid>
      </Grid>
      
      </div>
      <Grid container spacing={3}>
      <Grid item xs={12} md={4} xl={4}>
      <Card sx={{ 
          width: "100%", 
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
          <CardContent>
            <Typography variant="h5" component="div" 
            sx={{
              display:'flex',
              justifyContent:'center',
            }}>
              DeltaSoft Tech
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <hr/>
            </Typography>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Code
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               DST
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Phone
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               0812222
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Email
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               deltasoft@tech.com
              </div>
            </div>
            <br />
          <div style={{width:'100%',display:'flex'}}>
          <Link to="editClient" style={{textDecoration:"none",color:"black"}}>
            <Button size="small" sx={{display:'flex',color:'green'}}>
            <BorderColorOutlinedIcon/>
           </Button> 
           </Link>
            <Button size="small" sx={{width:"10px",color:'red'}}>
            <DeleteOutlineOutlinedIcon/>
            </Button>
          </div>
          </CardContent>
        </Card> 
      </Grid>
      <Grid item xs={12} md={4} xl={4}>
      <Card sx={{ 
          width: "100%", 
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
          <CardContent>
            <Typography variant="h5" component="div" 
            sx={{
              display:'flex',
              justifyContent:'center',
            }}>
              DeltaSoft Tech
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <hr/>
            </Typography>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Code
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               DST
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Phone
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               0812222
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Email
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               deltasoft@tech.com
              </div>
            </div>
            <br />
          <div style={{width:'100%',display:'flex'}}>
            <Button size="small" sx={{display:'flex'}}>
            <BorderColorOutlinedIcon/>
           </Button> 
            <Button size="small" sx={{width:"10px"}}>
            <DeleteOutlineOutlinedIcon/>
            </Button>
          </div>
          </CardContent>
        </Card> 
      </Grid>
      <Grid item xs={12} md={4} xl={4}>
      <Card sx={{ 
          width: "100%", 
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
          <CardContent>
            <Typography variant="h5" component="div" 
            sx={{
              display:'flex',
              justifyContent:'center',
            }}>
              DeltaSoft Tech
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              <hr/>
            </Typography>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Code
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               DST
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Phone
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               0812222
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'140px'}}>
                Client Email
              </div> : 
              <div style={{paddingLeft:'15px'}}>
               deltasoft@tech.com
              </div>
            </div>
            <br />
          <div style={{width:'100%',display:'flex'}}>
            <Button size="small" sx={{display:'flex',color:'green'}}>
            <BorderColorOutlinedIcon/>
           </Button> 
            <Button size="small" sx={{width:"10px"}}>
            <DeleteOutlineOutlinedIcon/>
            </Button>
          </div>
          </CardContent>
        </Card> 
      </Grid>
      </Grid>
      </React.Fragment>
  )
}


export default Clients