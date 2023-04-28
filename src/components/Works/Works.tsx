import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import WorkCell from './WorkCell.jsx';
import type { Work } from '../../types/Work';
import GradientTitle from '../GradientTitle/GradientTitle';
import MoreHorizRoundedIcon from '@suid/icons-material/MoreHorizRounded';

import workData from '../../data/works.js';

const SquareGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
  gridGap: theme.spacing(1),
  [(theme as any).mobileQuery]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  }
}))

const LastCell = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1/1',
}))


type Props = {
  works: { [key: string]: Work },
  onWorkSelected: (key: string) => void
}
const Works: Component<Props> = (props) => {
  return (
    <Box component='section'>
      <GradientTitle variant="h4" mb={2}>
        Past & Present Projects
      </GradientTitle>

      <SquareGrid>
        {Object.entries(workData).sort(((a: [string, Work], b: [string, Work]) => a[1].release < b[1].release ? 1 : -1)).map(([key, work]) => (
          <WorkCell key={key} work={work} onWorkSelected={props.onWorkSelected} />
        ))}
        <LastCell>
          <Box mt={3}>
            <MoreHorizRoundedIcon fontSize='large' />
          </Box>
        </LastCell>
      </SquareGrid>
    </Box>
  );
};

export default Works;