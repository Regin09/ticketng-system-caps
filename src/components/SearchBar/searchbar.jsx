import { IconButton, TextField } from '@mui/material';
import React from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const searchbar = () => {
    
  return (
    <div>
      <TextField
        label="Search Ticket"
        variant="filled"
        size="small"
        fullWidth
        sx={{background:'white',color:'white', width:'500px'}}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default searchbar