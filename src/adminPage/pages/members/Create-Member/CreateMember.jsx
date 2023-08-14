import React, { Fragment, useState } from "react";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import MuiToggleButton from "@mui/material/ToggleButton";
import IconButton from "@mui/material/IconButton";
import {
  Button,
  CircularProgress,
  Select,
  styled,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { ToggleButtonGroup } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const CreateMember = () => {
  const theme = useTheme();
  const [roleMember, setRoleMember] = React.useState("Engineer");
  const navigate = useNavigate();
  const [showProgress, setShowProgress] = React.useState(false);

  const [formCreate, setFormCreate] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const [formCreate2, setFormCreate2] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    clientCode: "",
  });

  const [clientCode, setClientCode] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
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

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#000000 !important",
      backgroundColor: "#94B49F",
    },
  });

  React.useEffect(() => {
    document.title = "Client Analytics";
    getAllClientCodeHandler();
  }, []);

  const handleCreateEngineer = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/engineer-register`,
        data: data,
      });
      console.log(res.data.data);
     navigate("/members-admin");
    } catch (error) {
      // setErrorMessage("");
      showAlert("error", error.response.data.message);
      // alert(error.response.data.message);
      console.log(error);
    } finally {
      setShowProgress(false); // Hide the progress indicator
    }
  };

  const handleCreateUser = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/user-register`,
        data: data,
      });
      console.log(res.data.data);
      
      navigate("/members-admin");
    } catch (error) {
      showAlert("error", error.response.data.message);
      // setErrorMessage("");
      console.log(error);
    } finally {
      setShowProgress(false); // Hide the progress indicator
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

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const isPasswordValid = (password) => {
    // Define the password pattern
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Check if the password matches the pattern
    return pattern.test(password);
  };

  // const handleCreateAccount = () => {
  //   if (!isPasswordValid(formCreate.password)) {
  //     setErrorMessage(
  //       "Must have at least 8 characters that include one uppercase, one lowercase, one numeric character, and one special character."
  //     );
  //   } else {
  //     // Proceed with creating the account
  //     setErrorMessage("");
  //     // Add your code to create the account here
  //   }
  // };

  return (
    <Fragment>
      <h1>Create Account</h1>
      <br />
      <ToggleButtonGroup
        value={roleMember}
        color="primary"
        exclusive
        onChange={(event, value) => {
          if (value) {
            setRoleMember(value);
          }
        }}
        sx={{
          // border: '1px solid #1F305C',
          [theme.breakpoints.down("sm")]: {
            height: "35px !important",
          },
        }}
      >
        <ToggleButton
          value="Engineer"
          sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
          // onClick={handleCreateEngineer}
        >
          Engineer
        </ToggleButton>
        <ToggleButton
          value="User"
          sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
        >
          User
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <br />

      {roleMember !== "Engineer" ? null : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("click");
            handleCreateEngineer(formCreate);
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
                gap: "16px 0px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Fullname
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => {
                      setFormCreate({ ...formCreate, name: e.target.value });
                    }}
                    size="small"
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Email
                  </Typography>
                  <TextField
                    required
                    placeholder="adaptive@gmail.coms"
                    type="email"
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setFormCreate({ ...formCreate, email: e.target.value });
                    }}
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Username
                  </Typography>
                  <TextField
                    required
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setFormCreate({
                        ...formCreate,
                        username: e.target.value,
                      });
                    }}
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Password
                  </Typography>
                  <FormControl
                    sx={{ width: "100%" }}
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setFormCreate({
                        ...formCreate,
                        password: e.target.value,
                      });
                    }}
                  >
                    <OutlinedInput
                      placeholder="At least 8 characters,one upper case, lower case,numeric character, and special character"
                      required
                      id="input-password"
                      type={showPassword ? "text" : "password"}
                      inputProps={{
                        pattern:
                          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  {errorMessage && (
                    <Typography color="error" variant="body2">
                      {errorMessage}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end !important",
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
                Create Account
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
            </div>
            <br />
          </Card>
        </form>
      )}
      {roleMember !== "User" ? null : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("click");
            handleCreateUser(formCreate2);
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
                gap: "16px 0px",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Fullname
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    onChange={(e) => {
                      setFormCreate2({ ...formCreate2, name: e.target.value });
                    }}
                    size="small"
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Email
                  </Typography>
                  <TextField
                    required
                    placeholder="adaptive@gmail.com"
                    type="emai"
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setFormCreate2({ ...formCreate2, email: e.target.value });
                    }}
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Username
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setFormCreate2({
                        ...formCreate2,
                        username: e.target.value,
                      });
                    }}
                    sx={{
                      width: "100%",
                      background: "#FFFFFF",
                      borderRadius: "7px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Password
                  </Typography>
                  <FormControl
                    required
                    sx={{ width: "100%" }}
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setFormCreate2({
                        ...formCreate2,
                        password: e.target.value,
                      });
                    }}
                  >
                    <OutlinedInput
                      placeholder="At least 8 characters,one upper case, lower case,numeric character, and special character"
                      required
                      id="input-password"
                      type={showPassword ? "text" : "password"}
                      inputProps={{
                        pattern:
                          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$",
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  {errorMessage && (
                    <Typography color="error" variant="body2">
                      {errorMessage}
                    </Typography>
                  )}
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} md={6} xl={6}>
                  <Typography variant="body2" sx={{ fontSize: "17px" }}>
                    Client Code
                  </Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    value={formCreate2.clientCode}
                    onChange={(e) => {
                      setFormCreate2({
                        ...formCreate2,
                        clientCode: e.target.value,
                      });
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
              </Grid>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end !important",
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
                Create Account
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
            </div>
            <br />
          </Card>
        </form>
      )}
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

export default CreateMember;
