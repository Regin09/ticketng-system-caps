import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {styled, useTheme } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MuiToggleButton from '@mui/material/ToggleButton';
import { Link } from "react-router-dom";

const ClientAnalysis = () => {
  return (
    <React.Fragment>
    <h1>Client Analysis</h1>
    <br/>
    <Grid container spacing={10}>
      <Grid item xs={12} md={4} xl={4}>
      <Card sx={{ 
          width: "100%", 
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          }}>
          <CardContent>
            <Typography variant="h4" component="div" 
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
              <div style={{width:'100%',maxWidth:'190px'}}>
                Client Code
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               DST
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Total Users
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               5
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Total Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Selected Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                To-Do Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               5
              </div>
            </div>
            <br /><div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                In-Progress Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               6
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Done Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
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
            <Typography variant="h4" component="div" 
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
              <div style={{width:'100%',maxWidth:'190px'}}>
                Client Code
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               DST
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Total Users
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               5
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Total Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Selected Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                To-Do Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               5
              </div>
            </div>
            <br /><div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                In-Progress Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               6
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Done Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
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
            <Typography variant="h4" component="div" 
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
              <div style={{width:'100%',maxWidth:'190px'}}>
                Client Code
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               DST
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Total Users
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               5
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Total Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Selected Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                To-Do Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               5
              </div>
            </div>
            <br /><div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                In-Progress Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               6
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Done Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
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
            <Typography variant="h4" component="div" 
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
              <div style={{width:'100%',maxWidth:'190px'}}>
                Client Code
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               DST
              </div>
            </div>
            <br/>
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Total Users
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               5
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Total Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Selected Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                To-Do Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               5
              </div>
            </div>
            <br /><div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                In-Progress Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               6
              </div>
            </div>
            <br />
            <div style={{display:'flex'}}>
              <div style={{width:'100%',maxWidth:'190px'}}>
                Done Ticket
              </div> : 
              <div style={{paddingLeft:'70px'}}>
               20
              </div>
            </div>
            <br />
          </CardContent>
        </Card> 
      </Grid>
      </Grid>
      </React.Fragment>
  )
}

export default ClientAnalysis