import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Stack from '@suid/material/Stack';
import { Box } from "@suid/material";
import { useI18n } from '../../i18n/context';

import photo from './photo.jpeg'

const PersonHeader: Component = () => {
  const i18n = useI18n();

  return (
    <Box>
      <Stack pt={2} direction='row' justifyContent='center'>
        <Stack
          m={2}
          gap={2}
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent='center'
          alignItems='center'
        >
          <img
            src={photo}
            width={87}
            height={160}
            alt={i18n.t('home.photo.alt')}
          />
          <div>
            <Typography variant="h5" component="h1" mb={1.5}>
              {i18n.t('home.intro.headline')}
            </Typography>
            <Typography variant="body1" mb={1} sx={{ maxWidth: '400px', fontSize: '1.25rem' }}>
              {i18n.t('home.intro.what')}
            </Typography>
            <Typography variant="body2" color="#c1dff5" sx={{ maxWidth: '400px' }}>
              {i18n.t('home.intro.who')}
            </Typography>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PersonHeader;
