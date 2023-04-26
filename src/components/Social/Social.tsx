import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';

const Social: Component = () => {
  return (
    <Box mt={2} component='section'>
      <Typography variant="h5">
        Contact
      </Typography>

      <Grid justifyContent="center" container spacing={3} mt={0}>
        <Grid sx={{textAlign: 'center'}} item xs={12}>
          <a href="mailto:konrad@mathheartcode.com"> konrad@mathheartcode.com </a>
        </Grid>
        <Grid item xs={4} md={2}>
          <a href="https://github.com/Bersaelor">Github</a>
        </Grid>
        <Grid item xs={4} md={2}>
          <a href="https://www.linkedin.com/in/konrad-feiler/">LinkedIn</a>
        </Grid>
        <Grid item xs={4} md={2}>
          <a rel="me" href="https://mathstodon.xyz/@bersaelor">Mastodon</a>
        </Grid>
        <Grid item xs={4} md={2}>
          <a href="https://twitter.com/bersaelor">Twitter</a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Social;