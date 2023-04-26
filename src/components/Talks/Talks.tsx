import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';

const Talks: Component = () => {
  return (
    <Box mt={2} component='section'>
      <Typography variant="h4">
        Talks
      </Typography>

      <Grid justifyContent="center" container spacing={3} mt={0}>
        <Grid item xs={4} md={2}>
          <a href="https://youtu.be/CwcEjxRtn18">KDTree for Functional Swift Conference</a>
        </Grid>
        <Grid item xs={4} md={2}>
          <a href="https://www.youtube.com/watch?v=xA3ZYt5S6iA">"How server side and mobile Swift can benefit from each other" for Server-Side Swift Conference</a>
        </Grid>
        <Grid item xs={4} md={2}>
          <a href="https://www.youtube.com/watch?v=51PJjrh9yTA">Fitting Stars into ARKit for MobiusConf</a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Talks;