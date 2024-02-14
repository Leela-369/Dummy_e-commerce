import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar({cartItemsCount, handleLogout}) {
  return (
    <AppBar position="static">
      <Toolbar sx={{justifyContent:'space-between'}}>
        <Box>
      <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dummy App
          </Typography>
        </Link>
        </Box>
        <Box>
        <Link to="/my-cart" style={{textDecoration:'none', color:'inherit'}}>
        <Badge badgeContent={cartItemsCount} color="primary">
          <ShoppingCartIcon />
        </Badge>
        <Button color="inherit">My Cart</Button>
      </Link>
      <Link to='/' style={{textDecoration:'none', color:'inherit'}}>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
