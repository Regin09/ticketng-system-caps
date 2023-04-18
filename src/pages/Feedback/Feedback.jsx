import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesourcefeedback";
import { useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
const Feedback = () => {

  const columns = [
    { id: 'id', label: 'ID', minWidth: 80, align:'center' },
    { id: 'sender', label: 'Sender', minWidth: 100, align:'center' },
    {
      id: 'client',
      label: 'Client',
      minWidth: 100,
      align: 'center',
    },
    {
      id: 'engineer',
      label: 'Engineer',
      minWidth: 120,
      align: 'center',
    },
    {
      id: 'feedback',
      label: 'Feedback',
      minWidth: 150,
      align: 'center',
    },
    {
      id:'created',
      label: 'Created Date',
      minWidth: 120,
    },
    {
      id:'action',
      label:'Action',
      minWidth: 70,
    }
  ];
  
  function createData(id, sender, client, engineer, feedback, created, action) {
    return { id, sender, client, engineer, feedback, created, action };
  }
  
  const rows = [
    createData('1', 'jim24', 'DST', 'adikuncoro','Detail of Feedback','10/10/2022','Logo'),
    createData('2', 'hanif45', 'ATH', 'jimmy55','Detail of Feedback','05/10/2022','Logo'),
    createData('3', 'syalaf11', 'YML', 'Simon33','Detail of Feedback','12/10/2022','Logo'),
  ];
  
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
  //     width:100, 
  //     renderCell:(params)=> {
  //       return (
  //         <div className="cellAction">
  //         <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
  //     </div>
  //     );
  //   },
  // },
  // ];
  return (
  <Container>
    <Grid item md={12} xl={12} sm={12} >
        <h1>Feedback From User</h1>
    </Grid> 
    <Grid item md={12} xl={12} sm={12} >
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
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
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
    </Grid> 
  </Container>
  )
}

export default Feedback