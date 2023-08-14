import * as React from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Fragment } from "react";
import { useState } from "react";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  CircularProgress,
  IconButton,
  Select,
  Snackbar,
  Stack,
} from "@mui/material";

import MuiAlert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";

const EditTickets = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [formEdit, setFormEdit] = useState({
    id: null,
    subject: "",
    description: "",
    reporter: "",
    clientCode: "",
    assignee: "",
    duedate: dayjs(),
    priority: "",
    status: "",
    labels: [],
  });
  const [loading, setLoading] = useState(false);

  const handleDateChange = async (value) => {
    setLoading(true);

    // Simulate an asynchronous operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Perform your actual logic here
    console.log("Tanggal: " + value.$D);
    console.log("Bulan: " + value.$M);
    console.log("Tahun: " + value.$y);

    setLoading(false);
  };

  const [engineerRole, setEngineerRole] = useState([]);
  const [userRole, setUserRole] = useState([]);
  const [clientCode, setClientCode] = useState([]);
  const [showProgress, setShowProgress] = React.useState(false);
  const [labels, setLabels] = useState("");
  const handleTextFieldKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      createNewLabel();
    }
  };
  const createNewLabel = () => {
    if (labels.trim() !== "") {
      setFormEdit({
        ...formEdit,
        labels: [...formEdit.labels, labels],
      });
    }
    setLabels("");
  };
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const showAlert = (severity, message) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertOpen(true);
  };
  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const deleteLabel = (index) => {
    const updatedLabels = [...formEdit.labels];
    updatedLabels.splice(index, 1);
    setFormEdit({
      ...formEdit,
      labels: updatedLabels,
    });
  };

  React.useEffect(() => {
    document.title = "Client Analytics";
    getAllClientCodeHandler();
    getAllEngineerHandler();
    getAllTickets(id);
  }, []);

  const getAllTickets = async (id) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/${id}`,
      });
      // setFormEdit(res.data.ticket[0]);
      // console.log(res.data.ticket);
      // console.log(formEdit);
      
      setFormEdit({
        // id: res.data.ticket[0]._id,
        subject: res.data.ticket[0].subject,
        description: res.data.ticket[0].description,
        reporter: res.data.ticket[0].reporter,
        clientCode: res.data.ticket[0].clientCode,
        assignee: res.data.ticket[0].assignee,
        duedate: dayjs(res.data.ticket[0].duedate),
        priority: res.data.ticket[0].priority,
        status: res.data.ticket[0].status,
        labels: [...res.data.ticket[0].labels],
      });
      console.log(res.data.ticket[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditTickets = async (data) => {
    try {
      const res = await axios({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/${id}`,
        data: data,
      });

      navigate(`/tickets-admin/detailTickets/${id}`);
    } catch (error) {
      showAlert("error", error.response.data.message);
      console.log(error);
    }
  };
   const getAllEngineerHandler = async () => {
     try {
       const res = await axios({
         method: "GET",
         url: `${process.env.REACT_APP_API_URL}/api/member/all-engineer`,
         headers: {
           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
         },
       });
       console.log("Response GET");
       console.log(res);
       setEngineerRole(res.data.data);
       console.log(engineerRole);
     } catch (error) {
       if (error.response.status === 404) {
       }
       console.log(error);
     }
   };

    const getAllClientCodeHandler = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `${process.env.REACT_APP_API_URL}/api/member/client`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        console.log("Response GET");
        console.log(res);
        setClientCode(res.data.data);
        console.log(clientCode);
      } catch (error) {
        if (error.response.status === 404) {
        }
        console.log(error);
      }
    };


  return (
    <Fragment>
      <h1>Edit Ticket</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleEditTickets(formEdit);
        }}
      >
        <Card
          sx={{
            minWidth: "100%",
            border: "1px solid rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <div>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Title
            </Typography>

            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={formEdit.subject}
              onChange={(e) => {
                setFormEdit({ ...formEdit, subject: e.target.value });
              }}
              sx={{
                width: "100%",
                height: "5px",
                background: "#FFFFFF",
                borderRadius: "7px",
              }}
            />
          </div>
          <br />
          <div>
            <Typography variant="body2" sx={{ fontSize: "17px" }}>
              Description
              <br />
            </Typography>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={5}
              value={formEdit.description}
              onChange={(e) => {
                setFormEdit({ ...formEdit, description: e.target.value });
              }}
              sx={{
                width: "100%",
                height: "5px",
                background: "#FFFFFF",
                borderRadius: "7px",
              }}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} xl={3}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Assignee
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  value={formEdit.assignee}
                  onChange={(e) => {
                    setFormEdit({ ...formEdit, assignee: e.target.value });
                  }}
                  sx={{ width: "100%" }}
                >
                  {/* Nambahin method get */}
                  {engineerRole.map((engineer) => (
                    <MenuItem key={engineer._id} value={engineer.username}>
                      {engineer.username}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Priority
                </Typography>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formEdit.priority}
                  size="small"
                  onChange={(e) => {
                    setFormEdit({ ...formEdit, priority: e.target.value });
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <MenuItem value={"Low"}>Low</MenuItem>
                  <MenuItem value={"Medium"}>Medium</MenuItem>
                  <MenuItem value={"High"}>High</MenuItem>
                  <MenuItem value={"Critical"}>Critical</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Estimated Resolution Time
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    value={formEdit.duedate}
                    // onChange={handleDateChange}
                    onChange={(value) => {
                      setFormEdit({ ...formEdit, duedate: dayjs(value) });
                      console.log(formEdit);
                      console.log("Tanggal: " + value.$D);
                      console.log("Bulan: " + value.$M);
                      console.log("Tahun: " + value.$y);
                      // setLoading(false);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    slotProps={{
                      textField: {
                        // helperText: 'MM / DD / YYYY',
                      },
                    }}
                    sx={{
                      width: "100%",
                      "& .MuiOutlinedInput-input": {
                        border: 0,
                        borderRadius: 3,
                        height: "8px",
                      },
                      "& .MuiDialog-root .MuiModal-root .css-3dah0e-MuiModal-root-MuiDialog-root":
                        {
                          zIndex: 100000,
                        },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                <div>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Labels
                  </Typography>
                  {/* <div style={{ display: "flex", alignItems: "center" }}>
                  {formCreate.labels.map((item, index) => (
                    <div key={index} style={{ marginRight: "5px" }}>
                      <Chip label={item} onDelete={() => deleteLabel(index)} />
                    </div>
                  ))} */}
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    value={labels}
                    onChange={(e) => setLabels(e.target.value)}
                    onKeyPress={handleTextFieldKeyPress}
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
                      marginTop: "10px",
                    }}
                    // InputProps={{
                    //   startAdornment: (

                    //   ),
                    // }}
                  />
                  <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
                    {formEdit.labels.map((item, index) => (
                      <Chip
                        key={index}
                        label={item}
                        onDelete={() => deleteLabel(index)}
                        style={{ marginBottom: "5px" }}
                      />
                    ))}
                  </Stack>
                </div>
              </Grid>
            </Grid>
          </div>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{ fontSize: "17px" }}>
                Client Code
              </Typography>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                size="small"
                value={formEdit.clientCode}
                onChange={(e) => {
                  setFormEdit({ ...formEdit, clientCode: e.target.value });
                }}
                sx={{ width: "100%" }}
              >
                {/* Nambahin method get */}
                {clientCode.map((client) => (
                  <MenuItem key={client._id} value={client.code}>
                    {client.code}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{ fontSize: "17px" }}>
                Reporter
              </Typography>
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                value={formEdit.reporter}
                onChange={(e) => {
                  setFormEdit({ ...formEdit, reporter: e.target.value });
                }}
                sx={{
                  width: "100%",
                  height: "35px",
                  background: "#FFFFFF",
                  borderRadius: "7px",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <Typography variant="body2" sx={{ fontSize: "17px" }}>
                Status
              </Typography>

              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formEdit.status}
                onChange={(e) => {
                  setFormEdit({ ...formEdit, status: e.target.value });
                }}
                sx={{ width: "100%" }}
              >
                <MenuItem value={"Selected"}>Selected</MenuItem>
                <MenuItem value={"Need-Approval"}>Need To Approval</MenuItem>
                <MenuItem value={"To-Do"}>To-Do</MenuItem>
                <MenuItem value={"In-Progress"}>In-Progress</MenuItem>
                <MenuItem value={"Delivered"}>Delivered</MenuItem>
                
              </Select>
              {/* <TextField
              id="outlined-select-currency"
              size="small"
              select
              defaultValue="selected"
              sx={{ width: "100%" }}
            >
              {Stat.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
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
              Edit Tickets
            </Button>
          </div>
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

export default EditTickets;
