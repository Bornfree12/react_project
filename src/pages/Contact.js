import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10 , ml:10 , "& h4":{fontWeight:"bold" , mb:2}}}>
          <Typography variant='h4'>
            Conatct Us
          </Typography>
          <p>
            Feel free to contact us for any queries.
          </p>
        </Box>
        <Box sx={{m:3 , width:"600px" , ml:10 ,"@media (max-width:600px)": {
            width: "300px",
          },}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black' , color:"white" , textAlign:'center'}}>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:"red" , pt:1}}/>7506807013 (tollfree)
                  </TableCell>
                  </TableRow>
                  <TableRow>
                  <TableCell>
                    <EmailIcon sx={{color:"skyblue" , pt:1}}/>nmimssupport.edu.in
                  </TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact