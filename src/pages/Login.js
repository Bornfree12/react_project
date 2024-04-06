import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const Navigate = useNavigate();

  const containerStyle = {
    width: '400px',
    margin: 'auto',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  };

  const inputStyle = {
    margin: '10px 0',
    width: '100%',
  };

  const buttonStyle = {
    marginTop: '20px',
  };

  const handleSignUpClick = () => {
    Navigate('/registration');
  };

  const handleLoginClick = () => {
    Navigate('/home');
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h2>
        <form>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            style={inputStyle}
            InputProps={{
              startAdornment: (
                <AccountCircleIcon />
              ),
            }}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            style={inputStyle}
            InputProps={{
              startAdornment: (
                <LockIcon />
              ),
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={handleLoginClick} style={buttonStyle} color="primary">
              Login
            </Button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button onClick={handleSignUpClick} color="primary">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
