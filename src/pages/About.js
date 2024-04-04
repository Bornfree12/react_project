import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:"center",
        p:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify",
          marginLeft:10,
          mr:10,
          fontSize:"20px",
        },
      }}>
        <Typography variant='h4'>
          Welcome to the <span style={{color:"darkgreen"}}>NMIMS Canteen</span>,where flavor meets convenience in a welcoming atmosphere!
        </Typography><br/>
        <p>
          At NMIMS Canteen, we're passionate about providing delicious, 
          wholesome meals and snacks to fuel your day. Whether you're grabbing a 
          quick bite between classes, enjoying a leisurely lunch with friends, 
          or refueling after a workout, our diverse menu has something to satisfy every craving.Our commitment to quality extends beyond just our food. We strive to create a vibrant and inclusive space where everyone feels welcome. From our friendly staff to our inviting ambiance, we aim to make your dining experience enjoyable and memorable.
        </p>
        <br/>
        <p>
        Locally sourced ingredients are at the heart of our culinary creations, allowing us to support our community while delivering fresh and flavorful dishes. From mouthwatering sandwiches and salads to hearty soups and entrees, each item on our menu is crafted with care and attention to detail.Whether you're a student, faculty member, or visitor, we invite you to experience the culinary delights that NMIMS Canteen has to offer. Join us for a meal and discover why we're more than just a canteen - we're a gathering place where great food and good times come together.
        </p>
        
      </Box>
    </Layout>
  )
}

export default About