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
import Chip from "@mui/material/Chip";
import MuiAlert from "@mui/material/Alert";

const EditTickets = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [formEdit, setFormEdit] = useState({
    id: null,
    subject: "",
    description: "",
    reporter: "",
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

  React.useEffect(() => {
    document.title = "Client Analytics";
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
      setShowProgress(true); // Show the progress indicator
      const res = await axios({
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/${id}`,
        data: data,
      });
      navigate(`/tickets-user/detailTickets/${id}`);
    } catch (error) {
      showAlert("error", error.response.data.message);
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
            <Grid container spacing={3}>
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
                  <MenuItem value={"Low"}>Low (7 days)</MenuItem>
                  <MenuItem value={"Medium"}>Medium (3 days)</MenuItem>
                  <MenuItem value={"High"}>High (1 day)</MenuItem>
                  <MenuItem value={"Critical"}>Critical (6 hours)</MenuItem>
                </Select>
              </Grid>
            </Grid>
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
                    size="small"
                    value={labels}
                    onChange={(e) => setLabels(e.target.value)}
                    onKeyPress={handleTextFieldKeyPress}
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
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
