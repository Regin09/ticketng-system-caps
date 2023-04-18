import React, { Fragment } from 'react'
import ToggleButtonSizes from '../../components/toggle-button/ToggleTickets'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import "./tickets.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const Tickets = () => {
  const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
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

  const columns = [
    { id: 'id', label: 'Ticket ID', minWidth: 70, align:'center'},
    { id: 'subjects', label: 'Subjects', minWidth: 200,align:'center' },
    {
      id: 'assigned',
      label: 'Assigned',
      minWidth: 120,
      align: 'center',
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 150,
      align: 'center',
    },
    {
      id: 'client',
      label: 'Client',
      minWidth: 15,
      align: 'center',
    },
    {
      id:'priority',
      label:'Priority',
      minWidth: 100,
      align: 'center',
    }, 
    {
      id:'action',
      label:'Action',
      minWidth: 100,
      align: 'center',
    }
  ];
  function createData(id, subjects, assigned, status, client, priority,action) {
    return { id, subjects, assigned, status, client, priority,action };
  }
  
  const rows = [
    createData('21', 'Host 14 is down', 'regingeorgius', 'Selected', 'ITB', 'Critical','View&Delete'),
    createData('22', 'Ubuntu hardening', 'tono36', 'Done', 'BRI', 'High','View&Delete'),
    createData('23', 'Host 17 is out of memory ', 'smith39', 'To-do','ITB','Medium','View&Delete'),
    createData('24', 'Kubernetes is down ', 'jana37', 'In-Progress', 'ITB', 'Low','View&Delete'),
  ];
  
  return (
<Fragment>
  <div className="induk-toglee">
    <Grid container spacing={2}>
      <Grid item md={6} xl={6} sm={6} className='induk-togle1'>
        <div className="togle-button">
          <ToggleButtonSizes MenuName={['All','Selected','To-Do','In-Progress','Done']} />
        </div>
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
      <Grid item md={12} xl={12} sm={12} className='induk-togle3'>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
      </Grid>
    </Grid>
  </div>
  </Fragment>
   
  )
}


export default Tickets

