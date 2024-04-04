import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import Layout from '../components/Layout/Layout';

const Booking = () => {
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
  };

  const handleBooking = () => {
    const amount = calculateAmount(numberOfPeople);
    alert(`Booking confirmed for ${numberOfPeople} people on ${selectedDateTime}. Total amount: $${amount}`);
  };

  const calculateAmount = (numberOfPeople) => {
    return numberOfPeople * 10; // $10 per person
  };

  return (
    <Layout>
        <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Table Booking
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="datetime"
            label="Select Date and Time"
            type="datetime-local"
            value={selectedDateTime}
            onChange={handleDateTimeChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="numberOfPeople"
            label="Number of People"
            type="number"
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleBooking}>
            Book Table
          </Button>
        </Grid>
      </Grid>
    </Box>
    </Layout>
  );
};

export default Booking;
