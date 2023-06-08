import React, { useEffect, useState, Fragment } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Container, TextField } from "@mui/material";

const DetailEngineerAnalytics = () => {
  const [engineerAnalytics, setEngineerAnalytics] = useState([]);
  let { username } = useParams();
  React.useEffect(() => {
    document.title = "Client Analytics";
    getEngineerAnalyticsHandler(username);
  }, []);

  const getEngineerAnalyticsHandler = async (username) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://stg.capstone.adaptivenetworklab.org/api/analytics/engineer/${username}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setEngineerAnalytics(res.data);
      console.log(engineerAnalytics);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };
  if (engineerAnalytics.length === 0) {
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
      <h1>Analytics of {engineerAnalytics.name}</h1>
      <Card
        sx={{
          minWidth: "100%",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          padding: "16px",
          // height:"100%",
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} xl={6}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Username
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              variant="outlined"
              value={engineerAnalytics.name}
              size="small"
              sx={{
                width: "100%",
                background: "#FFFFFF",
                borderRadius: "7px",
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                }, 
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Average Processing Time (minutes)
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              variant="outlined"
              size="small"
              value={engineerAnalytics.averageProcessingTime}
              sx={{
                width: "100%",
                background: "#FFFFFF",
                borderRadius: "7px",
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                },
              }}
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} xl={6}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Average Score
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              variant="outlined"
              value={engineerAnalytics.averageScore}
              size="small"
              sx={{
                width: "100%",
                background: "#FFFFFF",
                borderRadius: "7px",
                color: "rgba(0, 0, 0, 0.6)",
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Total Tickets
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              variant="outlined"
              size="small"
              value={engineerAnalytics.totalTicket}
              sx={{
                width: "100%",
                background: "#FFFFFF",
                borderRadius: "7px",
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                },
              }}
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
      </Card>
    </Container>
  );
};

export default DetailEngineerAnalytics;
