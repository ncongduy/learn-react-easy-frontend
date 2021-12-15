import CodeIcon from '@mui/icons-material/Code';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NCD
          </Typography>

          <Button color="inherit">Todos</Button>
          <Button color="inherit">Albums</Button>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
