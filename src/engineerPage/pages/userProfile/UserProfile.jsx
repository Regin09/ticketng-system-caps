import * as React from 'react';
import { CircularProgress, Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Fragment } from 'react';
import "./UserProfile.css"
import axios from 'axios';

const UserProfile = () => {
   const [userProfile, setUserProfile] = React.useState([]);
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

   if (userProfile.length === 0) {
     return (
       <div
         style={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
           height: "100vh",
         }}
       >
         <div
           style={{
             position: "relative",
             width: "50vh",
             height: "50vh",
           }}
         >
           <CircularProgress
             style={{
               position: "absolute",
               top: "26%",
               left: "45%",
               transform: "translate(-50%, -50%)",
               zIndex: 1,
             }}
             color="success"
           />
           <div
             style={{
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",

               animation: "rotate 2s linear infinite",
               zIndex: 0,
             }}
           ></div>
         </div>
       </div>
     );
   }
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
                <div style={{ paddingLeft: "15px" }}>
                  {userProfile.username}
                </div>
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
    </Fragment>
  );
}

export default UserProfile