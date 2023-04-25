import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';

import aws from './aws.svg';
import ios from './ios.svg';
import macos from './macos.svg';
import react from './react.svg';
import solid from './solid.svg';
import unity from './unity.svg';

const Technologies: Component = () => {
  return (
    <Box mt={2} component='section'>
      <Typography variant="h4">
        Technologies
      </Typography>

      <Grid container spacing={3} mt={0}>
        <Grid item xs={3} md={1.5}>
          <Box mt={1} ml={3}>
            <img height="32px" src={ios} alt="iOS" />
          </Box>
        </Grid>
        <Grid item xs>
          <Box mt={1}>
            <img height="32px" src={macos} alt="macOS" />
          </Box>
        </Grid>
        <Grid item xs>
          <Stack direction="row" spacing={0.25} alignItems="center">
            <img height="48px" src={react} alt="ReactJS" />
            <Typography sx={{ fontSize: '28px' }} >
              <b>React</b>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack direction="row" spacing={0.25} mx={1} alignItems="center">
            <img height="48px" src={solid} alt="SolidJS" />
            <Typography sx={{ fontSize: '28px' }} >
              SOLID<b>JS</b>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs>
          <Box ml={2}>
            <img height="48px" src={unity} alt="Unity" />
          </Box>
        </Grid>
        <Grid item xs>
          <Box mt={0.5}>
            <img height="52px" src={aws} alt="AWS" />
          </Box>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Technologies;