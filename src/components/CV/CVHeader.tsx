import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Box } from "@suid/material"
import { Typography } from '@suid/material';
import Paper from '@suid/material/Paper';
import Stack from '@suid/material/Stack';

import photo from '../PersonHeader/photo.jpeg'

// styled paper with gradient background
const GradientPaper = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(#006068, #0497ac)",
}))

const Portrait = styled('img')(({ theme }) => ({
  margin: theme.spacing(2),
  height: '160px',
  borderRadius: '40px',
  transition: 'all 0.3s ease-out',
}))

const CVHeader: Component = () => {
  return (
    <Box py={2} mx={2}>
      <GradientPaper>
        <Stack spacing={2} direction='row' alignItems='center'>
          <Portrait src={photo} alt="photo of Konrad" />
          <Stack direction='column' alignItems='center' justifyContent='center'>
            <Typography variant="h5" color="white">
              Konrad Feiler
            </Typography>
            <Typography variant="h6" color="white">
              IT Berater / CTO
            </Typography>
          </Stack>
        </Stack>
      </GradientPaper>
    </Box>
  );
};

export default CVHeader;