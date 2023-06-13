import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const ClientAnalysis = () => {
  const [clientAnalytics, setClientAnalytics] = useState([]);

  React.useEffect(() => {
    document.title = "Client Analytics";
    getClientAnalyticsHandler();
  }, []);

  const getClientAnalyticsHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/analytics/client",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setClientAnalytics(res.data.clients);
      console.log(clientAnalytics);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };
  if (clientAnalytics.length === 0) {
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
    <React.Fragment>
      <h1>Client Analytics</h1>
      <br />
      <Grid container spacing={10}>
        {clientAnalytics.map((analytics, index) => (
          <Grid item xs={12} md={4} xl={4} key={index + 1}>
            <Card
              sx={{
                width: "100%",
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {analytics.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <hr />
                </Typography>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "190px" }}>
                    Client Code
                  </div>{" "}
                  :<div style={{ paddingLeft: "70px" }}>{analytics.code}</div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "190px" }}>
                    Total Users
                  </div>{" "}
                  :
                  <div style={{ paddingLeft: "70px" }}>
                    {analytics.totalUser}
                  </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "190px" }}>
                    Total Ticket
                  </div>{" "}
                  :
                  <div style={{ paddingLeft: "70px" }}>
                    {analytics.totalTicket}
                  </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "190px" }}>
                    Selected Ticket
                  </div>{" "}
                  :
                  <div style={{ paddingLeft: "70px" }}>
                    {analytics.totalSelectedTicket}
                  </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "190px" }}>
                    To-Do Ticket
                  </div>{" "}
                  :
                  <div style={{ paddingLeft: "70px" }}>
                    {analytics.totalToDoTicket}
                  </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "190px" }}>
                    In-Progress Ticket
                  </div>{" "}
                  :
                  <div style={{ paddingLeft: "70px" }}>
                    {analytics.totalInProgressTicket}
                  </div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "190px" }}>
                    Done Ticket
                  </div>{" "}
                  :
                  <div style={{ paddingLeft: "70px" }}>
                    {analytics.totalDoneTicket}
                  </div>
                </div>
                <br />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default ClientAnalysis;
