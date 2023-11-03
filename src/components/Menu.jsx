import React from 'react';
import styled from 'styled-components';
import { Paper, Typography, Button } from '@mui/material';

const Menu = () => {
  return (
    <Container>
        <StyledPaper elevation={5}>
        <StyledImg src='./images/fish and meat.jpg' alt={`Fish and Meat`}/>
        <Typography align="center" sx={{ padding: '16px',fontWeight:'bold',fontSize:'1.7vw' }}>
                Meat & Fish
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#82c619",fontWeight:'bold',':hover': {
        bgcolor: '#61970d', 
        color: 'white',},}}>
                Shop Now
        </Button>
        <Typography align="center" sx={{ padding: '10px', fontSize:'1.3vw'}}>
            Available Halal Meat, Beef & Chicken, as well as Fresh Fish
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5}>
        <StyledImg src='./images/produce.jpg' alt={`Fish and Meat`} />
        <Typography align="center" sx={{ padding: '16px',fontWeight:'bold', fontSize:'1.7vw' }}>
                Produce
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#82c619",fontWeight:'bold',':hover': {
        bgcolor: '#61970d', 
        color: 'white',},}}>
                Shop Now
        </Button>
        <Typography align="center" sx={{ padding: '10px', fontSize:'1.3vw'}}>
        Fresh Fruits & Vegetables directly getting from the farms
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5}>
        <StyledImg src='./images/grocery.jpg' alt={`Fish and Meat`} />
        <Typography align="center" sx={{ padding: '16px',fontWeight:'bold', fontSize:'1.7vw' }}>
                Grocery
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#82c619",fontWeight:'bold',':hover': {
        bgcolor: '#61970d', 
        color: 'white'},}}>
                Shop Now
        </Button>
        <Typography align="center" sx={{ padding: '10px', fontSize:'1.3vw'}}>
        Provides wide variety of authentic regional grocery & spice products
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5}>
        <StyledImg src='./images/frozen.jpg' alt={`Fish and Meat`} />
        <Typography align="center" sx={{ padding: '16px',fontWeight:'bold', fontSize:'1.7vw' }}>
            Dairy & Frozen
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#82c619",fontWeight:'bold',':hover': {
        bgcolor: '#61970d', 
        color: 'white',},}}>
                Shop Now
        </Button>
        <Typography align="center" sx={{ padding: '10px', fontSize:'1.3vw'}}>
        Fresh Dairy & Frozen products served as per requirements
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5}>
        <StyledImg src='./images/beautyProducts.jpg' alt={`Fish and Meat`} />
        <Typography align="center" sx={{ padding: '10px',fontWeight:'bold',fontSize:'1.7vw' }}>
            Beauty Products
        </Typography>
        <Button variant="contained" sx={{backgroundColor:"#82c619",fontWeight:'bold',':hover': {
        bgcolor: '#61970d', 
        color: 'white',},}}>
                Shop Now
        </Button>
        <Typography align="center" sx={{ padding: '10px', fontSize:'1.3vw'}}>
        Available most of the beauty products as per regular needs
        </Typography>
        </StyledPaper>
      
    </Container>
  )
}

const Container = styled.div`
margin-top:10vh;
margin-bottom:10vh;
display:flex;
gap:1vw;
flex-wrap:wrap;
justify-content:center;
align-items:center;

@media (max-width: 768px) {
    flex-direction:column;
}

`
const StyledPaper = styled(Paper)`
width:18vw;
min-height:65vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width: 768px) {
    height:auto;
    width:90%;
    margin-top:10px;
    padding:10px;
}

`

const StyledImg = styled.img`
padding:5px;
width:90%;
height:30vh;
object-fit: cover;
borderRadius:3%;
transform: scale(1);
transition: transform 0.3s ease; 
&:hover {
    transform: scale(1.1);
}
`

export default Menu
