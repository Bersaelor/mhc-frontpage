import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';
import Stack from '@suid/material/Stack';
import { grey } from '@suid/material/colors';

const StickyFooter = styled('footer')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  lineHeight: '3rem',
  backgroundColor: grey[200],
  '& a': {
    textDecoration: 'none',
  },
}))

const Footer: Component = () => {

  return (
    <StickyFooter>
      <Stack p={1} gap={2} direction='row' justifyContent='center' alignItems='center'>
        <Typography variant='subtitle1' component='a' href="./imprint">
          Impressum
        </Typography>
        <Typography variant='subtitle1' component='a' href="./privacy">
          Privacy Declaration
        </Typography>
        <Typography variant='subtitle1'>
          © 2023 mathHeartCode UG(haftungsbeschränkt)
        </Typography>
      </Stack>
    </StickyFooter>
  );
};

export default Footer;
