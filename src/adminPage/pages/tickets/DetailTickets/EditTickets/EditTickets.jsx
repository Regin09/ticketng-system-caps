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
import { CircularProgress, IconButton, Select, Stack } from "@mui/material";

import Chip from "@mui/material/Chip";


const EditTickets = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [formEdit, setFormEdit] = useState({
    id: null,
    subject: '',
    description: '',
    reporter: '',
    clientCode: '',
    assignee: '',
    duedate: dayjs(),
    priority: '',
    status: '',
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
      setLabels("");
    }
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
    getAllEngineerHandler();
    getAllUserHandler();
    getAllClientCodeHandler();
    getAllTickets(id);
  }, []);

  const getAllTickets = async (id) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/ticket/${id}`,
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
          url: `https://stg.capstone.adaptivenetworklab.org/api/ticket/${id}`,
          data: data,
        });
        console.log(res.data.ticket[0]);
        navigate("/tickets-admin/detailTickets/:id");
      } catch (error) {
        console.log(error);
      } finally {
        setShowProgress(false); // Hide the progress indicator
      }
    };

  const getAllUserHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/member/all-user",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setUserRole(res.data.data);
      console.log(userRole);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };

  const getAllEngineerHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/member/all-engineer",
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
        url: "https://stg.capstone.adaptivenetworklab.org/api/member/client",
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
                  <MenuItem key={engineer._id} value={engineer.name}>
                    {engineer.name}
                  </MenuItem>
                ))}
                {userRole.map((user) => (
                  <MenuItem key={user._id} value={user.name}>
                    {user.name}
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
                // value={formCreate.priority}
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
              {/* <TextField
                id="outlined-select-currency"
                size="small"
                select
                defaultValue="selected"
                helperText="Please select your urgency"
                sx={{ width: "100%" }}

              >
                {prior.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> */}
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
                  value={formEdit.labels}
                  onChange={(e) => setLabels(e.target.value)}
                  onKeyPress={handleTextFieldKeyPress}
                  sx={{
                    width: "100%",
                    background: "#FFFFFF",
                    borderRadius: "7px",
                    marginTop: "10px",
                  }}
                  InputProps={{
                    startAdornment: (
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ flexWrap: "wrap" }}
                      >
                        {formEdit.labels.map((item, index) => (
                          <Chip
                            key={index}
                            label={item}
                            onDelete={() => deleteLabel(index)}
                            style={{ marginBottom: "5px" }}
                          />
                        ))}
                      </Stack>
                    ),
                  }}
                />
              </div>

              {/* {formCreate.labels.length === 0
                ? null
                : formCreate.labels.map((item, index) => (
                    <div>
                      {item}
                      <IconButton
                        onClick={() => {
                          const updatedLabels = [...formCreate.labels];
                          updatedLabels.splice(index, 1); // Delete element at the specified index
                          setFormCreate({
                            ...formCreate,
                            labels: updatedLabels,
                          });
                        }}
                      >
                        <CancelOutlinedIcon />
                      </IconButton>
                    </div>
                  ))} */}
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
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formEdit.status}
              onChange={(e) => {
                setFormEdit({ ...formEdit, status: e.target.value });
              }}
              sx={{ width: "100%" }}
            >
              <MenuItem value={"Selected"}>Selected</MenuItem>
              <MenuItem value={"To-Do"}>To-Do</MenuItem>
              <MenuItem value={"In-Progress"}>In-Progress</MenuItem>
              <MenuItem value={"Done"}>Done</MenuItem>
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
          <Link
            to={`/tickets-admin/detailTickets/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              variant="contained"
              onClick={() => {
                handleEditTickets(formEdit);
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
              Edit Tickets
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
      </Card>
    </Fragment>
  );
};

export default EditTickets;
