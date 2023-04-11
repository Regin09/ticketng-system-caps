import React from 'react'
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

const Tickets = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id));
  };

  const actionColumn = [
    {
      field:"action", 
      headerName: "Action", 
      width:200, 
      renderCell:(params)=> {
        return (
          <div className="cellAction">
            <Link to ="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
      </div>
      );
    },
  },
  ];

  return (
<Container>
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
            Delete Ticket
          </Button>
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
            Create Ticket
          </Button>
        </Stack>
      </Grid>
      <Grid item md={12} xl={12} sm={12} className='induk-togle3'>
        <div className="datatable">
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={13}
            rowsPerPageOptions={[5]}
            checkboxSelection
            sx={{
              background:"#FFFFFF",
            }}
          />
        </div>
      </Grid>
    </Grid>
  </div>
</Container>
   
  )
}


export default Tickets

