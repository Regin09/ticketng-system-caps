import React, { Fragment, useState } from "react";
import { Card, Container, Grid, Typography } from "@mui/material";
import { Button, styled, useTheme } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
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
        <TableCell align="center">{formatDate(props.item.startedAt)}</TableCell>
        <TableCell align="center">
          {formatDate(props.item.finishedAt)}
        </TableCell>
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
  const [userProfile, setUserProfile] = React.useState([]);

  React.useEffect(() => {
    document.title = "Detail Engineer Performance";
    getUserProfileHandler();
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
   const getUserProfileHandler = async () => {
     try {
       const res = await axios({
         method: "GET",
         url: "https://stg.capstone.adaptivenetworklab.org/api/member/profile/",
         headers: {
           Authorization: `Bearer ${localStorage.getItem("access_token")}`,
         },
       });
       console.log("Response GET");
       console.log(res);
       setUserProfile(res.data.data);
       // console.log(userProfile);
     } catch (error) {
       if (error.response.status === 404) {
       }
       console.log(error);
     }
   };


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

  const renderTableBody = () => {
    if (detailEngineer.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={6} align="center">
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
                You don't have any ticket done.
              </Typography>
            </Card>
          </TableCell>
        </TableRow>
      );
    }

    return stableSort(
      detailEngineer.filter((e) => {
        return roleMember === "ALL" ? true : e.role === roleMember;
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
      });
  };

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Performance of {userProfile.name} </h1>
        <Link
          to="engineerAnalytics"
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
            <Typography>{userProfile.name} Analytics</Typography>
          </Button>
        </Link>
      </div>
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
          <TableBody>{renderTableBody()}</TableBody>
        </Table>
      </TableContainer>
      {/* Table Pagination */}
      
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
     
    </Container>
  );
};

export default DetailEngineerPerformance;
