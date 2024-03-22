import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Fab, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import { styled } from '@mui/system';


const StyledBox = styled(Box)({

});




const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: '200px', // Ajustez la hauteur selon vos besoins
    margin: '20px auto',
    padding: 'auto',
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



const C1A1 = ({ verbData }) => {
 

    const singularTerm = verbData.terms.find(term => term.tense === "المفرد");
    const mathnaTerm = verbData.terms.find(term => term.tense === "المثنى");
    
    const aljamaa = verbData.terms.find(term => term.tense === "الجمع");

    if (!singularTerm) {
        return <div>Données de terme 'المفرد' non trouvées</div>;
    }
    // const v = verbData.terms[0].options["انتِ"]
    if (!verbData) {
        return <div>Verbe non trouvé</div>;
    }

    const { فعل, انت, انتِ } = verbData;
    return (
        <StyledBox>
            <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} md={12}>
                    <Card style={{ marginTop: '-100px' }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Box className='arabic-text'>




                                        <strong>المفرد</strong>
                                        <NumberDisplay >
                                            <span className='arabic-text'>
                                                <div>

                                                    <ul>
                                                        {Object.entries(singularTerm.options).map(([person, conjugation]) => (
                                                            <li key={person}>{person}: {conjugation}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                            </span>
                                        </NumberDisplay>
                                        <br></br>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box className='arabic-text'>
                                        <strong>المثنى</strong>
                                        <NumberDisplay >
                                            <span className='arabic-text'>

                                                <div>

                                                    <ul>
                                                        {Object.entries(mathnaTerm.options).map(([person, conjugation]) => (
                                                            <li key={person}>{person}: {conjugation}
                                                        
                                                            </li> 
                                                        ))}
                                                    </ul>
                                                </div>

                                            </span>
                                        </NumberDisplay>
                                        <br></br>
                                    </Box>
                                </Grid>
                                <Grid item xs={4}>
                                    <Box className='arabic-text'>
                                        <strong>الجمع</strong>
                                        <NumberDisplay >
                                            <span className='arabic-text'>
                                            <div>

<ul>
    {Object.entries(aljamaa.options).map(([person, conjugation]) => (
        <li key={person}>{person}: {conjugation}
    
        </li> 
    ))}
</ul>
</div>
                                            </span>
                                        </NumberDisplay>
                                    </Box>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledBox>
    );
};

export default C1A1;
