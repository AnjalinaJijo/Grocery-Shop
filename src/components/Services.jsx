import React from 'react'
import styled from 'styled-components';
import { Paper, Typography, Button } from '@mui/material';

const Services = () => {
  return (
      <Container>
        <StyledPaper elevation={5} sx={{backgroundColor: '#282f38'}}>
        <Typography variant="subtitle1" align="center" sx={{ padding: '16px',fontWeight:'bold' }}>
               Online Booking
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px'}}>
            Above $20 only
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5} sx={{backgroundColor: '#282f38'}}>
        <Typography variant="subtitle1" align="center" sx={{ padding: '16px',fontWeight:'bold' }}>
                Certified Organic
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px'}}>
        100% Guarantee
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5} sx={{backgroundColor: '#282f38'}}>
        <Typography variant="subtitle1" align="center" sx={{ padding: '16px',fontWeight:'bold' }}>
                Huge Savings
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px'}}>
        At Lowest Price
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5} sx={{backgroundColor: '#282f38'}}>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px',fontWeight:'bold' }}>
            Easy Returns
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px'}}>
        No Questions Asked
        </Typography>
        
        </StyledPaper>
      
    </Container>
  )
}
const Container = styled.div`
padding-top:10vh;
padding-bottom:10vh;
height:50vh;
display:flex;
gap:4vw;
flex-wrap:wrap;
justify-content:center;
align-items:center;
background-color:#283747 ;

@media (max-width: 768px) {
    flex-direction:column;
}

`
const StyledPaper = styled(Paper)`
width:18vw;
min-height:40vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
// background-color: lightblue;


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
height:200px;
object-fit: cover;
borderRadius:3%;
transform: scale(1);
transition: transform 0.3s ease; 
&:hover {
    transform: scale(1.1);
}
`


export default Services
