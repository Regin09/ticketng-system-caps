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
import { IconButton, Select, Snackbar, Stack } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import MuiAlert from "@mui/material/Alert";

const CreateTickets = () => {
  const navigate = useNavigate();
  const [formCreate, setFormCreate] = useState({
    subject: "",
    description: "",
    duedate: dayjs(),
    status: "Selected",
    labels: [],
    priority: "",
  });

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const showAlert = (severity, message) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertOpen(true);
  };
  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const decodedToken = localStorage.getItem("decoded_token");
  const parsedToken = decodedToken ? JSON.parse(decodedToken) : null;

  const [engineerRole, setEngineerRole] = useState([]);
  const [userRole, setUserRole] = useState([]);
  // const [clientCode, setClientCode] = useState([]);
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
  }, []);
  
  const handleCreateTickets = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/create`,
        data: data,
      });
      console.log(res.data.data);
      navigate(`/tickets-user/${parsedToken && parsedToken.clientCode}`);
    } catch (error) {
      showAlert("error", error.response.data.message);
      console.log(error);
    }
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("click");
          handleCreateTickets(formCreate);
        }}
      >
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
          <div>
            {/* <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Estimated Resolution Time
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  Input Date
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
                        size="small"
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
            </Grid> */}
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <div>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Labels
                  </Typography>

                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="Press enter after typing one label"
                    size="small"
                    value={labels}
                    onChange={(e) => setLabels(e.target.value)}
                    onKeyPress={handleTextFieldKeyPress}
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
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
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Priority
                </Typography>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formCreate.priority}
                  size="small"
                  onChange={(e) => {
                    setFormCreate({ ...formCreate, priority: e.target.value });
                    console.log(e.target.value);
                  }}
                  sx={{ width: "100%" }}
                >
                  <MenuItem value={"Low"}>Low (7 days)</MenuItem>
                  <MenuItem value={"Medium"}>Medium (3 days)</MenuItem>
                  <MenuItem value={"High"}>High (1 day)</MenuItem>
                  <MenuItem value={"Critical"}>Critical (6 hours)</MenuItem>
                </Select>
                <Typography variant="caption" sx={{ color: "gray" }}>
                  Will be reviewed during the approval process by the manager
                </Typography>
              </Grid>
            </Grid>
          </div>

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
              Create Tickets
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

export default CreateTickets;
