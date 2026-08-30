import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';
import GradientTitle from '../GradientTitle/GradientTitle';
import MailOutlineRoundedIcon from '@suid/icons-material/MailOutlineRounded';
import Stack from '@suid/material/Stack';
import { useI18n } from '../../i18n/context';

import github from './github.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'
import mastodon from './mastodon.svg'

const Social: Component = () => {
  const i18n = useI18n();

  return (
    <Box mt={2} component='section' aria-labelledby="contact-heading">
      <GradientTitle id="contact-heading" variant="h4" component="h2">
        {i18n.t('home.section.contact')}
      </GradientTitle>

      <Grid justifyContent="center" container spacing={3} mt={0}>
        <Grid sx={{ textAlign: 'center' }} item xs={12}>
          <Stack direction='row' gap={3} justifyContent='center' alignItems='center'>
            <Typography component='a' color="#e8eaf8" href="mailto:konrad@mathheartcode.com">
              <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                <MailOutlineRoundedIcon aria-hidden="true" />
                <span>konrad@mathheartcode.com</span>
              </Stack>
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography component='a' color="#e8eaf8" href="https://github.com/Bersaelor">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <img width={24} height={24} src={github} alt="" />
              <span>Github</span>
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography component='a' color="#e8eaf8" href="https://www.linkedin.com/in/konrad-feiler/">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <img width={24} height={24} src={linkedin} alt="" />
              <span>LinkedIn</span>
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography component='a' color="#e8eaf8" rel="me" href="https://mathstodon.xyz/@bersaelor">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <img width={22} height={24} src={mastodon} alt="" />
              <span>Mastodon</span>
            </Stack>
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <Typography component='a' color="#e8eaf8" href="https://twitter.com/bersaelor">
            <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
              <img width={24} height={24} src={twitter} alt="" />
              <span>Twitter</span>
            </Stack>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Social;
