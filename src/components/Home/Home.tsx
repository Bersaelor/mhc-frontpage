import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import { Container } from "@suid/material"
import Stack from '@suid/material/Stack';
import Footer from '../Footer/Footer';

import photo from './photo.jpeg'

const Home: Component = () => {
  return (
    <div>
      <Container maxWidth="lg" >
        <Stack mx={3} mt={4} p={1} gap={2} direction='row' justifyContent='center' alignItems='center'>
          <img height='160px' src={photo} alt="photo of Konrad" />
          <div>
          <Typography variant="h5" mb={2}>
            Hi, my name Konrad.
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: '400px'}}>
            Through my company <b>mathHeartCode UG(haftungsbeschränkt)</b> I offer services as a software developer & consultant.
          </Typography>
          </div>
        </Stack>

        
      </Container>

      <Footer />
    </div>
  );
};

export default Home;
