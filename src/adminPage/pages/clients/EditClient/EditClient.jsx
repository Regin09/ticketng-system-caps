import React, { Fragment, useState } from "react";
import Grid from "@mui/material/Grid";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { CircularProgress } from "@mui/material";
const EditClient = () => {
  const navigate = useNavigate();
  let { code } = useParams();
  const [formEdit, setFormEdit] = useState({
    name: "",
    code: "",
    regional: "",
    address: "",
    phone: "",
    email: "",
  });

  const [showProgress, setShowProgress] = React.useState(false);

  React.useEffect(() => {
    document.title = "Edit Client";
    getSpecificClients(code);
  }, []);

  const getSpecificClients = async (code) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/client/${code}`,
      });
      // setFormEdit(res.data.ticket[0]);
      // console.log(res.data.ticket);
      // console.log(formEdit);
      setFormEdit({
        name: res.data.data[0].name,
        code: res.data.data[0].code,
        regional: res.data.data[0].regional,
        address: res.data.data[0].address,
        phone: res.data.data[0].phone,
        email: res.data.data[0].email,
      });
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClients = async (data) => {
    try {
      const res = await axios({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/client/${code}`,
        data: data,
        // data: {
        //   subject: formEdit.subject,
        //   description: formEdit.description,
        //   reporter: formEdit.reporter,
        //   clientCode: formEdit.clientCode,
        //   assignee: formEdit.assignee,
        //   duedate: formEdit.duedate,
        //   priority: formEdit.priority,
        //   status: formEdit.status,
        //   labels: [...formEdit.labels],
        //   lastUpdatedAt: formEdit.lastUpdatedAt,
        //   createdAt: formEdit.createdAt,
        // },
      });
      console.log(res.data.data);
      navigate("/clients-admin");
    } catch (error) {
      console.log(error);
    }finally {
      setShowProgress(false); // Hide the progress indicator
    }
  };

  return (
    <Fragment>
      <h2>Edit Client</h2>
      <Card
        sx={{
          width: "100%",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          padding: "16px",
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} xl={6}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Client Name
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={formEdit.name}
              onChange={(e) => {
                setFormEdit({ ...formEdit, name: e.target.value });
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
              value={formEdit.address}
              onChange={(e) => {
                setFormEdit({ ...formEdit, address: e.target.value });
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
        <br />
        <br />
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} xl={6}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Client Code
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={formEdit.code}
              onChange={(e) => {
                setFormEdit({ ...formEdit, code: e.target.value });
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
              value={formEdit.email}
              onChange={(e) => {
                setFormEdit({ ...formEdit, email: e.target.value });
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
        <br />
        <br />
        <Grid container spacing={10}>
          <Grid item xs={12} md={6} xl={6}>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Client Regional
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={formEdit.regional}
              onChange={(e) => {
                setFormEdit({ ...formEdit, regional: e.target.value });
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
              value={formEdit.phone}
              onChange={(e) => {
                setFormEdit({ ...formEdit, phone: e.target.value });
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
              onClick={() => {
                handleEditClients(formEdit);
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
              Edit Client
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
          </Link>
        </div>
        <br />
      </Card>
    </Fragment>
  );
};

export default EditClient;
