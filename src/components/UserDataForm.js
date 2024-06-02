import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

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
    const handleBeforeUnload = (e) => {
      if (isFormDirty) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isFormDirty]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setIsFormDirty(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now().toString();
    localStorage.setItem('userData', JSON.stringify({ ...userData, id }));
    setIsFormDirty(false);
  
  };

  return (
    <Box component="form" onSubmit={handleSubmit} p={4}>
      <TextField label="Name" name="name" fullWidth onChange={handleChange} />
      <TextField label="Address" name="address" fullWidth onChange={handleChange} />
      <TextField label="Email" name="email" fullWidth onChange={handleChange} />
      <TextField label="Phone" name="phone" fullWidth onChange={handleChange} />
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </Box>
  );
};

export default UserDataForm;