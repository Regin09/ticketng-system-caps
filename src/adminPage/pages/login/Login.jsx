import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import LogoLogin from "../../../assets/images/BtechForLogin.png";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, styled, useTheme } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import WarningIcon from "../../../assets/images/iconwarning.png";
import jwt_decode from "jwt-decode";


const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  background:
    "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
}));

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    background: "#FFFFFF",
    borderRadius: "30px !important",
    height: "auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  logo: {
    height: "300px",
    paddingLeft: "20px",
    maxWidth: "100%",
  },
});

function Login() {
  const [open, setOpen] = useState(false);
  const [showProgress, setShowProgress] = React.useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const classes = useStyles();

  React.useEffect(() => {
    document.title = "Login Admin";
  }, []);

  const navigate = useNavigate();
  const [formLoginAdmin, setFormLoginAdmin] = useState({
    name: "",
    password: "",
  });

 

  const submitHandlerAdmin = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/api/member/admin-login/`,
        data: {
          username: data.name,
          password: data.password,
        },
      });
      console.log(res.data.data);
      let token = res.data.token.split(" ");
      // localStorage.setItem("access_token");
      localStorage.setItem("access_token", token[1]);
      localStorage.setItem("role", res.data.data.role);

       const decodedToken = jwt_decode(token[1]);
       console.log(decodedToken);


      navigate("/overview-admin");
    } catch (error) {
      handleDialogOpen();
    } finally {
      setShowProgress(false); // Hide the progress indicator
    }
  };

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        submitHandlerAdmin(formLoginAdmin);
      }
    };

  return (
    <div className={classes.root}>
      <Card
        sx={{
          width: "100%",
          maxWidth: "500px",
          height: "100%",
          maxHeight: "500px",
          boxSizing: "border-box",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={6} md={6} xl={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
              }}
            >
              <img src={LogoLogin} alt="Logo" className={classes.logo} />
            </div>
          </Grid>
          <Grid item xs={6} md={6} xl={6} sx={{ padding: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
              }}
            >
              <h2 style={{ fontSize: "20px" }}>Welcome to Login</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h2 style={{ fontSize: "20px" }}>Page</h2>
            </div>

            <TextField
              label="Username"
              onChange={(e) => {
                setFormLoginAdmin({ ...formLoginAdmin, name: e.target.value });
              }}
              margin="normal"
              sx={{ display: "flex" }}
              fullWidth
              onKeyPress={handleKeyPress}
            />
            <TextField
              type="password"
              label="Password"
              onChange={(e) => {
                setFormLoginAdmin({
                  ...formLoginAdmin,
                  password: e.target.value,
                });
              }}
              margin="normal"
              sx={{ display: "flex" }}
              fullWidth
              onKeyPress={handleKeyPress}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={() => submitHandlerAdmin(formLoginAdmin)}
              style={{
                marginBottom: "15px",
                background:
                  "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={() => window.history.back()}
              style={{
                background:
                  "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
              }}
            >
              Back
            </Button>
            {showProgress && (
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
            )}
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
              <DialogTitle>Invalid Username or Password</DialogTitle>
              <DialogContent>
                <DialogContent>
                  The username or password you entered is incorrect.
                </DialogContent>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
            {/* <Link to="/overview" style={{textDecoration:"none",color:"black"}}>
            <Button type="submit" variant="contained" fullWidth style={{background:"linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)"}}>
              Login
            </Button>
            </Link> */}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default Login;
