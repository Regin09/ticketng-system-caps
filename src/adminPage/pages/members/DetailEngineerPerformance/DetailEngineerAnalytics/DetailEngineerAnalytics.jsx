import React, { useEffect, useState, Fragment } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Container, TextField } from "@mui/material";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DetailEngineerAnalytics = () => {
  const [engineerAnalytics, setEngineerAnalytics] = useState([]);
  let { username } = useParams();
  const [nameUsers, setNameUsers] = useState([]);
  const [detailEngineer, setDetailEngineer] = useState([]);
  const [chartData, setChartData] = useState(null);

  React.useEffect(() => {
    document.title = "Client Analytics";
    getEngineerAnalyticsHandler(username);
    getEngineerPerformance(username);
  }, []);

  useEffect(() => {
    createChartData();
  }, [detailEngineer]);

  function formatTime(minutes) {
    const years = Math.floor(minutes / (365 * 24 * 60));
    const months = Math.floor((minutes % (365 * 24 * 60)) / (30 * 24 * 60));
    const weeks = Math.floor((minutes % (30 * 24 * 60)) / (7 * 24 * 60));
    const days = Math.floor((minutes % (7 * 24 * 60)) / (24 * 60));
    const hours = Math.floor((minutes % (24 * 60)) / 60);
   const remainingMinutes = (minutes % 60).toFixed(2); 

    let formattedTime = "";

    if (years > 0) {
      formattedTime += `${years}y `;
    }
    if (months > 0) {
      formattedTime += `${months}mo `;
    }
    if (weeks > 0) {
      formattedTime += `${weeks}w `;
    }
    if (days > 0) {
      formattedTime += `${days}d `;
    }
    if (hours > 0) {
      formattedTime += `${hours}h `;
    }
    if (remainingMinutes > 0) {
      const roundedMinutes = remainingMinutes.includes(".")
        ? Math.ceil(remainingMinutes).toString()
        : remainingMinutes;
      formattedTime += `${roundedMinutes}m`;
    }

    return formattedTime;
  }

  const createChartData = () => {
    // Menghitung jumlah orang yang memberikan setiap nilai (1, 2, 3, 4, 5)
    const scoreCount = [0, 0, 0, 0, 0];
    detailEngineer.forEach((item) => {
      const score = item.score;
      if (score >= 1 && score <= 5) {
        scoreCount[score - 1]++;
      }
    });

    const newChartData = {
      labels: scoreCount.map((count, index) => `Score ${index + 1}`),
      datasets: [
        {
          data: scoreCount,
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#CCEEBC",
            // Tambahkan warna sesuai jumlah elemen array
          ],
        },
      ],
    };

    setChartData(newChartData);
  };

  const getEngineerAnalyticsHandler = async (username) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/api/analytics/engineer/${username}`,
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

  const getEngineerPerformance = async (username) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/performance/engineer/${username}`,
      });
      setDetailEngineer(res.data.data);
      setNameUsers(res.data);
      console.log(res.data.data);
      console.log(detailEngineer);
      createChartData();
    } catch (error) {
      console.log(error);
    }
  };

  // ...
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
      },
    },
  };
  if (engineerAnalytics.length === 0) {
    return (
      <Card
        sx={{
          width: "100%",
          height: "200px",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "35px",
            fontWeight: 1000,
          }}
        >
          This engineer hasn't finished one ticket yet
        </Typography>
      </Card>
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
              Average Processing Time
            </Typography>
            <TextField
              disabled
              id="outlined-disabled"
              variant="outlined"
              size="small"
              value={formatTime(engineerAnalytics.averageProcessingTime)}
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
        <div
          style={{
            width: "300px",
            height: "300px",
            margin: "0 auto",

            position: "relative",
          }}
        >
          <Typography
            variant="caption"
            style={{
              marginTop: "20px",
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              width: "100%",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Chart of Analytics
          </Typography>
          <Doughnut data={chartData} options={chartOptions} />
        </div>
      </Card>
    </Container>
  );
};

export default DetailEngineerAnalytics;
