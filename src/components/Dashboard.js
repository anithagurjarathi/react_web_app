import React from 'react';
import { Box, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');

  const data = [
    { name: 'Name', value: userData.name ? 1 : 0 },
    { name: 'Address', value: userData.address ? 1 : 0 },
    { name: 'Email', value: userData.email ? 1 : 0 },
    { name: 'Phone', value: userData.phone ? 1 : 0 },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>User Profile Overview</Typography>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </Box>
  );
};

export default Dashboard;