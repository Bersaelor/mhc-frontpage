import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';

const Talks: Component = () => {
  return (
    <Box mt={2} component='section'>
      <Typography variant="h4">
        Talks
      </Typography>

      <Grid justifyContent="center" container spacing={3} mt={0}>
        <Grid item xs={12} md={4}>
          <Stack direction='row' justifyContent="center">
            <iframe src="https://www.youtube.com/embed/CwcEjxRtn18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction='row' justifyContent="center">
            <iframe src="https://www.youtube.com/embed/xA3ZYt5S6iA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction='row' justifyContent="center">
            <iframe src="https://www.youtube.com/embed/51PJjrh9yTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Talks;