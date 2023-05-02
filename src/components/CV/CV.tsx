import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';
import Paper from '@suid/material/Paper';
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

const Container = styled('div')(({ theme }) => ({
  maxWidth: '920px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: '0 important',
  paddingRight: '0 important',
}))

const CV: Component = () => {
  return (
    <>
      <Background />
      <Container>
        <Paper sx={{ borderRadius: '8px' }}>
          <CVHeader />
        </Paper>

      </Container>
    </>
  );
};

export default CV;