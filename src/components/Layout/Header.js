import React,{useState} from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { Link } from 'react-router-dom';
import "../../styles/Headerstyle.css";
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/logo.svg'

const Header = () => {
  const[mobileOpen , setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography color={'darkgreen'} variant='h6' component="div" sx={{flexGrow:1}}>
              <DinnerDiningIcon/>
              Canteen
              </Typography>
              
                <ul className='mobile-navigation'>
                  <li>
                    <Link to={'/home'}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/menu'}>Menu</Link>
                  </li>
                  <li>
                    <Link to={'/booking'}>Booking</Link>
                  </li>
                  <li>
                    <Link to={'/about'}>About</Link>
                  </li>
                  <li>
                    <Link to={'/location'}>Location</Link>
                  </li>
                  <li>
                    <Link to={'/contact'}>Contact</Link>
                  </li>
                </ul>
              
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'white' }}>
          <Toolbar>
            <IconButton color="black" aria-label="open drawer" edge="start" sx={{mr:2 , display: { sm: "none"},}}>
              <MenuIcon/>
            </IconButton>
            <Typography color={'darkgreen'} variant='h6' component="div" sx={{flexGrow:1}}>
              <img src={Logo} alt='logo' height={'100'} width={'250'} style={{marginTop:'5px'}}></img>
              </Typography>
              <Box sx={{display:{xs:'none' , sm:'block'},
              }}
              onClick={handleDrawerToggle}
              >
                <ul className='navigation-menu'>
                  <li>
                    <Link to={'/home'}>Home</Link>
                  </li>
                  <li>
                    <Link to={'/menu'}>Menu</Link>
                  </li>
                  <li>
                    <Link to={'/booking'}>Booking</Link>
                  </li>
                  <li>
                    <Link to={'/about'}>About</Link>
                  </li>
                  <li>
                    <Link to={'/location'}>Location</Link>
                  </li>
                  <li>
                    <Link to={'/contact'}>Contact</Link>
                  </li>
                </ul>
              </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
            sx={{display:{xs:'block' , sm:'none'}}}
            >
              {drawer}
            </Drawer>
        </Box>
        <Toolbar/>
      </Box>
    </>
  )
}

export default Header