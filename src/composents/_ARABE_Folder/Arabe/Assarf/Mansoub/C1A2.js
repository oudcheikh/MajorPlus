import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/system';

import { ImageContainer } from '../../../../Styles/MajorStyles';



const StyledBox = styled(Box)({

});

const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#E1F5FE',
    border: '3px dashed #B3E5FC',
    transition: 'background-color 0.4s, transform 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Comic Sans MS', sans-serif",
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));



const C1A2 = () => {



    return (
        <StyledBox>
            <Grid container justifyContent="center" spacing={2}>

                <Grid item xs={12}>
                    <Card style={{ marginTop: '-20px' }}>
                      

                        <CardContent>
                            <Box mb={1}>
                                <h4 className='arabic-text' style={{ color: 'blue' }}> <strong>  ادوات النصب</strong></h4>

                                <NumberDisplay >
                                    أدوات النصب هي: أن، لن، إذن، كي، لام كي، لام الجحود، حتَّى، ("فَـ، وَ، أَوْ" في جواب النفي أو الطلب).

                                </NumberDisplay>


                            </Box>


                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default C1A2;
