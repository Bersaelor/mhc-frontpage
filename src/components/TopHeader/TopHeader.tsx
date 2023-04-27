import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Container } from "@suid/material"
import { Typography } from '@suid/material';
import Stack from '@suid/material/Stack';
import { Box } from "@suid/material"
import GradientTitle from '../GradientTitle/GradientTitle';

const Topheader: Component = () => {
  return (
    <Box>
      <Container maxWidth="lg" >
        <Stack direction='row' justifyContent='space-between'>
          <GradientTitle variant="h6" >
            mathHeartCode UG
          </GradientTitle>

          <GradientTitle variant="h6" color="#e8eaf8" href="mailto:konrad@mathheartcode.com" component='a'>
            Contact
          </GradientTitle>
        </Stack>            </Container>


    </Box>
  );
};

export default Topheader;