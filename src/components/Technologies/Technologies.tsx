import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Paper from '@suid/material/Paper';
import Stack from '@suid/material/Stack';
import GradientTitle from '../GradientTitle/GradientTitle';

import aws from './aws.svg';
import ios from './ios.svg';
import macos from './macos.svg';
import react from './react.svg';
import solid from './solid.svg';
import unity from './unity.svg';

const HStack = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  flexFlow: 'row wrap',
  gap: theme.spacing(2)
}))

const Technologies: Component = () => {
  return (
    <Box mt={2} component='section'>
      <GradientTitle variant="h4" mb={2}>
        Technologies
      </GradientTitle>

      <HStack>
        <Paper>
          <Box p={1} pb={0} pt={1}>
            <img height="34px" src={ios} alt="iOS" />
          </Box>
        </Paper>

        <Paper>
          <Box p={1} pb={0} pt={1}>
            <img height="34px" src={macos} alt="macOS" />
          </Box>
        </Paper>

        <Stack direction="row" spacing={0.25} alignItems="center">
          <img height="48px" src={react} alt="ReactJS" />
          <Typography sx={{ fontSize: '28px'}} >
            <b>React</b>
          </Typography>
        </Stack>

        <Stack direction="row" spacing={0.25} mx={1} alignItems="center">
          <img height="48px" src={solid} alt="SolidJS" />
          <Typography sx={{ fontSize: '28px' }} >
            SOLID<b>JS</b>
          </Typography>
        </Stack>

        <Paper>
          <Box ml={1} mr={1} pt={1}>
            <img height="36px" src={unity} alt="Unity" />
          </Box>
        </Paper>

          <Paper sx={{ maxWidth: '120px' }}>
            <Box px={1} pt={1}>
              <img height="36px" src={aws} alt="AWS" />
            </Box>
          </Paper>
      </HStack>
    </Box>
  );
};

export default Technologies;