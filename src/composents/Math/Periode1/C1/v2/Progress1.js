import React from 'react';
import { Box, LinearProgress } from '@mui/material';

const Progress = ({ progressValue }) => {
    return (
        <Box sx={{ width: '100%', marginTop: '20px' }}>
            <LinearProgress variant="determinate" value={progressValue} />
        </Box>
    );
};

export default Progress;
