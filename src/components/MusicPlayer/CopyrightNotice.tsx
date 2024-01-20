import React from 'react';
import { Typography } from '@mui/material';

const CopyrightNotice: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      &copy; {new Date().getFullYear()} Vahe Yeghiazaryan | All rights reserved.
    </Typography>
  );
};

export default CopyrightNotice;
