import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import LogoLogin from "../../../assets/images/BtechForLogin.png";
import { Grid, Typography } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

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
    maxWidth: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    background: "#FFFFFF",
    borderRadius: "30px !important",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  logo: {
    height: "250px",
    marginBottom: "20px",
    paddingRight: "10px",
    maxWidth: "100%",
  },
});

function LoginEngineer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  React.useEffect(() => {
    document.title = "Login Engineer";
  }, []);

  const navigate = useNavigate();
  const [formLoginEngineer, setFormLoginEngineer] = useState({
    name: "",
    password: "",
  });

  const submitHandlerEngineer = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/engineer-login`,
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
      navigate("/overview-engineer");
    } catch (error) {
      handleDialogOpen();
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
                setFormLoginEngineer({
                  ...formLoginEngineer,
                  name: e.target.value,
                });
              }}
              margin="normal"
              sx={{ display: "flex" }}
              fullWidth
            />
            <TextField
              type="password"
              label="Password"
              onChange={(e) => {
                setFormLoginEngineer({
                  ...formLoginEngineer,
                  password: e.target.value,
                });
              }}
              margin="normal"
              sx={{ display: "flex" }}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={() => submitHandlerEngineer(formLoginEngineer)}
              style={{
                background:
                  "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
              }}
            >
              Login
            </Button>
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
          </Grid>
        </Grid>
      </Card>
      {/* <Card className={classes.card}>
      <img src={LogoLogin} alt="Logo" className={classes.logo} />
        <CardContent className={classes.form}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Typography variant="body1" sx={{fontSize:"30px",fontWeight:"700"}}>
          Welcome to Login Page
        </Typography>
        </div>
        
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              label="Username"
              value={username}
              onChange={handleUsernameChange}
              margin="normal"
              sx={{display:'flex'}}
              fullWidth
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={handlePasswordChange}
              margin="normal"
              sx={{display:'flex'}}
              fullWidth
            />
           <Link to="/overview" style={{textDecoration:"none",color:"black"}}>
            <Button type="submit" variant="contained" fullWidth style={{background:"linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)"}}>
              Login
            </Button>
            </Link>
          </form>
        </CardContent>
      </Card> */}
    </div>
  );
}

export default LoginEngineer;
