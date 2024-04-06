import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LockIcon from '@mui/icons-material/Lock';

const Registration = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    sapId: '',
    rollNo: '',
    contactNo: '',
    stream: '',
    password: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle registration logic here
    Navigate('/');
  };

  return (
    <div style={{ paddingTop: '100px', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Registration</h2>
        <form>
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            style={inputStyle}
            onChange={handleChange}
            InputProps={{
              startAdornment: <AccountCircleIcon />,
            }}
          />
          <TextField
            id="sapId"
            name="sapId"
            label="SAP ID"
            variant="outlined"
            style={inputStyle}
            onChange={handleChange}
            InputProps={{
              startAdornment: <PermIdentityIcon />,
            }}
          />
          <TextField
            id="rollNo"
            name="rollNo"
            label="Roll No"
            variant="outlined"
            style={inputStyle}
            onChange={handleChange}
            InputProps={{
              startAdornment: <FormatListBulletedIcon />,
            }}
          />
          <TextField
            id="contactNo"
            name="contactNo"
            label="Contact No"
            variant="outlined"
            style={inputStyle}
            onChange={handleChange}
            InputProps={{
              startAdornment: <PhoneIcon />,
            }}
          />
          <TextField
            id="stream"
            name="stream"
            select
            label="Stream"
            value={formData.stream}
            onChange={handleChange}
            variant="outlined"
            style={inputStyle}
            InputProps={{
              startAdornment: <FormatListBulletedIcon />,
            }}
          >
            <MenuItem value="Engineering">Engineering</MenuItem>
            <MenuItem value="Medical">Medical</MenuItem>
            <MenuItem value="Commerce">Commerce</MenuItem>
            <MenuItem value="Arts">Arts</MenuItem>
          </TextField>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            style={inputStyle}
            onChange={handleChange}
            InputProps={{
              startAdornment: <LockIcon />,
            }}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={handleSubmit} style={buttonStyle} color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
