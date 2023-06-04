import React, { Fragment, useState} from 'react'
import Grid from '@mui/material/Grid';
import { Link, useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Button, Select, styled, useTheme } from "@mui/material";
import axios from 'axios';
import { ToggleButton, ToggleButtonGroup, } from '@mui/material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  background:
    "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
}));

const UserMember = [
  {
    value: "Users",
    label: "User",
  },
  {
    value: "Engineer",
    label: "Engineer",
  },
];
const CreateMember = () => {

  const theme = useTheme();
  const [roleMember, setRoleMember] = React.useState("Engineer");
   const navigate = useNavigate();
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
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/engineer-register`,
        data: data,
      });
      console.log(res.data.data);
      navigate("/members-admin");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateUser = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/member/user-register`,
        data: data,
      });
      console.log(res.data.data);
      navigate("/members-admin");
    } catch (error) {
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

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          onClick={handleCreateEngineer}
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
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setFormCreate({ ...formCreate, username: e.target.value });
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
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => {
                      setFormCreate({
                        ...formCreate,
                        password: e.target.value,
                      });
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
              </Grid>
            </Grid>

            {/* <Grid container spacing={2}>
            <Grid item xs={12} md={6} xl={6}>
              <Typography variant="body2" sx={{ fontSize: "17px" }}>
                Role
              </Typography>
              <TextField
                id="outlined-select-currency"
                size="small"
                select
                value={role}
                onChange={(e) => {
                  handleRoleChange(e);
                  setFormCreate({ ...formCreate, role: e.target.value });
                }}
                defaultValue=""
                sx={{ width: "100%" }}
              >
                {UserMember.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            {showClientCode && (
              <Grid item xs={12} md={6} xl={6}>
                <Typography variant="body2" sx={{ fontSize: "17px" }}>
                  Client Code
                </Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setFormCreate({ ...formCreate, client: e.target.value });
                  }}
                  sx={{
                    width: "100%",
                    background: "#FFFFFF",
                    borderRadius: "7px",
                  }}
                />
              </Grid>
            )}
          </Grid> */}
          </div>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end !important",
              marginTop: "10px",
            }}
          >
            <Link
              to="/members-admin"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  handleCreateEngineer(formCreate);
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
                Create Account
              </Button>
            </Link>
          </div>
          <br />
        </Card>
      )}
      {roleMember !== "User" ? null : (
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
                  sx={{ width: "100%" }}
                  variant="outlined"
                  size="small"
                >
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => {
                      setFormCreate2({
                        ...formCreate2,
                        password: e.target.value,
                      });
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
            <Link
              to="/members-admin"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  handleCreateUser(formCreate2);
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
                Create Account
              </Button>
            </Link>
          </div>
          <br />
        </Card>
      )}
    </Fragment>
  );
}

export default CreateMember