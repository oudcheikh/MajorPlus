import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

function LinearProgressBar({ currentStep, totalSteps }) {
  const calculateProgress = () => {
    return (currentStep / totalSteps) * 100;
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={2} mb={2} width="100%">
      <Box width="80%" mr={1}>
        <LinearProgress variant="determinate" value={calculateProgress()} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          calculateProgress()
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default LinearProgressBar;
