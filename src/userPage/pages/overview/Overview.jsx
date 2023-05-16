import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Container from '@mui/system/Container'
import { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./overview.css";

const Overview = () => {
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
        </Grid>
        {/* <Grid container spacing={5}>
          <Grid item xs={4} md={4} xl={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">In-Progress Tickets </h1>
              <h3 style={{ color: "#00FF57" }}>78</h3>
            </div>
          </Grid>
          <Grid item xs={4} md={4} xl={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Done Tickets</h1>
              <h3 style={{ color: "#FF0000" }}>20</h3>
            </div>
          </Grid>
          <Grid item xs={4} md={4} xl={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">To-Do Tickets</h1>
              <h3 style={{ color: "#FF8A00" }}>10</h3>
            </div>
          </Grid>
          <Grid item xs={4} md={4} xl={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Total Clients</h1>
              <h3>7</h3>
            </div>
          </Grid>
          <Grid item md={4} xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Total Admin</h1>
              <h3>2</h3>
            </div>
          </Grid>
          <Grid item md={4} xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Total Engineer</h1>
              <h3>20</h3>
            </div>
          </Grid>
          <Grid item md={4} xl={4} sm={4} className="centerGrid">
            <div className="card-example">
              <h1 className="h1-pad">Total User</h1>
              <h3>8</h3>
            </div>
          </Grid>
        </Grid> */}
      </Container>
    );
}
export default Overview


    