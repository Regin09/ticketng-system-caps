import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/system/Container";
import { Fragment } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./overview.css";
import axios from "axios";

const Overview = () => {
  const [totalAdmins, setTotalAdmins] = useState([]);
  const [totalEngineer, setTotalEngineer] = useState([]);
  const [totalUser, setTotalUser] = useState([]);
  const [totalClient, setTotalClient] = useState([]);
  const [ticketData, setTicketData] = React.useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [toDoCount, setToDoCount] = useState(0);
  const [needApproval, setNeedApproval] = useState(0);
  const [delivered, setDelivered] = useState(0);

  React.useEffect(() => {
    document.title = "Overview Page";
    getAdminHandler();
    getUserHandler();
    getEngineerHandler();
    getClientHandler();
    getAllTickets();
  }, []);

  const getAllTickets = async () => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/all`,
      });

      console.log(res.data);
      setTicketData(res.data.data);
      const needApproval = res.data.data.filter(
        (data) => data.status === "Need-Approval"
      ).length;
      const delivered = res.data.data.filter(
        (data) => data.status === "Delivered"
      ).length;
      const inProgressCount = res.data.data.filter(
        (data) => data.status === "In-Progress"
      ).length;
      const doneCount = res.data.data.filter(
        (data) => data.status === "Done"
      ).length;
      const toDoCount = res.data.data.filter(
        (data) => data.status === "To-Do"
      ).length;

      setInProgressCount(inProgressCount);
      setDoneCount(doneCount);
      setToDoCount(toDoCount);
      setDelivered(delivered);
      setNeedApproval(needApproval);
    } catch (error) {
      console.log(error);
    }
  };

  const getAdminHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/api/analytics/member/admin`,
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
        url: `${process.env.REACT_APP_API_URL}/api/analytics/member/engineer`,
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
        url: `${process.env.REACT_APP_API_URL}/api/analytics/member/user`,
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
        url: `${process.env.REACT_APP_API_URL}/api/analytics/client`,
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
            <h1 className="h1-pad">Need Approval </h1>
            <h3 style={{ color: "#1B8500" }}>{needApproval}</h3>
          </div>
        </Grid>
        <Grid item md={4} xl={4} sm={4} className="centerGrid">
          <div className="card-example">
            <h1 className="h1-pad">In-Progress Tickets </h1>
            <h3 style={{ color: "#1B8500" }}>{inProgressCount}</h3>
          </div>
        </Grid>
        <Grid item md={4} xl={4} sm={4} className="centerGrid">
          <div className="card-example">
            <h1 className="h1-pad">Delivered </h1>
            <h3 style={{ color: "#1B8500" }}>{delivered}</h3>
          </div>
        </Grid>
        <Grid item md={4} xl={4} sm={4} className="centerGrid">
          <div className="card-example">
            <h1 className="h1-pad">Done Tickets</h1>
            <h3 style={{ color: "red" }}>{doneCount}</h3>
          </div>
        </Grid>
        <Grid item md={4} xl={4} sm={4} className="centerGrid">
          <div className="card-example">
            <h1 className="h1-pad">To-Do Tickets</h1>
            <h3 style={{ color: "#FF8A00" }}>{toDoCount}</h3>
          </div>
        </Grid>
        <Grid item md={4} xl={4} sm={4} className="centerGrid">
          <div className="card-example">
            <h1 className="h1-pad">Total Clients</h1>
            <h3 style={{ color: "#22A699" }}>{totalClient}</h3>
          </div>
        </Grid>
        <Grid item md xl={4} sm={4} className="centerGrid">
          <div className="card-example">
            <h1 className="h1-pad">Total Admin</h1>
            <h3 style={{ color: "#00DFA2" }}>{totalAdmins}</h3>
          </div>
        </Grid>
        <Grid item md={4} xl={4} sm={4} className="centerGrid">
          <div className="card-example">
            <h1 className="h1-pad">Total Engineer</h1>
            <h3 style={{ color: "#A3D2CA" }}>{totalEngineer}</h3>
          </div>
        </Grid>
        <Grid item md={4} xl={4} sm={4} className="centerGrid">
          <div className="card-example">
            <h1 className="h1-pad">Total User</h1>
            <h3 style={{ color: "#68B984" }}>{totalUser}</h3>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Overview;
