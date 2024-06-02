import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const UserDataForm = () => {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    address: '',
    email: '',
    phone: ''
  });
  const [isFormDirty, setIsFormDirty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Generate a unique user ID if not already generated
    if (!userData.id) {
      setUserData({ ...userData, id: `user_${Date.now()}` });
    }

   
    const handleBeforeUnload = (e) => {
      if (isFormDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isFormDirty, userData]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsFormDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsFormDirty(false);
    alert(`User ID: ${userData.id}`);
    navigate('/dashboard');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={4}>
      <Typography variant="h4" gutterBottom>
        User Data Form
      </Typography>
      
      <TextField
        label="Name"
        name="name"
        value={userData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Address"
        name="address"
        value={userData.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
        type="email"
        required
      />
      <TextField
        label="Phone"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default UserDataForm;
