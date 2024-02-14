import React from 'react';
import { Typography, RadioGroup, Radio, FormControlLabel } from '@mui/material';

function Sidebar({ minPrice, setMinPrice, value }) {
  const handlePriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Price Range
      </Typography>
      <RadioGroup aria-label="price-range" name="price-range" value={minPrice} onChange={handlePriceChange}>
        <FormControlLabel value="" control={<Radio />} label="All" />
        <FormControlLabel value="100" control={<Radio />} label="Below $100" />
        <FormControlLabel value="300" control={<Radio />} label="Below $300" />
        <FormControlLabel value="500" control={<Radio />} label="Below $500" />
        <FormControlLabel value="1000" control={<Radio />} label="Below $1000" />
        <FormControlLabel value="1500" control={<Radio />} label="Below $1500" />
      </RadioGroup>
    </div>
  );
}

export default Sidebar;
