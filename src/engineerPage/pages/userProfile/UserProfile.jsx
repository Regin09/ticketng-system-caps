import * as React from "react";
import { CircularProgress, Container } from "@mui/material";
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
import { Fragment, useState } from "react";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { deepOrange, green } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Avatar from "@mui/material/Avatar";
import "./UserProfile.css";
import axios from "axios";
import LogoDummy from "../../../assets/images/profilepic.png";

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
        url: `${process.env.REACT_APP_API_URL}/api/member/profile/`,
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
    <Container>
      <h1 style={{ fontWeight: 800 }}>User Profile</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "16px",
            width: "100%",
            height: "auto",
            minWidth: "300px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} xl={6}>
              <div
                style={{ display: "flex", height: "auto", marginRight: "50px" }}
              >
                <img
                  src={LogoDummy}
                  alt=""
                  className="itemImg"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={8} xl={6}>
              <CardContent>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      fontSize: "25px",
                    }}
                  >
                    Fullname
                  </div>
                  <div
                    style={{
                      paddingLeft: "15px",
                      fontSize: "25px",
                      fontWeight: 700,
                    }}
                  >
                    {userProfile.name}{" "}
                  </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      fontSize: "25px",
                    }}
                  >
                    Username
                  </div>
                  <div
                    style={{
                      paddingLeft: "15px",
                      fontSize: "25px",
                      fontWeight: 700,
                    }}
                  >
                    {userProfile.username}
                  </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      fontSize: "25px",
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      paddingLeft: "15px",
                      fontSize: "25px",
                      fontWeight: 700,
                    }}
                  >
                    {userProfile.email}
                  </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      fontSize: "25px",
                    }}
                  >
                    Role
                  </div>
                  <div
                    style={{
                      paddingLeft: "15px",
                      fontSize: "25px",
                      fontWeight: 700,
                    }}
                  >
                    {userProfile.role}
                  </div>
                </div>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </div>
    </Container>
  );
};

export default UserProfile;
