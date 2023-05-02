import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Box } from "@suid/material"
import { Container } from "@suid/material"
import { Typography } from '@suid/material';
import Paper from '@suid/material/Paper';
import Stack from '@suid/material/Stack';
import CVHeader from './CVHeader';

const Background = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#f5f5f5',
}))

const CV: Component = () => {
  return (
    <>
      <Background />
      <Container maxWidth="md" sx={{ paddingTop: 3, paddingBottom: 3 }}>
        <Paper>
          <CVHeader />
        </Paper>

      </Container>
    </>
  );
};

export default CV;