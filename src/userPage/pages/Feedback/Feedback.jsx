import React, { Fragment,useState } from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {Button,styled, useTheme }  from '@mui/material'
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import WarningIcon from "../../../assets/images/iconwarning.png"

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  background: 'linear-gradient(234.94deg, #C9ED3A 9.55%, rgba(93, 151, 48, 0.676754) 89.47%)'
}));

const headCells = [
  {
    id: 'id',
    numeric: false,
    label: 'ID',
  },
  {
    id: 'sender',
    numeric: false,
    label: 'Sender',
  },
  {
    id: 'client',
    numeric: false,
    label: 'Client',
  },
  {
    id: 'engineer',
    numeric: true,
    label: 'Engineer',
  },
  {
    id: 'feedback',
    numeric: false,
    label: 'Feedback',
  },
  {
    id: 'created',
    numeric: false,
    label: 'Created Date',
  },
  {
    id: 'actions',
    numeric: false,
    label: 'Actions',
  },
];

const dataTable = [
  {
    name: 'Hanif',
    username: 'hanifasraf',
    email: 'hanif@gmail.com',
    client: 'ATH',
    role: 'User',
    created: '05/10/2022',
    
  },
  {
    name: 'Hanif',
    username: 'hanifasraf',
    email: 'hanif@gmail.com',
    client: 'ATH',
    role: 'User',
    created: '05/10/2022',
  },
  {
    name: 'Aji',
    username: 'aji45',
    email: 'ajiaji45@gmail.com',
    client: 'ATH',
    role: 'User',
    created: '12/10/2022',
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
  return order === 'desc'
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
  const [data, setData] = React.useState(dataTable);
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
  // const handleDeleteClick = (id) => {
  //   setData((prevData) => prevData.filter((item) => item.id !== id));
  // };
  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell align="center">{props.item.name}</TableCell>
        <TableCell align="center">{props.item.username}</TableCell>
        <TableCell align="center">{props.item.email}</TableCell>
        <TableCell align="center">{props.item.client}</TableCell>
        <TableCell align="center">{props.item.role}</TableCell>
        <TableCell align="center">{props.item.created}</TableCell>
        <TableCell align="center"><Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                variant='outlined'
                color='secondary'
                size='small'
                onClick={() => handleDeleteClick(props.item.id)}
              >
                Delete
              </Button>
              <Dialog open={open} onClose={handleDeleteCancel}>
                 <DialogContent sx={{display:'flex',justifyContent:'center'}}>
                  <img src={WarningIcon} alt="Logo" style={{height: "75px",
                    
                    width:'80px'}}
                  />
                </DialogContent>
                 <DialogTitleStyled>Are you sure you want to delete this item?</DialogTitleStyled>
                <DialogActions>
                  <Button onClick={handleDeleteCancel} sx={{
                    backgroundColor: "grey", 
                    color: "#fff",
                     "&:hover":{
                      backgroundColor:"grey"
                    }
                    }} >Cancel</Button>
                  <Button onClick={handleDeleteConfirm} sx={{
                    backgroundColor: "#FF0000", 
                    color: "#fff",
                     "&:hover":{
                      backgroundColor:"red"
                    }
                    }} >
                      Delete</Button>
                </DialogActions>
              </Dialog>
              <Link to={`DetailFeedback/`} style={{ textDecoration: 'none', marginLeft: '8px' }}>
              {/* <Link to={`DetailTickets/${props.item.id}`} style={{ textDecoration: 'none', marginLeft: '8px' }}> */}
              <Button variant="outlined" size="small" color="primary">View</Button>
              </Link>
          </Box></TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Feedback = () => {
  const theme=useTheme()
  const [roleMember, setRoleMember] = React.useState('ALL');

  React.useEffect(() => {
    document.title = 'Menu Members';
  }, []);


  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  return (
  <Container>
    <Grid item md={12} xl={12} sm={12} >
        <h1>Feedback From User</h1>
    </Grid> 
    <Grid item md={12} xl={12} sm={12} >
    <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : 'none' }}>
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
                      key={headCell.id}
                      align={headCell.numeric ? 'center' : 'center'}
                      sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                          active={orderBy === headCell.id}
                          direction={orderBy === headCell.id ? order : 'asc'}
                          onClick={(event) => {
                            handleRequestSort(event, headCell.id);
                          }}
                          style={{ fontWeight: 'bold' }}
                        >
                          {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                  )  )}
                </TableRow>
              </TableHead>   
              {/* Table Content */}
              <TableBody>   
                {stableSort(dataTable, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((rowItem, index) => {
                    return <RowItem key={rowItem.code} item={rowItem} />;
                  })}
              </TableBody>
            </Table>
          </TableContainer>
      {/* Table Pagination */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        <span>
          <Button sx={{ width: 'max-content' }}>Pagination 1 (1-100)</Button>
        </span>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={dataTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            [theme.breakpoints.up('sm')]: { justifyContent: 'right' },
          }}
        />
      </Box>
  </Grid>
  </Container>
  )
}

export default Feedback