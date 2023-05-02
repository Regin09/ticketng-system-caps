import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Container, styled, useTheme } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MuiToggleButton from '@mui/material/ToggleButton';
import { Link } from "react-router-dom";
import "./detailclient.css"

const DetailClient = () => {
  return (
    <Container>
      <Card
        sx={{
          minWidth: "100%",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          padding: "16px",
          // height:"100%",
        }}
      >
        <h1>DeltaSoftTech</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={6}>
            <CardContent>
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Name
                </div>
                :<div style={{ paddingLeft: "15px" }}>Regin Ganteng</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Code
                </div>
                :<div style={{ paddingLeft: "15px" }}>DST</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Regional
                </div>
                :<div style={{ paddingLeft: "15px" }}>Bekasi</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Address
                </div>
                :<div style={{ paddingLeft: "15px" }}>Jalan Cumi</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Phone
                </div>
                :<div style={{ paddingLeft: "15px" }}>081333333</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Email
                </div>{" "}
                :<div style={{ paddingLeft: "15px" }}>deltasoft@tech.com</div>
              </div>
            </CardContent>
          </Grid>

          <Grid item xs={12} md={6} xl={6}>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tiny"
                alt=""
                className="itemImg"
              />
            </div>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

export default DetailClient