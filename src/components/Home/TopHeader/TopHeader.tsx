import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Container } from "@suid/material"
import { Typography } from '@suid/material';
import Stack from '@suid/material/Stack';
import { Box } from "@suid/material"

import photo from './photo.jpeg'

const Topheader: Component = () => {
  return (
    <Box backgroundColor='#0d2261'>
      <Container maxWidth="lg" >
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant="h5" color="#e8eaf8">
            mathHeartCode UG
          </Typography>

          <Typography variant="h5" color="#e8eaf8" href="mailto:konrad@mathheartcode.com" component='a'>
            Contact
          </Typography>
        </Stack>            </Container>


    </Box>
  );
};

export default Topheader;