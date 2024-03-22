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
            <Grid container justifyContent="center" spacing={1}>

                <Grid item xs={12}>
                    <Card style={{ marginTop: '-20px' }}>


                        <CardContent>
                            <Box mb={1}>
                                <h4 className='arabic-text' style={{ color: 'blue' }}> <strong>  ادوات الجزم</strong></h4>

                               

                                <NumberDisplay>
                                    <p className='arabic-text'>
                                       
                                        أمثلة:<br></br>

                                        <br></br>لَمْ: يفرطْ خالد في الأمانة.

                                        <br></br>لَمَّا: حان الموعد ولمّا يصـلْ زيد.

                                        <br></br>لامُ الأمْرِ: لِـتَنْتَبِـهْ إلى إشارات المرور.

                                        <br></br>لا الناهية: لا تَتَدَخَّـلْ فيما لا يَعْنِيكَ.


                                    </p>
                                </NumberDisplay>
                                <NumberDisplay>
                                    <br></br>* بقية أدوات الجزم (وهي أدوات الشرط) تجزم فعلين.
                                </NumberDisplay>

                                <NumberDisplay>
                                <p className='arabic-text'>
                                <strong>أمثلة</strong>:<br></br>
                                <br></br>*  إنْ: تَصْبِـرْ تَصِـلْ إلَى هَدَفِكَ.

                                <br></br>مَنْ: مَنْ يَزْرَعْ يَحْصُـدْ.

                                <br></br>مَا: مَا تَفْعَـلْ مِنْ خَيْرٍ تُجْزَ بِهِ.

                                <br></br>أنَّى: أَنَّى تَتَّجِـهْ تَجِـدْ خَيْرًا.

                                <br></br>مَهْمَا: مَهْمَا تَفْعَـلْ يَعْلَـمْـهُ اللهُ.

                                <br></br>أٌّيٌّ: أَّيَّ كِتابٍ تَقْرَأْ تَسْتَفِـدْ مِنْهُ.

                                <br></br>مَتَى: مَتَى تَسْتَعِنْ بِزَيْدٍ يُعِنْكَ.

                                <br></br>أيّانَ: أيّانَ تَسْأَلْــنِي أجِـبْـكَ.

                                <br></br>أَيْنَ: أَيْنَ تُسافِـرْ أُرافِـقْــكَ.
                                </p>
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
