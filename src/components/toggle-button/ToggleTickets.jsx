import * as React from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonSizes(props) {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left"
    sx={{borderRadius:'8px',height:"36px"}}>
      {props.MenuName[0]}
    </ToggleButton>,
    <ToggleButton value="center" key="center"
    sx={{borderRadius:'8px',height:"36px"}}>
    {props.MenuName[1]}
      </ToggleButton>,
    <ToggleButton value="right" key="right"
    sx={{borderRadius:'8px',height:"36px"}}>
    {props.MenuName[2]}
      </ToggleButton>,
    <ToggleButton value="justify" key="justify"
    sx={{borderRadius:'8px',height:"36px"}}>
    {props.MenuName[3]}
    </ToggleButton>,
    <ToggleButton value="ayam" key="justify"
     sx={{borderRadius:'8px',height:"36px"}}>
     {props.MenuName[4]}
     </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <React.Fragment>
    <Stack spacing={2} alignItems="center">
      <ToggleButtonGroup onSelect={(e)=>{console.log(e)}} {...control} 
      aria-label="Medium sizes"
      >
        {children}
      </ToggleButtonGroup>
    </Stack>
    
    </React.Fragment>
    
    
  );
}