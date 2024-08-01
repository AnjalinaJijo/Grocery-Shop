import React from 'react'
import styled from 'styled-components';
import { Paper, Typography, Button } from '@mui/material';

const Services = () => {
  return (
      <Container>
        <StyledPaper elevation={5} sx={{backgroundColor:  'rgba(256,256,256,0.5)'}}>
        <Typography variant="subtitle1" align="center" sx={{ padding: '16px',fontWeight:'bold',color:"black",zIndex:5, }}>
               Online Booking
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px',color:"#020617"}}>
            Above $20 only
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5} sx={{backgroundColor:  'rgba(256,256,256,0.5)'}}>
        <Typography variant="subtitle1" align="center" sx={{ padding: '16px',fontWeight:'bold',color:"black",zIndex:5, }}>
                Certified Organic
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px',color:"#020617"}}>
        100% Guarantee
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5} sx={{backgroundColor:  'rgba(256,256,256,0.5)'}}>
        <Typography variant="subtitle1" align="center" sx={{ padding: '16px',fontWeight:'bold', color:"black",zIndex:5, }}>
                Huge Savings
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px',color:"#020617"}}>
        At Lowest Price
        </Typography>
        </StyledPaper>

        <StyledPaper elevation={5} sx={{backgroundColor: 'rgba(256,256,256,0.5)'}}>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px',fontWeight:'bold', color:"black",zIndex:5, }}>
            Easy Returns
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ padding: '10px',color:"#020617"}}>
        No Questions Asked
        </Typography>
        
        </StyledPaper>
      
    </Container>
  )
}
const Container = styled.div`
padding-top:10px;
padding-bottom:10px;
height:350px;
display:flex;
gap:4vw;
flex-wrap:wrap;
justify-content:center;
align-items:center;
background-color:#D7ECB5;

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
