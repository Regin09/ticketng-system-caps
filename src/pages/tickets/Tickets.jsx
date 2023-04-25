import React, { Fragment } from 'react'
import {Button,styled, useTheme }  from '@mui/material'
import Grid from '@mui/material/Grid';
import "./tickets.css";
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import MuiToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Container } from '@mui/material';

const headCells = [
  {
    id: 'id',
    numeric: false,
    label: 'Ticket ID',
  },
  {
    id: 'subjects',
    numeric: true,
    label: 'Subjects',
  },
  {
    id: 'assigned',
    numeric: true,
    label: 'Assigned',
  },
  {
    id: 'status',
    numeric: true,
    label: 'Status',
  },
  {
    id: 'client',
    numeric: false,
    label: 'Client',
  },
  {
    id: 'priority',
    numeric: true,
    label: 'Priority',
  },
];

const dataTable = [
  {
    id: '20',
    subjects: 'Host 14 is Down',
    assigned: 'regingeorgius',
    status: 'Selected',
    client: 'ITB',
    priority: 'Critical',
  },
  {
    id: '21',
    subjects: 'Ubuntu hardening',
    assigned: 'tono36',
    status: 'Done',
    client: 'BRI',
    priority: 'Critical',
  },
  {
    id: '22',
    subjects: 'Host 17 is out of memory ',
    assigned: 'smith39',
    status: 'To-Do',
    client: 'ITB',
    priority: 'Critical',
  },
  {
    id: '23',
    subjects: 'Kubernetes is Down',
    assigned: 'smith39',
    status: 'In-Progress',
    client: 'ITB',
    priority: 'Critical',
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
  return (
    <React.Fragment>
      <TableRow hover>
        <TableCell sx={{color:1+1===2?'red':'purple'}} >{props.item.id}</TableCell>
        <TableCell align="center">{props.item.subjects}</TableCell>
        <TableCell align="center">{props.item.assigned}</TableCell>
        <TableCell align="center" 
        sx={{color: props.item.status === 'Selected' ?  "black" : props.item.status === 'Done' ? "red" : props.item.status === 'To-Do' ? '#FF8A00': props.item.status === 'In-Progress' ? "#1B8500" : 'none'}}
        >{props.item.status}
        </TableCell>
        <TableCell align="center">{props.item.client}</TableCell>
        <TableCell align="center">
          <div style={{
              height: '17px',
              width: '17px',
              backgroundColor: '#FF0000',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '7px',
            }}>
            </div>
          {props.item.priority}
          </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const Tickets = () => {
  const theme=useTheme()
  const [statusTicket, setStatusTicket] = React.useState('ALL');

  React.useEffect(() => {
    document.title = 'Menu Tickets';
  }, []);

  const ToggleButton = styled(MuiToggleButton)({
    '&.Mui-selected, &.Mui-selected:hover': {
      color: '#1F305C !important',
      backgroundColor: 'rgba(31, 48, 92, 0.25)',
    },
  });

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const [page, setPage] = React.useState(0);
  //   const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  //   const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  //   };
  
  //   const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  //   };
  // const [data, setData] = useState(userRows)
  // const handleDelete = (id)=>{
  //   setData(data.filter(item=>item.id !== id));
  // };

  // const actionColumn = [
  //   {
  //     field:"action", 
  //     headerName: "Action", 
  //     width:200, 
  //     renderCell:(params)=> {
  //       return (
  //         <div className="cellAction">
  //           <Link to ="/users/test" style={{ textDecoration: "none" }}>
  //           <div className="viewButton">View</div>
  //         </Link>
  //         <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
  //     </div>
  //     );
  //   },
  // },
  // ];
  return (
<Container>
  <div className="induk-toglee">
    <Grid container spacing={2}>
    <Grid item xs={12} md={6} xl={4} className='induk-togle1'>
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
          [theme.breakpoints.down('sm')]: {
            height: '35px !important',
          },
        }}
      >
        <ToggleButton value="ALL" sx={{ border: '1px solid #1F305C' }}>
          ALL
        </ToggleButton>
        <ToggleButton value="Selected" sx={{ border: '1px solid #1F305C' }}>
          Selected
        </ToggleButton>
        <ToggleButton value="To-Do" sx={{ border: '1px solid #1F305C' }}>
          To-Do
        </ToggleButton>
        <ToggleButton value="In-Progress" sx={{ border: '1px solid #1F305C' }}>
          In-Progress
        </ToggleButton>
        <ToggleButton value="Done" sx={{ border: '1px solid #1F305C' }}>
          Done
        </ToggleButton>
      </ToggleButtonGroup>
      
      {statusTicket.toUpperCase()}
      {/* Tambahin Grid Container */}
        
      </Grid>
      
      <Grid item md={6} xl={6} sm={6} className='induk-togle2'>
        <Stack spacing={2} direction="row">
          <Button 
            variant="contained"
            sx={{
              color:"black",
              background:"#FFFFFF",
              height:"36px",
              "&:hover":{
                backgroundColor:"white"
              }
              }}>
                <DeleteOutlineOutlinedIcon 
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "2px",
                  cursor: "pointer",
                  marginTop: "3.4px",
                  marginBottom: "5px",
                }}
                  />
            Delete Ticket
          </Button>
          <Link to="createTickets" style={{textDecoration:"none",color:"black"}}>
          <Button 
            variant="contained" 
            sx={{
              color:"black",
              background:"#FFFFFF",
              height:"36px",
              "&:hover":{
                backgroundColor:"white"
              }
              }}>
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
        </Stack>
      </Grid>
      </Grid>
      </div>
      
      <TableContainer sx={{ maxHeight: rowsPerPage !== 10 ? 800 : 'none' }}>
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
            {stableSort(dataTable.filter((e)=>{
              // return true
              return statusTicket==='ALL'?true: e.status===statusTicket 
            // if(e.status===statusTicket)
            }
            ), getComparator(order, orderBy))
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
          <TableBody>
            {dataTable
            
              .map((dataTable) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={rowsPerPage.code}>
                    {headCells.map((column) => {
                      const value = rowsPerPage[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                            {rowsPerPage.status}

                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
  
  </Container>
   
  )
}


export default Tickets

