import React, { Fragment, useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Button, styled, useTheme } from "@mui/material";
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
import axios from "axios";

const headCells = [
  {
    id: "_id",
    numeric: false,
    label: "ID",
  },
  {
    id: "status",
    numeric: false,
    label: "Status",
  },
  {
    id: "startedAt",
    numeric: false,
    label: "Started",
  },
  {
    id: "finishedAt",
    numeric: true,
    label: "Finished",
  },
  {
    id: "score",
    numeric: false,
    label: "Score",
  },
  {
    id: "processingTime",
    numeric: false,
    label: "Processing Time (In Minute)",
  },
];

function formatDate(dateTimeString) {
  if (dateTimeString === null) {
    return "Null";
  }
  const dateTime = new Date(dateTimeString);

  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();

  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();

  const formattedDate = `${date}/${month}/${year}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return ` ${formattedTime} - ${formattedDate} `;
}

function formatCreatedAt(dateTimeString) {
  const dateTime = new Date(dateTimeString);

  const date = dateTime.getDate();
  const month = dateTime.getMonth() + 1;
  const year = dateTime.getFullYear();

  const formattedDate = `${date < 10 ? "0" + date : date}-${
    month < 10 ? "0" + month : month
  }-${year}`;

  return formattedDate;
}

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
  const [data, setData] = React.useState(props.detailEngineer);
  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell align="center">{props.item._id}</TableCell>
        <TableCell align="center">{props.item.status}</TableCell>
        <TableCell align="center">
          {formatDate(props.item.startedAt)}
        </TableCell>
        <TableCell align="center">{formatDate(props.item.finishedAt)}</TableCell>
        <TableCell align="center">{props.item.score}</TableCell>
        <TableCell align="center">{props.item.processingTime}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const DetailEngineerPerformance = () => {
  let { username } = useParams();
  const [performanceData, setPerformanceData] = useState([]);
  const [detailEngineer, setDetailEngineer] = useState([]);
  const [nameUsers, setNameUsers] = useState([]);
  const theme = useTheme();
  const [roleMember, setRoleMember] = React.useState("ALL");

  React.useEffect(() => {
    document.title = "Detail Engineer Performance";
    getEngineerPerformance(username);
  }, []);

  const getEngineerPerformance = async (username) => {
    try {
      const res = await axios({
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        url: `https://stg.capstone.adaptivenetworklab.org/api/performance/engineer/${username}`,
      });
      setDetailEngineer(res.data.data);
      setNameUsers(res.data);
      console.log(res.data.data);
      console.log(detailEngineer);
    } catch (error) {
      console.log(error);
    }
  };

  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "#000000 !important",
      backgroundColor: "#F5B6FF",
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
  return (
    <Container>
      <h1>Performance of {nameUsers.name} </h1>
      <br />
      <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : "none" }}>
        <Table stickyHeader sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          {/* Table Header */}
          <TableHead>
            <TableRow>
              {/* {rowsPerPage.filter((e)=>{
                return roleMember==='ALL'?true: e.role===roleMember 
                }
                )  */}
              {headCells.map((headCell) => (
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
          {/* Table Content */}
          <TableBody>
            {stableSort(
              detailEngineer.filter((e) => {
                // return true
                return roleMember === "ALL" ? true : e.role === roleMember;
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
                    detailEngineer={detailEngineer}
                    getEngineerPerformance={getEngineerPerformance}
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Table Pagination */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          [theme.breakpoints.down("sm")]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <span>
          <Button sx={{ width: "max-content" }}>Pagination 1 (1-100)</Button>
        </span>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={detailEngineer.length}
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
      </Box>
    </Container>
  );
};

export default DetailEngineerPerformance;
