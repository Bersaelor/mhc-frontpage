import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';
import GradientTitle from '../GradientTitle/GradientTitle';
import MailOutlineRoundedIcon from '@suid/icons-material/MailOutlineRounded';
import Stack from '@suid/material/Stack';

import github from './github.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'
import mastodon from './mastodon.svg'

const Social: Component = () => {
  return (
    <Box mt={2} component='section'>
      <GradientTitle variant="h5">
        Contact
      </GradientTitle>

      <Grid justifyContent="center" container spacing={3} mt={0}>
        <Grid sx={{ textAlign: 'center' }} item xs={12}>
          <Typography component='a' color="#e8eaf8" href="mailto:konrad@mathheartcode.com">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <MailOutlineRoundedIcon />
              <span>konrad@mathheartcode.com</span>
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={4} md={2}>
          <Typography component='a' color="#e8eaf8" href="https://github.com/Bersaelor">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <img height="24px" src={github} alt="Github icon" />
              <span>Github</span>
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={4} md={2}>
          <Typography component='a' color="#e8eaf8" href="https://www.linkedin.com/in/konrad-feiler/">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <img height="24px" src={linkedin} alt="LinkedIn icon" />
              <span>LinkedIn</span>
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={4} md={2}>
          <Typography component='a' color="#e8eaf8" rel="me" href="https://mathstodon.xyz/@bersaelor">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <img height="24px" src={mastodon} alt="Mastodon icon" />
              <span>Mastodon</span>
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={4} md={2}>
          <Typography component='a' color="#e8eaf8" href="https://twitter.com/bersaelor">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <img height="24px" src={twitter} alt="Twitter icon" />
              <span>Twitter</span>
            </Stack>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Social;