import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center" , bgcolor:"wheat" , color:"darkgreen" , p:3}}>
        <Box sx={{my:3 , "& svg":{
            fontSize:"60px",
            cursor:"pointer",
            mr:"2",
        },
         "& svg:hover":{
            color:'black',
            transform:'translateX(5px)',
            transition:'all 400ms',
         }
        }}>
            {/* {icons} */}
            <InstagramIcon/>
            <TwitterIcon/>
            <FacebookIcon/>

        </Box>
        <Typography variant='h5'>
            All Rights Reserved &copy;
        </Typography>
    </Box>
       
    </>
  )
}

export default Footer