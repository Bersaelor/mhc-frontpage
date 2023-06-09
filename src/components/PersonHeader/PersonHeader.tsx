import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';
import Stack from '@suid/material/Stack';
import { Box } from "@suid/material"

import photo from './photo.jpeg'

const PersonHeader: Component = () => {
  return (
    <Box>
      <Stack pt={2} direction='row' justifyContent='center'>
        <Stack m={2} gap={2} direction='row' justifyContent='center' alignItems='center'>
          <img height='160px' src={photo} alt="photo of Konrad" />
          <div>
            <Typography variant="h5" mb={2}>
              Hi, my name is Konrad.
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: '400px' }}>
              Through my company <b>mathHeartCode UG(haftungsbeschränkt)</b> I offer services as a software developer & consultant.
            </Typography>
          </div>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PersonHeader;