import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import { Container } from "@suid/material"
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import { styled } from '@suid/material/styles';

import Technologies from '../Technologies/Technologies';
import Works from '../Works/Works';
import Talks from '../Talks/Talks';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';
import photo from './photo.jpeg'

const Home: Component = () => {
  return (
    <>
      <Container maxWidth="lg" >
        <Stack mx={3} mt={4} p={1} gap={2} direction='row' justifyContent='center' alignItems='center'>
          <img height='160px' src={photo} alt="photo of Konrad" />
          <div>
            <Typography variant="h5" mb={2}>
              Hi, my name Konrad.
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: '400px' }}>
              Through my company <b>mathHeartCode UG(haftungsbeschränkt)</b> I offer services as a software developer & consultant.
            </Typography>
          </div>
        </Stack>

        <Technologies />

        <Box p={1} />

        <Works />

        <Talks />

        <Social />
      </Container>


      <Footer />
    </>
  );
};

export default Home;
