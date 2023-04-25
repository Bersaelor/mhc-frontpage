import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';

const Social: Component = () => {
  return (
    <Box mt={2} component='section'>
      <Typography variant="h5">
        Social
      </Typography>

      <Grid container spacing={3} mt={0}>

      </Grid>
    </Box>
  );
};

export default Social;