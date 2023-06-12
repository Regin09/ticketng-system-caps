import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container'
import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./overview.css";
import axios from 'axios';

const Overview = () => {
  const [totalAdmins, setTotalAdmins] = useState([]);
  const [totalEngineer, setTotalEngineer] = useState([]);
  const [totalUser, setTotalUser] = useState([]);
  const [totalClient, setTotalClient] = useState([]);

  React.useEffect(() => {
    document.title = "Overview";
    getAdminHandler();
    getUserHandler();
    getEngineerHandler();
    getClientHandler();
  }, []);

  const getAdminHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/analytics/member/admin",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setTotalAdmins(res.data.totalUser);
      console.log(totalAdmins);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };

  const getEngineerHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/analytics/member/engineer",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setTotalEngineer(res.data.totalUser);
      console.log(totalEngineer);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };

  const getUserHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/analytics/member/user",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setTotalUser(res.data.totalUser);
      console.log(totalUser);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };

  const getClientHandler = async () => {
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
      setTotalClient(res.data.totalClient);
      console.log(totalClient);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };
    return (
      <Container>
        <Grid container spacing={5}>
          <Grid item md={4} xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">In-Progress Tickets </h1>
              <h3 style={{ color: "#00FF57" }}>78</h3>
            </div>
          </Grid>
          <Grid item md={4} xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Done Tickets</h1>
              <h3 style={{ color: "#FF0000" }}>20</h3>
            </div>
          </Grid>
          <Grid item md={4} xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">To-Do Tickets</h1>
              <h3 style={{ color: "#FF8A00" }}>10</h3>
            </div>
          </Grid>
          <Grid item md={4} xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Total Clients</h1>
              <h3>{totalClient}</h3>
            </div>
          </Grid>
          {/* {totalAdmins.map((totalAdmin) => ( */}
          {/* ))} */}
          <Grid item md xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Total Admin</h1>
              <h3>{totalAdmins}</h3>
            </div>
          </Grid>
          <Grid item md={4} xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Total Engineer</h1>
              <h3>{totalEngineer}</h3>
            </div>
          </Grid>
          <Grid item md={12} xl={12} sm={12} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Total User</h1>
              <h3>{totalUser}</h3>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
}
export default Overview


    