import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../datatablesourcefeedback";
import { useState } from "react";
const Feedback = () => {
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
    <Grid item md={12} xl={12} sm={12} >
        <h1>Feedback From User</h1>
    </Grid> 
    <Grid item md={12} xl={12} sm={12} >
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
              border: "1px solid rgba(0, 0, 0, 0.2)",
              borderRadius: "14px",
            }}
          />
        </div>
    </Grid> 
  </Container>
  )
}

export default Feedback