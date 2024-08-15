import React, { useState } from 'react';
import { Box, Typography,  Table, TableBody, TableCell, TableContainer, TableRow,  Card, CardContent, Select,TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/system';





const StyledTableContainer = styled(TableContainer)({
  marginTop: '10px',
  boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.1)',
});

const StyledTable = styled(Table)({
  '& th, & td': {
      border: '1px solid #B3E5FC',
      padding: '5px 3px',
  },
});


const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
      backgroundColor: '#E1F5FE',
  },
  '&:hover': {
      backgroundColor: '#B3E5FC',
  },
});

const StyledTableCell = styled(TableCell)({
  fontSize: '0.9em',
  fontFamily: "'Comic Sans MS', sans-serif",
});

const imageStyle = {
  width: "80%",
  height: "auto",
  maxWidth: "70%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const Converter = () => {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("meters");
  const [convertedValue, setConvertedValue] = useState({});

  const conversions = {
    millimeters: 1,
    centimeters: 10,
    meters: 1000,
    kilometers: 1000000,
  };

  const convertValue = (value, newUnit) => {
    const conversionFactor = conversions[newUnit];
    setConvertedValue({
      millimeters: value * conversionFactor / conversions['millimeters'],
      centimeters: value * conversionFactor / conversions['centimeters'],
      meters: value * conversionFactor / conversions['meters'],
      kilometers: value * conversionFactor / conversions['kilometers'],
    });
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
    convertValue(event.target.value, unit);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
    convertValue(value, event.target.value);
  };

  return (
    <div>
      <br></br> <br></br>
      <br></br> <br></br> <br></br>    <img src={"/images/Calculm.png"} alt="comparaison" style={imageStyle} />
      <br></br>
    <Card sx={{ marginTop: '10px', width: '90vw', margin: '0 auto', maxWidth: '320px' }}>

        <CardContent>
          <Box my={1}>
            <TextField
              type="number"
              value={value}
              onChange={handleValueChange}
              label="Valeur"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Box>
          <Box my={1}>
            <Select
              value={unit}
              onChange={handleUnitChange}
              variant="outlined"
              fullWidth
              size="small"
            >
              <MenuItem value="millimeters">Millimètres</MenuItem>
              <MenuItem value="centimeters">Centimètres</MenuItem>
              <MenuItem value="meters">Mètres</MenuItem>
              <MenuItem value="kilometers">Kilomètres</MenuItem>
            </Select>
          </Box>
          <Typography style={{fontFamily: "'Comic Sans MS', sans-serif"}} align="center">{value} {unit} équivaut à:</Typography>
          <StyledTableContainer>
        <StyledTable>
            <TableBody>
                    <StyledTableRow>
                        <StyledTableCell>{convertedValue.millimeters}</StyledTableCell>
                        <StyledTableCell>millimètres</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>{convertedValue.centimeters}</StyledTableCell>
                        <StyledTableCell>centimètres</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>{convertedValue.meters}</StyledTableCell>
                        <StyledTableCell>mètres</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell>{convertedValue.kilometers}</StyledTableCell>
                        <StyledTableCell> kilomètres</StyledTableCell>
                    </StyledTableRow>
            </TableBody>
        </StyledTable>
    </StyledTableContainer>
        </CardContent>
      </Card>
      </div>
  );
}

export default Converter;
