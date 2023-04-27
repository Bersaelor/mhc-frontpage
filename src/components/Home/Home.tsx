import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';
import { useSearchParams } from '@solidjs/router';
import { Typography } from '@suid/material';
import { Container } from "@suid/material"
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import Modal from '@suid/material/Modal';

import Topheader from '../TopHeader/TopHeader';
import PersonHeader from '../PersonHeader/PersonHeader';
import Technologies from '../Technologies/Technologies';
import WorkDetail from '../WorkDetail/WorkDetail';
import Works from '../Works/Works';
import Talks from '../Talks/Talks';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

import workData from '../../data/works.js';

const Home: Component = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = createSignal<string | undefined>(searchParams['selected']);
  const handleClose = () => setSelected(undefined);

  console.log("selected: ", selected)

  const work = () => {
    let key = selected();
    if (key) {
      return workData[key];
    }
    return undefined;
  }

  createEffect(() => {
    console.log("selected: ", selected())
    if (selected()) {
      setSearchParams({ selected: selected() });
    } else {
      setSearchParams({ selected: undefined });
    }
  });

  return (
    <>
      <Topheader />
      
      <PersonHeader />

      <Container maxWidth="lg" >
        <Stack direction='column' mt={4} spacing={6} alignItems='stretch'>
          <Works works={workData} onWorkSelected={(work) => {
            console.log('work selected: ', work)
            // set work as selected in the query
            setSelected(work)
          }} />

          <Technologies />

          <Talks />

          <Social />

          <Box p={3} />
        </Stack>
        <Modal
          open={work() != undefined}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          { work() && <WorkDetail work={work()!} />}
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
