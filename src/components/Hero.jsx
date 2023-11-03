import React from 'react';
import styled from '@emotion/styled';
import { AppBar, InputAdornment, Toolbar, Typography, Button,Hidden, IconButton, Container, Box, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const Hero = () => {
  return (
    <HeroImgContainer>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container>
        <Toolbar>
          <Hidden mdUp>
            {/* Display the menu icon (hamburger) only on small screens */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <img src="/path/to/your-logo.png" alt="Logo" style={{ height: 48 }} />
          </Typography>
          <Hidden smDown>
            {/* Display navigation links only on screens larger than small */}
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Shop</Button>
            <Button color="inherit">Contact</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Sign Up</Button>
            <Button color="inherit">Cart</Button>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>

    <StyledBox>
      <StyledTextField placeholder="Search" InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton  sx={{
                bgcolor: '#72e82b', 
                borderRadius: '10%',
                width:'4rem', 
              }}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}/>
    </StyledBox>
       
    </HeroImgContainer>
  )
}

const HeroImgContainer = styled.div`
  height: 50vh;
  width: 100vw;
  background: url('./images/image1.jpg') no-repeat;
  background-size: cover;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
  }
`;

const StyledBox = styled(Box)`
  width:100vw;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index: 3;

  
`;

const StyledTextField = styled(TextField)`
  width: 50%;
  background-color: white;
  border-radius: 5%;
`;

export default Hero;
