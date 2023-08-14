import * as React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Container, styled, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link, useParams } from "react-router-dom";
import "./detailclient.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import LogoDummy from "../../../../assets/images/profilepic.png";

const DetailClient = () => {
  const [clientDetails, setClientDetails] = React.useState([]);
  let { code } = useParams();
  React.useEffect(() => {
    document.title = "Detail Client Page";
    getDetailClient(code);
  }, []);

  const getDetailClient = async (code) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/api/member/client/${code}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res.data.data);
      setClientDetails(res.data.data[0]);
      console.log(clientDetails);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };
  if (clientDetails.length === 0) {
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

  const formattedPhoneNumber =
    clientDetails.phone.length === 9
      ? `0${clientDetails.phone}`
      : clientDetails.phone;

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
        <h1>{clientDetails.name}</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={6}>
            <CardContent>
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Name
                </div>
                :<div style={{ paddingLeft: "15px" }}>{clientDetails.name}</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Code
                </div>
                :<div style={{ paddingLeft: "15px" }}>{clientDetails.code}</div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Regional
                </div>
                :
                <div style={{ paddingLeft: "15px" }}>
                  {clientDetails.regional}
                </div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Address
                </div>
                :
                <div style={{ paddingLeft: "15px" }}>
                  {clientDetails.address}
                </div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Phone
                </div>
                :
                <div style={{ paddingLeft: "15px" }}>
                  {formattedPhoneNumber}
                </div>
              </div>
              <br />
              <div style={{ display: "flex" }}>
                <div style={{ width: "100%", maxWidth: "200px" }}>
                  Client Email
                </div>{" "}
                :
                <div style={{ paddingLeft: "15px" }}>{clientDetails.email}</div>
              </div>
            </CardContent>
          </Grid>

          <Grid item xs={12} md={6} xl={6}>
            <div className="item">
              <img
                src={LogoDummy}
                alt=""
                className="itemImg"
              />
            </div>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default DetailClient;
