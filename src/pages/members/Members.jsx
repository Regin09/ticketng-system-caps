import React from 'react'
import "./members.css"
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesourcemembers";
import { Link } from "react-router-dom";
import { useState } from "react";
import ToggleMembers from '../../components/toggle-button/ToggleMembers';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const Members = () => {

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'username', label: 'Username', minWidth: 100 },
    {
      id: 'email',
      label: 'Email',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'role',
      label: 'Role',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'created',
      label: 'Created',
      minWidth: 170,
      align: 'center',
    },
    {
      id:'action',
      label:'Action',
      minWidth:50,
      align:'center'
    }
  ];
  
  function createData(name,username, email, role, created, action) {
    return { name,username, email, role, created, action };
  }
  
  const rows = [
    createData('John Smith', 'johntor', 'johnsmith@gmail.com', 'Engineer', '10/10/2022'),
    createData('Xenon Wallace', 'xenon69', 'xenonwallace@gmail.com','Engineer','05/10/2022'),
    createData('Marshall Nicols', 'marshall69','marshallnicols@gmail.com', 'Engineer','12/10/2022'),
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
  <div className="induk-toglee">
    <Grid container spacing={2}>
      <Grid item md={6} xl={6} sm={6} className='induk-togle1'>
        <div className="togle-button">
          <ToggleMembers MenuName={['Engineer','User','Admin']} />
        </div>
        </Grid>
        <Grid item md={6} xl={6} sm={6} className='induk-togle2'>
        <Link to="createAccount" style={{textDecoration:"none",color:"black"}}>
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
            Create Account
            </Button>
            </Link>
            </Grid>
            <Grid item md={12} xl={12} sm={12} className='induk-togle3'>
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
    </Grid>
  </div>      
      
  
</Container>
  )
}

export default Members