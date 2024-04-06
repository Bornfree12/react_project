import React, { useState } from 'react';
import { MenuList } from '../data/data';
import Layout from '../components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Menu = () => {
  const [quantities, setQuantities] = useState(MenuList.map(() => 0));

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  return (
    <Layout>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {MenuList.map((menu, index) => (
          <Card key={index} sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia sx={{ minHeight: '400px' }} component={'img'} src={menu.image} alt={menu.name} />
              <CardContent>
                <Typography variant='h5' gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant='body2' gutterBottom component={"div"}>
                  {menu.description}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleDecrement(index)}>-</Button>
                <Typography variant='body2' component={"span"} sx={{ padding: '0 8px' }}>
                  {quantities[index]}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => handleIncrement(index)}>+</Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
