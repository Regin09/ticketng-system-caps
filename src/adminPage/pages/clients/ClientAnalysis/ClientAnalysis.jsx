import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";

const ClientAnalysis = () => {
  const [clientAnalytics, setClientAnalytics] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [clientsPerPage] = useState(6);

  React.useEffect(() => {
    document.title = "Client Analytics";
    getClientAnalyticsHandler();
  }, []);

  const getClientAnalyticsHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/api/analytics/client??page=${currentPage}`,
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

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clientAnalytics.slice(
    indexOfFirstClient,
    indexOfLastClient
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getClientAnalyticsHandler();
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
      <Grid container spacing={7} sx={{ mb: 10 }}>
        {currentClients.map((analytics, index) => (
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        {clientAnalytics.length > clientsPerPage && (
          <ClientPagination
            clientsPerPage={clientsPerPage}
            totalClients={clientAnalytics.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </React.Fragment>
  );
};
const ClientPagination = ({
  clientsPerPage,
  totalClients,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
    <nav
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        zIndex: "1000",
        background: "white",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        padding: "10px 0",
       
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {pageNumbers.map((number) => (
          <li
            key={number}
            style={{
              margin: "0 5px",
            }}
          >
            <Button
              variant={currentPage === number ? "contained" : "outlined"}
              onClick={() => paginate(number)}
              sx={{ minWidth: "30px", padding: "6px" }}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ClientAnalysis;
