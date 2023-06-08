import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link, useParams } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const DetailFeedback = () => {
  const [feedbackDetails, setFeedbackDetails] = React.useState([]);

  let { id } = useParams();
  React.useEffect(() => {
    document.title = "Detail Feedback Page";
    getDetailFeedback(id);
  }, []);

  const getDetailFeedback = async (id) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/feedback/detail?id=${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res.data);
      setFeedbackDetails(res.data.feedback[0]);
      console.log(feedbackDetails);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };

  if (feedbackDetails.length === 0) {
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
      <h1>Detail Feedback</h1>
      <Card
        sx={{
          width: "100%",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          padding: "16px",
        }}
      >
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} xl={4}>
              <Typography variant="body2" sx={{ fontSize: "17px" }}>
                Sender Username
              </Typography>
              <TextField
                disabled
                id="outlined-disabled"
                variant="outlined"
                size="small"
                value={feedbackDetails.senderUsername}
                sx={{
                  width: "100%",
                  height: "35px",
                  background: "#FFFFFF",
                  borderRadius: "7px",
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Typography variant="body2" sx={{ fontSize: "17px" }}>
                Sender Name
              </Typography>
              <TextField
                disabled
                id="outlined-disabled"
                variant="outlined"
                size="small"
                value={feedbackDetails.senderName}
                sx={{
                  width: "100%",
                  height: "35px",
                  background: "#FFFFFF",
                  borderRadius: "7px",
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4} xl={4}>
              <Typography variant="body2" sx={{ fontSize: "17px" }}>
                Sender Client
              </Typography>
              <TextField
                disabled
                id="outlined-disabled"
                variant="outlined"
                size="small"
                value={feedbackDetails.senderClientCode}
                sx={{
                  width: "100%",
                  height: "35px",
                  background: "#FFFFFF",
                  borderRadius: "7px",
                  "& .MuiInputBase-input.Mui-disabled": {
                    WebkitTextFillColor: "#000000",
                  },
                }}
              />
            </Grid>
          </Grid>
        </div>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} xl={4}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Engineer Username
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              variant="outlined"
              size="small"
              value={feedbackDetails.receiverUsername}
              sx={{
                width: "100%",
                height: "35px",
                background: "#FFFFFF",
                borderRadius: "7px",
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Engineer Name
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              size="small"
              variant="outlined"
              value={feedbackDetails.receiverName}
              sx={{
                width: "100%",
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "#000000",
                },
              }}
            ></TextField>
          </Grid>
        </Grid>
        <br />
        <div style={{ width: "100%" }}>
          <Typography variant="body2" sx={{ fontSize: "17px" }}>
            Description
            <br />
          </Typography>
          <TextField
            disabled
            id="outlined-multiline-static-disabled"
            multiline
            rows={10}
            value={feedbackDetails.message}
            sx={{
              width: "100%",
              height: "100%",
              background: "#FFFFFF",
              borderRadius: "7px",
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
              },
            }}
          />
        </div>
      </Card>
    </Container>
  );
};

export default DetailFeedback;
