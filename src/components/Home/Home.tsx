import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import { Container } from "@suid/material"
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';

import PersonHeader from '../PersonHeader/PersonHeader';
import Technologies from '../Technologies/Technologies';
import Works from '../Works/Works';
import Talks from '../Talks/Talks';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

const Home: Component = () => {
  return (
    <>
      <Container maxWidth="lg" >
        <Stack direction='column' spacing={6} alignItems='stretch'>

          <PersonHeader />

          <Works />

          <Technologies />

          <Talks />

          <Social />

          <Box p={3} />          </Stack>

      </Container>
      <Footer />
    </>
  );
};

export default Home;
