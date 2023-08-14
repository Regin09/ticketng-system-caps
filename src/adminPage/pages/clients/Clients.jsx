import React, { Fragment, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { CircularProgress, styled, useTheme } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import "./clients.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import MuiToggleButton from "@mui/material/ToggleButton";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import WarningIcon from "../../../assets/images/iconwarning.png";
import axios from "axios";


const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  background:
    "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
}));

const Clients = () => {
  const theme = useTheme();
  const [clientSummary, setClientSummary] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage] = useState(6);
  

  React.useEffect(() => {
    document.title = "Client Page";
    getClientSummaryHandler();
  }, []);

  const getClientSummaryHandler = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/api/member/client?page=${currentPage}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Response GET");
      console.log(res);
      setClientSummary(res.data.data);
      console.log(clientSummary);
    } catch (error) {
      if (error.response.status === 404) {
      }
      console.log(error);
    }
  };

  const [open, setOpen] = useState(false);
  const handleDeleteClick = (cardIndex) => {
    setOpen((prevState) => ({
      ...prevState,
      [cardIndex]: true,
    }));
  };

  const handleDeleteConfirm = (cardIndex) => {
    setOpen((prevState) => ({
      ...prevState,
      [cardIndex]: false,
    }));
  };

  const handleDeleteCancel = (cardIndex) => {
    setOpen((prevState) => ({
      ...prevState,
      [cardIndex]: false,
    }));
  };

  // function handleDeleteClick() {
  //   setOpen(true);
  // }

  // function handleDeleteConfirm() {
  //   setOpen(false);
  // }

  // function handleDeleteCancel() {
  //   setOpen(false);
  // }

  const handleDeleteClients = async (code) => {
    try {
      const res = await axios({
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/client/${code}`,
      });
      console.log(res.data.data);
      getClientSummaryHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#1F305C !important",
      backgroundColor: "rgba(31, 48, 92, 0.25)",
    },
  });

  // Get current clients
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clientSummary.slice(
    indexOfFirstClient,
    indexOfLastClient
  );


  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getClientSummaryHandler();
  };

  return (
    <React.Fragment>
      <div style={{ width: "100%", paddingBottom: "15px", maxWidth: "500px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={6}>
            <Link
              to="createClient"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  background: "#FFFFFF",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <AddCircleOutlineOutlinedIcon
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingRight: "2.5px",
                    cursor: "pointer",
                    marginTop: "3.4px",
                    marginBottom: "5px",
                  }}
                />
                Create Client
              </Button>
            </Link>
          </Grid>

          <Grid item xs={12} md={6} xl={6}>
            <Link
              to="ClientAnalysis"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  background: "#FFFFFF",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <AnalyticsOutlinedIcon
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "2px",
                    cursor: "pointer",
                    marginTop: "3.4px",
                    marginBottom: "5px",
                  }}
                />
                Client Analytics
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3}>
        {currentClients.map((summary, index) => (
          <Grid item xs={12} md={4} xl={4} key={summary._id}>
            <Card
              sx={{
                width: "100%",
                boxSizing: "border-box",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Link
                  to={`detailClient/${summary.code}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {summary.name}
                  </Typography>
                </Link>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  <hr />
                </Typography>
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "140px" }}>
                    Client Code
                  </div>{" "}
                  :<div style={{ paddingLeft: "15px" }}>{summary.code}</div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "140px" }}>
                    Client Phone
                  </div>{" "}
                  :<div style={{ paddingLeft: "15px" }}>{summary.phone}</div>
                </div>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ width: "100%", maxWidth: "140px" }}>
                    Client Email
                  </div>{" "}
                  :<div style={{ paddingLeft: "15px" }}>{summary.email}</div>
                </div>
                <br />
                <div style={{ width: "100%", display: "flex" }}>
                  <Link
                    to={`editClient/${summary.code}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      size="small"
                      sx={{ display: "flex", color: "green" }}
                    >
                      <BorderColorOutlinedIcon />
                    </Button>
                  </Link>
                  <Button
                    size="small"
                    sx={{ width: "10px", color: "red" }}
                    onClick={() => handleDeleteClick(index)}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Button>

                  <Dialog
                    open={open[index]}
                    onClose={() => handleDeleteCancel(index)}
                  >
                    <DialogContent
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src={WarningIcon}
                        alt="Logo"
                        style={{
                          height: "75px",

                          width: "80px",
                        }}
                      />
                    </DialogContent>
                    <DialogTitleStyled>
                      Are you sure you want to delete this item?
                    </DialogTitleStyled>
                    <DialogActions>
                      <Button
                        onClick={() => handleDeleteCancel(index)}
                        sx={{
                          backgroundColor: "grey",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "grey",
                          },
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          handleDeleteClients(summary.code);
                          handleDeleteConfirm(index);
                        }}
                        sx={{
                          backgroundColor: "#FF0000",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "red",
                          },
                        }}
                      >
                        Delete
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <br/>
      </Grid>
      
      <div style={{ display: "flex", justifyContent: "center" }}>
        {clientSummary.length > clientsPerPage && (
          <ClientPagination
            clientsPerPage={clientsPerPage}
            totalClients={clientSummary.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </React.Fragment>
  );
};

const ClientPagination = ({
  clientsPerPage,
  totalClients,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        zIndex: "1000",
        background: "white",
        boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.1)",
        padding: "10px 0",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {pageNumbers.map((number) => (
          <li
            key={number}
            style={{
              margin: "0 5px",
            }}
          >
            <Button
              variant={currentPage === number ? "contained" : "outlined"}
              onClick={() => paginate(number)}
              sx={{ minWidth: "30px", padding: "6px" }}
            >
              {number}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Clients;
