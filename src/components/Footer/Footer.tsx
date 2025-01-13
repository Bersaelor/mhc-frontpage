import Stack from '@suid/material/Stack';
import { styled } from '@suid/material/styles';
import type { Component } from 'solid-js';
import GradientTitle from '../GradientTitle/GradientTitle';

const StickyFooter = styled('footer')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  height: '2.5rem',
  lineHeight: '2.5rem',
  '& a': {
    textDecoration: 'none',
  },
}))

const Footer: Component = () => {

  return (
    <StickyFooter>
      <Stack p={1} gap={2} direction='row' justifyContent='center' alignItems='center'>
        <GradientTitle variant='subtitle2' component='a' href="./imprint">
          Impressum
        </GradientTitle>
        <GradientTitle variant='subtitle2' component='a' href="./privacy">
          Privacy Declaration
        </GradientTitle>
        <GradientTitle variant='subtitle2'>
          © 2025 mathHeartCode UG(haftungsbeschränkt)
        </GradientTitle>
      </Stack>
    </StickyFooter>
  );
};

export default Footer;
