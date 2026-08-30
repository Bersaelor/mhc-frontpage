import type { Component } from 'solid-js';
import { useSearchParams } from '@solidjs/router';
import { styled } from '@suid/material/styles';
import { Container } from "@suid/material"
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import { Grow } from "@suid/material"
import Dialog from '@suid/material/Dialog';

import Topheader from '../TopHeader/TopHeader';
import PersonHeader from '../PersonHeader/PersonHeader';
import Technologies from '../Technologies/Technologies';
import WorkDetail from '../WorkDetail/WorkDetail';
import Works from '../Works/Works';
import Talks from '../Talks/Talks';
import Social from '../Social/Social';
import Footer from '../Footer/Footer';

import workData from '../../data/works.js';

const StyledModal = styled(Dialog)(({ theme }) => ({
  '.MuiBackdrop-root': {
    backgroundColor: '#00000044',
  },
  '.MuiDialog-paper': {
    borderRadius: theme.spacing(2),
    backgroundColor: '#03575aaa',
    backdropFilter: 'blur(8px)',
    maxWidth: '800px',
    overflow: 'overlay',
    scrollbarWidth: 'thin',
    scrollbarColor: '#f8f6e5 transparent',

    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 8,
      backgroundColor: '#ffffff44',
      border: '2px solid #03575aff'
    },
  }
}))

const Home: Component = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Derived straight from the URL so that the browser Back button closes the
  // dialog, and so a shared ?selected= link opens it.
  const selected = () => {
    const key = searchParams['selected'];
    return key && workData[key] ? key : undefined;
  };
  const work = () => {
    const key = selected();
    return key ? workData[key] : undefined;
  };

  // Opening pushes an entry (Back closes it again); closing replaces, so the
  // open/closed pair does not pile up in history.
  const handleOpen = (key: string) => setSearchParams({ selected: key });
  const handleClose = () => setSearchParams({ selected: undefined }, { replace: true });

  return (
    <>
      <Topheader />

      <Box component='main' sx={{ flex: 1 }}>
        <PersonHeader />

        <Container maxWidth="lg" >
          <Stack direction='column' mt={4} spacing={6} alignItems='stretch'>
            <Works works={workData} onWorkSelected={handleOpen} />

            <Technologies />

            <Talks />

            <Social />

            <Box p={3} />
          </Stack>
          <StyledModal
            open={work() != undefined}
            onClose={handleClose}
            TransitionComponent={Grow}
            aria-labelledby="work-detail-title"
            aria-describedby="work-detail-description"
          >
            {work() && (
              <WorkDetail key={selected()!} work={work()!} onClose={handleClose} />
            )}
          </StyledModal >
        </Container >
      </Box>

      <Footer />
    </>
  );
};

export default Home;
