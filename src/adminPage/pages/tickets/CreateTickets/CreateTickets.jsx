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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconButton, Select, Stack } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

const CreateTickets = () => {
  const navigate = useNavigate();
  const [formCreate, setFormCreate] = useState({
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

  const [adminRole, setAdminRole] = useState([]);
  const [clientCode, setClientCode] = useState([]);
  const [labels, setLabels] = useState("");
  
  const handleTextFieldKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      createNewLabel();
    }
  };
  const createNewLabel = () => {
    if (labels.trim() !== "") {
      setFormCreate({
        ...formCreate,
        labels: [...formCreate.labels, labels],
      });
      setLabels("");
    }
  };
  const deleteLabel = (index) => {
    const updatedLabels = [...formCreate.labels];
    updatedLabels.splice(index, 1);
    setFormCreate({
      ...formCreate,
      labels: updatedLabels,
    });
  };

  React.useEffect(() => {
    document.title = "Create Tickets";
    getAllAdminHandler();
    getAllClientCodeHandler();
  }, []);

  const getAllAdminHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://stg.capstone.adaptivenetworklab.org/api/member/all-admin",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setAdminRole(res.data.data);
      console.log(adminRole);
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

  const handleCreateTickets = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/ticket/create`,
        data: data,
      });
      console.log(res.data.data);
      navigate("/tickets-admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <h1>Create Ticket</h1>
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
            onChange={(e) => {
              setFormCreate({ ...formCreate, subject: e.target.value });
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
            onChange={(e) => {
              setFormCreate({ ...formCreate, description: e.target.value });
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
                value={formCreate.assignee}
                onChange={(e) => {
                  setFormCreate({ ...formCreate, assignee: e.target.value });
                }}
                sx={{ width: "100%" }}
              >
                {/* Nambahin method get */}
                {adminRole.map((admin) => (
                  <MenuItem key={admin._id} value={admin.name}>
                    {admin.name}
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
                
                value={formCreate.priority}
                // value={formCreate.priority}
                size="small"
                onChange={(e) => {
                  setFormCreate({ ...formCreate, priority: e.target.value });
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
                {/* Input Date */}
                <MobileDatePicker
                  value={formCreate.duedate}
                  onChange={(value) => {
                    setFormCreate({ ...formCreate, duedate: dayjs(value) });
                    

                    // console.log("Tanggal: " + value.$D);
                    // console.log("Bulan: " + (value.$M + 1));
                    // console.log("Tahun: " + value.$y);
                    // setLoading(false);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        fontSize: "12px", // Adjust the font size as per your requirements
                        padding: "8px", // Adjust the padding as per your requirements
                      }}
                    />
                  )}
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
                  value={labels}
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
                        {formCreate.labels.map((item, index) => (
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
              value={formCreate.clientCode}
              onChange={(e) => {
                setFormCreate({ ...formCreate, clientCode: e.target.value });
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
              onChange={(e) => {
                setFormCreate({ ...formCreate, reporter: e.target.value });
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
              
              value={formCreate.status}
              onChange={(e) => {
                setFormCreate({ ...formCreate, status: e.target.value });
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
            to="/tickets-admin"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button
              variant="contained"
              onClick={() => {
                handleCreateTickets(formCreate);
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
              Create Tickets
            </Button>
          </Link>
        </div>
      </Card>
    </Fragment>
  );
};

export default CreateTickets;
