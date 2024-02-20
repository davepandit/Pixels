import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">   
      <Button variant="contained" sx={{
        backgroundColor: '#ffffff', // Set the background color to white
        color: '#000000', // Set the text color to black
        width:"100px",
        height:"60px",
        padding:"10px",
        '&:hover': {
            backgroundColor: '#ffffff', // Change color on hover if needed
            color: '#000000'
          },
          fontWeight: "bold",
      }}>Upload</Button>
    </Stack>
  );
}