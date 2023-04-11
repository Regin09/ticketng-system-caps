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

const Members = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter(item=>item.id !== id));
  };

  const actionColumn = [
    {
      field:"action", 
      headerName: "Action", 
      width:100, 
      renderCell:(params)=> {
        return (
          <div className="cellAction">
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
      <Grid item md={12} xl={12} sm={12} className='induk-togle1'>
        <div className="togle-button">
          <ToggleMembers MenuName={['Engineer','User','Admin']} />
        </div>
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

export default Members