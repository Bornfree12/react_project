import React, { useState } from 'react';
import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import Layout from '../components/Layout/Layout';

const Booking = () => {
  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedTable, setSelectedTable] = useState(null);
  const [reservationDetails, setReservationDetails] = useState({
    name: '',
    sapId: '',
    rollNo: ''
  });

  const handleDateTimeChange = (event) => {
    setSelectedDateTime(event.target.value);
  };

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
  };

  const handleTableClick = (tableIndex) => {
    setSelectedTable(tableIndex);
  };

  const handleNameChange = (event) => {
    setReservationDetails({ ...reservationDetails, name: event.target.value });
  };

  const handleSapIdChange = (event) => {
    setReservationDetails({ ...reservationDetails, sapId: event.target.value });
  };

  const handleRollNoChange = (event) => {
    setReservationDetails({ ...reservationDetails, rollNo: event.target.value });
  };

  const handleBooking = () => {
    const amount = calculateAmount(numberOfPeople);
    alert(`Booking confirmed for ${numberOfPeople} people on ${selectedDateTime}. Total amount: $${amount}. Table: ${selectedTable + 1}`);
  };

  const calculateAmount = (numberOfPeople) => {
    return numberOfPeople * 10; // $10 per person
  };

  return (
    <Layout>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ m: 10 }}>
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
            <TextField
              fullWidth
              id="name"
              label="Name"
              value={reservationDetails.name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="sapId"
              label="SAP ID"
              value={reservationDetails.sapId}
              onChange={handleSapIdChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="rollNo"
              label="Roll No"
              value={reservationDetails.rollNo}
              onChange={handleRollNoChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {Array.from({ length: 12 }, (_, index) => (
                <Grid item key={index} xs={6} md={3}>
                  <div
                    style={{ position: 'relative', cursor: 'pointer', textAlign: 'center' }}
                    onClick={() => handleTableClick(index)}
                  >
                    <div
                      style={{
                        width: '100px',
                        height: '60px',
                        backgroundColor: selectedTable === index ? 'green' : 'brown',
                        borderRadius: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '16px',
                      }}
                    >
                      Table {index + 1}
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button sx={{bgcolor:'black'}}
              variant="contained"
              fullWidth
              disabled={selectedTable === null}
              onClick={handleBooking}
            >
              Book Table
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Booking;
