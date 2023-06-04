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
const CreateClient = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const [formCreate, setFormCreate] = React.useState({
    name: "",
    code: "",
    regional: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleCreateClients = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/client`,
        data: data,
      });
      console.log(res.data.data);
      navigate("/clients-admin");
    } catch (error) {
      console.log(error);
    }
  };

  // const handleCreateButtonClick = () => {
  //   if (formCreate.code.length >= 4) {
  //     setErrorMessage("Code length must be less than or equal to 3 characters long");
  //     setOpen(true);
  //   } else {
  //     handleCreateClients(formCreate);
  //   }
  // };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <Fragment>
      <h1>Create Client</h1>
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
                  setFormCreate({ ...formCreate, phone: formattedPhoneNumber });
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
          <Link
            to="/clients"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              variant="contained"
              // onClick={handleCreateButtonClick}
              onClick={() => {
                handleCreateClients(formCreate);
              }}
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
          </Link>
        </div>
        <br />
      </Card>
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog> */}
    </Fragment>
  );
};

export default CreateClient;
