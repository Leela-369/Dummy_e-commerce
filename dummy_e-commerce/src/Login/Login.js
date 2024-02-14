import React, { useState } from 'react';
import { Container, TextField, Button, Card, CardContent, Typography, Box, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery('(max-width:960px)'); // Check for medium screen size

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // Login process
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
      })
    })
      .then(res => res.json())
      .then(data => {
        setToken(data.token);
        localStorage.setItem('token', data.token); // Save token to localStorage
        onLogin();
        navigate('/home');
      });
  };

  return (
    <Container maxWidth="sm" className='container'>
      <Box sx={{ display: 'flex', flexDirection: isMediumScreen ? 'column' : 'row', mt: '20vh' }}>
        <Card sx={{ width: '100%', height: '100%', mr: isMediumScreen ? 0 : '10px', mb: isMediumScreen ? '10px' : 0 }}>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              Login
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              sx={{ mb: '1vh' }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!username || !password} // Disable button if fields are empty
            >
              Login
            </Button>
            {token ? <Typography variant="body1">Logged in successfully!</Typography> : <Typography variant="body1">Use sample details to login</Typography>}
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', height: '100%', backgroundColor: '#1e88e5', mb: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography variant='h5' sx={{ color: '#FFFFFF',mt: '13.5vh' }}>Sample User</Typography>
            <Typography variant='body1' sx={{ color: '#FFFFFF'  }}>username: kminchelle</Typography>
            <Typography variant='body1' sx={{ color: '#FFFFFF',mb: '18vh' }}>password: 0lelplR</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default Login;
