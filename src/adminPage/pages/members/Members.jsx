import React, { Fragment, useState } from "react";
import "./members.css";
import { Card, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Button, styled, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MuiToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import TableSortLabel from "@mui/material/TableSortLabel";
import { DialogTitle } from "@mui/material";

import { Dialog, DialogContent, DialogActions } from "@mui/material";
import WarningIcon from "../../../assets/images/iconwarning.png";
import axios from "axios";

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  background:
    "linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)",
}));

const headCells1 = [
  {
    id: "name",
    numeric: false,
    label: "Name",
  },
  {
    id: "username",
    numeric: false,
    label: "Username",
  },
  {
    id: "email",
    numeric: false,
    label: "Email",
  },
  {
    id: "role",
    numeric: false,
    label: "Role",
  },
  {
    id: "actions",
    numeric: false,
    label: "Actions",
  },
];

const headCells2 = [
  {
    id: "name",
    numeric: false,
    label: "Name",
  },
  {
    id: "username",
    numeric: false,
    label: "Username",
  },
  {
    id: "email",
    numeric: false,
    label: "Email",
  },
  {
    id: "client",
    numeric: false,
    label: "Client",
  },
  {
    id: "role",
    numeric: false,
    label: "Role",
  },
  {
    id: "actions",
    numeric: false,
    label: "Actions",
  },
];

const headCells3 = [
  {
    id: "name",
    numeric: false,
    label: "Name",
  },
  {
    id: "username",
    numeric: false,
    label: "Username",
  },
  {
    id: "email",
    numeric: false,
    label: "Email",
  },
  {
    id: "role",
    numeric: false,
    label: "Role",
  },
  {
    id: "actions",
    numeric: false,
    label: "Actions",
  },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function RowItem1(props) {
  const [openCell, setOpenCell] = React.useState(false);
  const [data, setData] = React.useState(props.memberData);
  const [open, setOpen] = useState(false);

  function handleDeleteClick() {
    setOpen(true);
  }

  function handleDeleteConfirm() {
    // Perform the deletion action here
    setOpen(false);
  }

  function handleDeleteCancel() {
    setOpen(false);
  }

  const handleDeleteMembers = async (role, username) => {
    try {
      const res = await axios({
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/delete?role=${role}&username=${username}`,
      });
      console.log(res.data.data);
      props.getAllMembers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell align="center">{props.item.name}</TableCell>
        <TableCell align="center">{props.item.username}</TableCell>
        <TableCell align="center">{props.item.email}</TableCell>
        <TableCell align="center">{props.item.role}</TableCell>
        <TableCell align="center" style={{ width: "198px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() =>
                handleDeleteClick(props.item.role, props.item.username)
              }
            >
              Delete
            </Button>
            <Dialog open={open} onClose={handleDeleteCancel}>
              <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
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
                  onClick={handleDeleteCancel}
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
                    handleDeleteMembers(props.item.role, props.item.username);
                    handleDeleteConfirm();
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
            <Link
              to={`userPerformance/${props.item.username}`}
              style={{ textDecoration: "none", marginLeft: "8px" }}
            >
              <Button variant="outlined" size="small" color="primary">
                View
              </Button>
            </Link>
          </Box>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function RowItem2(props) {
  const [openCell, setOpenCell] = React.useState(false);
  const [data, setData] = React.useState(props.memberData);
  const [open, setOpen] = useState(false);

  function handleDeleteClick() {
    setOpen(true);
  }

  function handleDeleteConfirm() {
    // Perform the deletion action here
    setOpen(false);
  }

  function handleDeleteCancel() {
    setOpen(false);
  }

  const handleDeleteMembers = async (role, username) => {
    try {
      const res = await axios({
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/delete?role=${role}&username=${username}`,
      });
      console.log(res.data.data);
      props.getAllMembers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell align="center">{props.item.name}</TableCell>
        <TableCell align="center">{props.item.username}</TableCell>
        <TableCell align="center">{props.item.email}</TableCell>
        <TableCell align="center">{props.item.clientCode}</TableCell>
        <TableCell align="center">{props.item.role}</TableCell>
        <TableCell align="center" style={{ width: "100px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() =>
                handleDeleteClick(props.item.role, props.item.username)
              }
            >
              Delete
            </Button>
            <Dialog open={open} onClose={handleDeleteCancel}>
              <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
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
                  onClick={handleDeleteCancel}
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
                    handleDeleteMembers(props.item.role, props.item.username);
                    handleDeleteConfirm();
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
          </Box>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function RowItem3(props) {
  const [openCell, setOpenCell] = React.useState(false);
  const [data, setData] = React.useState(props.memberData);
  const [open, setOpen] = useState(false);

  function handleDeleteClick() {
    setOpen(true);
  }

  function handleDeleteConfirm() {
    // Perform the deletion action here
    setOpen(false);
  }

  function handleDeleteCancel() {
    setOpen(false);
  }

  const handleDeleteMembers = async (role, username) => {
    try {
      const res = await axios({
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/delete?role=${role}&username=${username}`,
      });
      console.log(res.data.data);
      props.getAllMembers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell align="center">{props.item.name}</TableCell>
        <TableCell align="center">{props.item.username}</TableCell>
        <TableCell align="center">{props.item.email}</TableCell>
        <TableCell align="center">{props.item.role}</TableCell>
        <TableCell align="center" style={{ width: "100px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() =>
                handleDeleteClick(props.item.role, props.item.username)
              }
            >
              Delete
            </Button>
            <Dialog open={open} onClose={handleDeleteCancel}>
              <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
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
                  onClick={handleDeleteCancel}
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
                    handleDeleteMembers(props.item.role, props.item.username);
                    handleDeleteConfirm();
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
          </Box>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const Members = () => {
  const theme = useTheme();
  const [statusTicket, setStatusTicket] = React.useState("ALL");
  React.useEffect(() => {
    document.title = "Members Page";
    handleGetEngineer();
  }, []);

  const [roleMember, setRoleMember] = React.useState("Engineer");
  const [adminData, setAdminData] = useState([]);
  const [engineerData, setEngineerData] = useState([]);
  const [userData, setUserData] = useState([]);

  const handleGetEngineer = async (role) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/all-engineer`,
      });
      setEngineerData(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetAdmin = async () => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/all-admin`,
      });
      setAdminData(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetUser = async () => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/member/all-user`,
      });
      setUserData(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#000000 !important",
      backgroundColor: "#94B49F",
    },
  });

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const EngineerRenderTableBody = () => {
    if (engineerData.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} align="center">
            <Card
              sx={{
                width: "100%",
                height: "200px",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "35px",
                  fontWeight: 1000,
                }}
              >
                There's no Engineer Right now
              </Typography>
            </Card>
          </TableCell>
        </TableRow>
      );
    }
  };

  const AdminRenderTableBody = () => {
    if (adminData.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} align="center">
            <Card
              sx={{
                width: "100%",
                height: "200px",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "35px",
                  fontWeight: 1000,
                }}
              >
                There's no Admin Right now
              </Typography>
            </Card>
          </TableCell>
        </TableRow>
      );
    }
  };

  const UserRenderTableBody = () => {
    if (userData.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={7} align="center">
            <Card
              sx={{
                width: "100%",
                height: "200px",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "35px",
                  fontWeight: 1000,
                }}
              >
                There's no User Right now
              </Typography>
            </Card>
          </TableCell>
        </TableRow>
      );
    }
  };

  return (
    <Container>
      <div className="induk-toglee">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} xl={6} className="induk-togle1">
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
                onClick={handleGetEngineer}
              >
                Engineer
              </ToggleButton>
              <ToggleButton
                value="User"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
                onClick={handleGetUser}
              >
                User
              </ToggleButton>
              <ToggleButton
                value="Admin"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
                onClick={handleGetAdmin}
              >
                Admin
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item md={6} xl={6} sm={6} className="induk-togle2">
            <Link
              to="createAccount"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  background: "#FFFFFF",
                  height: "36px",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <AddCircleOutlineOutlinedIcon
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "2px",
                    cursor: "pointer",
                    marginTop: "3.4px",
                    marginBottom: "5px",
                  }}
                />
                Create Account
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      {roleMember !== "Engineer" ? null : (
        <>
          <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : "none" }}>
            <Table
              stickyHeader
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              {/* Table Header */}
              <TableHead>
                <TableRow>
                  {headCells1.map((headCell) => (
                    <TableCell
                      key={headCell._id}
                      align={headCell.numeric ? "center" : "center"}
                      sortDirection={orderBy === headCell._id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === headCell._id}
                        direction={orderBy === headCell._id ? order : "asc"}
                        onClick={(event) => {
                          handleRequestSort(event, headCell._id);
                        }}
                        style={{ fontWeight: "bold" }}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>{EngineerRenderTableBody()}</TableBody>
              {/* Table Content */}
              <TableBody>
                {engineerData.length === 0
                  ? null
                  : stableSort(
                      engineerData.filter((e) => {
                        // return true
                        return statusTicket === "ALL"
                          ? true
                          : e.status === statusTicket;
                        // if(e.status===statusTicket)
                      }),
                      getComparator(order, orderBy)
                    )
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((rowItem, index) => {
                        return (
                          <RowItem1
                            key={rowItem.code}
                            item={rowItem}
                            memberData={engineerData}
                            getAllMembers={handleGetEngineer}
                          />
                        );
                      })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Table Pagination */}

          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={engineerData.length === 0 ? null : engineerData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              [theme.breakpoints.up("sm")]: { justifyContent: "right" },
            }}
          />
        </>
      )}
      {roleMember !== "Admin" ? null : (
        <>
          <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : "none" }}>
            <Table
              stickyHeader
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              {/* Table Header */}
              <TableHead>
                <TableRow>
                  {headCells3.map((headCell) => (
                    <TableCell
                      key={headCell._id}
                      align={headCell.numeric ? "center" : "center"}
                      sortDirection={orderBy === headCell._id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === headCell._id}
                        direction={orderBy === headCell._id ? order : "asc"}
                        onClick={(event) => {
                          handleRequestSort(event, headCell._id);
                        }}
                        style={{ fontWeight: "bold" }}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>{AdminRenderTableBody()}</TableBody>
              {/* Table Content */}
              <TableBody>
                {adminData.length === 0
                  ? null
                  : stableSort(
                      adminData.filter((e) => {
                        // return true
                        return statusTicket === "ALL"
                          ? true
                          : e.status === statusTicket;
                        // if(e.status===statusTicket)
                      }),
                      getComparator(order, orderBy)
                    )
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((rowItem, index) => {
                        return (
                          <RowItem3
                            key={rowItem.code}
                            item={rowItem}
                            memberData={adminData}
                            getAllMembers={handleGetAdmin}
                          />
                        );
                      })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={adminData.length === 0 ? null : adminData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              [theme.breakpoints.up("sm")]: { justifyContent: "right" },
            }}
          />
        </>
      )}
      {roleMember !== "User" ? null : (
        <>
          <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : "none" }}>
            <Table
              stickyHeader
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
            >
              {/* Table Header */}
              <TableHead>
                <TableRow>
                  {headCells2.map((headCell) => (
                    <TableCell
                      key={headCell._id}
                      align={headCell.numeric ? "center" : "center"}
                      sortDirection={orderBy === headCell._id ? order : false}
                    >
                      <TableSortLabel
                        active={orderBy === headCell._id}
                        direction={orderBy === headCell._id ? order : "asc"}
                        onClick={(event) => {
                          handleRequestSort(event, headCell._id);
                        }}
                        style={{ fontWeight: "bold" }}
                      >
                        {headCell.label}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>{UserRenderTableBody()}</TableBody>
              {/* Table Content */}
              <TableBody>
                {userData.length === 0
                  ? null
                  : stableSort(
                      userData.filter((e) => {
                        // return true
                        return statusTicket === "ALL"
                          ? true
                          : e.status === statusTicket;
                        // if(e.status===statusTicket)
                      }),
                      getComparator(order, orderBy)
                    )
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((rowItem, index) => {
                        return (
                          <RowItem2
                            key={rowItem.code}
                            item={rowItem}
                            memberData={userData}
                            getAllMembers={handleGetUser}
                          />
                        );
                      })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 50, 100]}
            component="div"
            count={userData.length === 0 ? null : userData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              [theme.breakpoints.up("sm")]: { justifyContent: "right" },
            }}
          />
        </>
      )}
    </Container>
  );
};

export default Members;
