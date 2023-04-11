import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import "./clients.css";

const Clients = () => {
  return (
  <Container>
    <Grid item md={12} xl={12} sm={12} className='togle-clients'>
        <Stack spacing={2} direction="row">
          <Button 
            variant="contained"
            sx={{
              color:"black",
              background:"#FFFFFF",
              height:"36px",
              width:"170px",
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
          </Button>
          <Button 
            variant="contained" 
            sx={{
              color:"black",
              background:"#FFFFFF",
              height:"36px",
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
        </Stack>
      </Grid>
      <Grid item md={4} xl={4} sm={4}></Grid>
    </Container>
  )
}

export default Clients