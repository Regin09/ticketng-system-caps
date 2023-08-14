import React, { Fragment, useState } from "react";
import { Button, Card, Typography, styled, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./tickets.css";
import { Link, useParams, useNavigate } from "react-router-dom";
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
import { Container } from "@mui/material";
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

const headCells = [
  {
    id: "_id",
    numeric: true,
    label: "Ticket ID",
  },
  {
    id: "subject",
    numeric: false,
    label: "Subjects",
  },
  {
    id: "assignee",
    numeric: false,
    label: "Assignee",
  },
  {
    id: "status",
    numeric: false,
    label: "Status",
  },
  {
    id: "clientCode",
    numeric: false,
    label: "Client",
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

function RowItem(props) {
  
  const [openCell, setOpenCell] = React.useState(false);
  const [data, setData] = React.useState(props.ticketData);
  const [open, setOpen] = useState(false);
  const decodedToken = localStorage.getItem("decoded_token");
  const parsedToken = decodedToken ? JSON.parse(decodedToken) : null;
  const navigate = useNavigate();

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

  const handleDeleteTickets = async (_id) => {
    try {
      const res = await axios({
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/${_id}`,
      });
      console.log(res.data.data);
      props.getAllTickets();
      navigate(`/tickets-user/${parsedToken && parsedToken.clientCode}`);
    } catch (error) {
      console.log(error);
    }
  };

 


  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell align="center">{props.item._id}</TableCell>
        <TableCell align="center">{props.item.subject}</TableCell>
        <TableCell align="center">{props.item.assignee}</TableCell>
        <TableCell
          align="center"
          sx={{
            color:
              props.item.status === "Selected"
                ? "black"
                : props.item.status === "Done"
                ? "red"
                : props.item.status === "To-Do"
                ? "#FF8A00"
                : props.item.status === "In-Progress"
                ? "#1B8500"
                : props.item.status === "Delivered"
                ? "#1D5D9B"
                : props.item.status === "Need-Approval"
                ? "#4C4B16"
                : "none",
          }}
        >
          {props.item.status}
        </TableCell>
        <TableCell align="center">{props.item.clientCode}</TableCell>
        {/* <TableCell align="center" >
          <div
            style={{
              height: "17px",
              width: "17px",
              backgroundColor:
                props.item.priority === "Critical"
                  ? "red"
                  : props.item.priority === "High"
                  ? "orange"
                  : props.item.priority === "Medium"
                  ? "yellow"
                  : props.item.priority === "Low"
                  ? "green"
                  : "none",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "5px",
            }}
          ></div>
          {props.item.priority}
        </TableCell> */}
        <TableCell align="center">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => handleDeleteClick(props.item._id)}
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
                    handleDeleteTickets(props.item._id);
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
              to={`/tickets-user/detailTickets/${props.item._id}`}
              style={{ textDecoration: "none", marginLeft: "8px" }}
            >
              {/* <Link to={`DetailTickets/${props.item.id}`} style={{ textDecoration: 'none', marginLeft: '8px' }}> */}
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



const Tickets = () => {
  const { clientCode } = useParams();
  const theme = useTheme();
  const [statusTicket, setStatusTicket] = React.useState("ALL");
  React.useEffect(() => {
    document.title = "Tickets Page";
    getAllTickets(clientCode);
  }, []);

  const [ticketData, setTicketData] = React.useState([]);

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#000000  !important",
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

  const getAllTickets = async (clientCode) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `${process.env.REACT_APP_API_URL}/api/ticket/client/${clientCode}`,
      });
      const sortedTickets = res.data.ticket.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setTicketData(sortedTickets);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  

  const renderTableBody = () => {
    if (ticketData.length === 0) {
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
                There's no tickets right now
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
          <Grid item xs={12} md={8} xl={8} className="induk-togle1">
            <ToggleButtonGroup
              value={statusTicket}
              color="primary"
              exclusive
              onChange={(event, value) => {
                if (value) {
                  setStatusTicket(value);
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
                value="ALL"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
              >
                ALL
              </ToggleButton>
              <ToggleButton
                value="Selected"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
              >
                Selected
              </ToggleButton>
              <ToggleButton
                value="Need-Approval"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
              >
                Need-Approval
              </ToggleButton>
              <ToggleButton
                value="To-Do"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
              >
                To-Do
              </ToggleButton>
              <ToggleButton
                value="In-Progress"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
              >
                In-Progress
              </ToggleButton>
              <ToggleButton
                value="Delivered"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
              >
                Delivered
              </ToggleButton>
              <ToggleButton
                value="Done"
                sx={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
              >
                Done
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>

          <Grid item md={4} xl={4} sm={4} className="induk-togle2">
            <Link
              to="/tickets-user/createTickets"
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
                Create Tickets
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>

      <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : "none" }}>
        <Table stickyHeader sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {/* {rowsPerPage.filter((e)=>{
             return statusTicket==='ALL'?true: e.status===statusTicket 
            }
            )  */}
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell._id}
                  align={headCell.numeric ? "left" : "center"}
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
          <TableBody>{renderTableBody()}</TableBody>
          {/* Table Content */}
          <TableBody>
            {ticketData.length === 0
              ? null
              : stableSort(
                  ticketData.filter((e) => {
                    // return true
                    return statusTicket === "ALL"
                      ? true
                      : e.status === statusTicket;
                    // if(e.status===statusTicket)
                  }),
                  getComparator(order, orderBy)
                )
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rowItem, index) => {
                    return (
                      <RowItem
                        key={rowItem.code}
                        item={rowItem}
                        ticketData={ticketData}
                        getAllTickets={getAllTickets}
                      />
                    );
                  })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={ticketData.length === 0 ? null : ticketData.length}
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
    </Container>
  );
};

export default Tickets;
