import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { CircularProgress } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const CreateClient = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const [showProgress, setShowProgress] = React.useState(false);

  const [formCreate, setFormCreate] = React.useState({
    name: "",
    code: "",
    regional: "",
    address: "",
    phone: "",
    email: "",
  });

  
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertSeverity, setAlertSeverity] = React.useState("");
  const [alertMessage, setAlertMessage] = React.useState("");
  const showAlert = (severity, message) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };


  const handleCreateClients = async (data) => {
    try {
      setShowProgress(true);
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/client`,
        data: data,
      });
      console.log(res.data.data);
      navigate("/clients-admin");
    } catch (error) {
      showAlert("error", error.response.data.message);
      console.log(error);
    } finally {
      setShowProgress(false); // Hide the progress indicator
    }
  };

  return (
    <Fragment>
      <h1>Create Client</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("click");
          handleCreateClients(formCreate);
        }}
      >
        <Card
          sx={{
            width: "100%",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "30px 0px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Client Name
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setFormCreate({ ...formCreate, name: e.target.value });
                  }}
                  sx={{
                    width: "100%",
                    height: "5px",
                    background: "#FFFFFF",
                    borderRadius: "7px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Client Address
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setFormCreate({ ...formCreate, address: e.target.value });
                  }}
                  sx={{
                    width: "100%",
                    height: "5px",
                    background: "#FFFFFF",
                    borderRadius: "7px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Client Code
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Must be less than or equal to 3 characters long"
                  size="small"
                  onChange={(e) => {
                    setFormCreate({
                      ...formCreate,
                      code: e.target.value.toUpperCase(),
                    });
                  }}
                  sx={{
                    width: "100%",
                    height: "5px",
                    background: "#FFFFFF",
                    borderRadius: "7px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Client Email
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  placeholder="adaptive@adaptive.org.id"
                  onChange={(e) => {
                    setFormCreate({ ...formCreate, email: e.target.value });
                  }}
                  sx={{
                    width: "100%",
                    height: "5px",
                    background: "#FFFFFF",
                    borderRadius: "7px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Client Regional
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setFormCreate({ ...formCreate, regional: e.target.value });
                  }}
                  sx={{
                    width: "100%",
                    height: "5px",
                    background: "#FFFFFF",
                    borderRadius: "7px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Client Phone
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  placeholder="628123456789"
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    const formattedPhoneNumber =
                      inputValue.length === 9 ? `0${inputValue}` : inputValue;
                    setFormCreate({
                      ...formCreate,
                      phone: formattedPhoneNumber,
                    });
                  }}
                  // onChange={(e) => {
                  //   setFormCreate({ ...formCreate, phone: e.target.value });
                  // }}
                  sx={{
                    width: "100%",
                    height: "5px",
                    background: "#FFFFFF",
                    borderRadius: "7px",
                  }}
                />
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "10px",
            }}
          >
           
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: "black",
                  background: "#BFFF58",
                  height: "53px",
                  width: "fix-content",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                Create Client
              </Button>
          </div>
          <br />
        </Card>
      </form>
      <Snackbar
        open={alertOpen}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseAlert}
          severity={alertSeverity}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </Fragment>
  );
};

export default CreateClient;
