import * as React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Fragment,useState } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Avatar from "@mui/material/Avatar";
import "./UserProfile.css";
import axios from "axios";

const UserProfile = () => {
 
  const [userProfile, setUserProfile] = useState([]);
   React.useEffect(() => {
     document.title = "User Profile";
     getUserProfileHandler();
   }, []);

  const getUserProfileHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/member/profile/",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setUserProfile(res.data.data);
      // console.log(userProfile);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };
  return (
    <Fragment>
      <h1>User Profile</h1>
      <Card
        sx={{
          minWidth: "100%",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          padding: "16px",
          // height:"100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} xl={6}>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tiny"
                alt=""
                className="itemImg"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8} xl={6}>
            <CardContent>
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>Fullname</div>
                <div style={{ paddingLeft: "15px" }}>{userProfile.name} </div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>Username</div>
                <div style={{ paddingLeft: "15px" }}>{userProfile.username}</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>Email</div>
                <div style={{ paddingLeft: "15px" }}>{userProfile.email}</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>Role</div>
                <div style={{ paddingLeft: "15px" }}>{userProfile.role}</div>
              </div>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      {/* USER PROFILE 1
          <Card sx={{ 
            minWidth: "100%",
            border:"1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "10px", 
            padding:"16px",
            // height:"100%",
            height:"500px",
            }}>

              <Grid container spacing={10}>
                <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{fontSize:"17px"}}>
                  Fullname
                  </Typography>
                  <TextField id="outlined-basic" variant="outlined"  size='small' 
                    sx={{
                      width:"100%", 
                      height:"35px",  
                      background:"#FFFFFF",
                      borderRadius: "7px"
                    }}/>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{fontSize:"17px"}}>
                  Username
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
              <br/><br/><br/>
              <Grid container spacing={10}>
                <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{fontSize:"17px"}}>
                  Email
                  </Typography>
                  <TextField id="outlined-basic" variant="outlined"  size='small' 
                    sx={{
                      width:"100%", 
                      height:"35px",  
                      background:"#FFFFFF",
                      borderRadius: "7px"
                    }}/>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{fontSize:"17px"}}>
                  Role
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
              <div style={{position:'fixed', bottom:'0', right:'0'}}> 
              <ArrowBackOutlinedIcon sx={{objectPosition: '25% 75%'}}/>
              </div>
          </Card>  */}
    </Fragment>
  );
};

export default UserProfile;
