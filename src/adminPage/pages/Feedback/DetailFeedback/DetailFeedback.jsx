import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Link, useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import CircularProgress from "@mui/material/CircularProgress";

const DetailFeedback = () => {
  const [feedbackDetails, setFeedbackDetails] = React.useState([]);
  let { id } = useParams();
  React.useEffect(() => {
    document.title = "Detail Feedback Page";
    getDetailFeedback(id);
  }, []);

  const getDetailFeedback = async (id) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/feedback/detail/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      // setFeedbackDetails(res.data.data);
      // console.log(feedbackDetails);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };
  // if (feedbackDetails.length === 0) {
  //    return <div>Loading....</div>;
  // }
  return (
    <Container>
    <h1>Detail Feedback</h1>
    
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
          <TextField id="outlined-basic" variant="outlined"  size='small' defaultValue="1"
                sx={{
                  width:"100%", 
                  height:"35px",  
                  background:"#FFFFFF",
                  borderRadius: "7px",
                 }}/>
      </Grid>
      <Grid item xs={12} md={4} xl={4}>
               <Typography variant="body2" sx={{fontSize:"17px"}}>
               Sender Username
               </Typography>
               <TextField id="outlined-basic" variant="outlined" size='small' defaultValue="jim24" 
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
          <TextField id="outlined-basic" variant="outlined"  size='small'  defaultValue='Jimmy Haryono'
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
          <TextField id="outlined-basic" variant="outlined" size='small'  defaultValue='DST'
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
          <TextField id="outlined-basic" variant="outlined" size='small'  defaultValue='adikuncoro'
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
            defaultValue='adikuncoro'
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
          defaultValue='Checkin yuk'
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
  )
}

export default DetailFeedback