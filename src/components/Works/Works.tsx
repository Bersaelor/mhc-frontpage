import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import Box from '@suid/material/Box';
import WorkCell from './WorkCell.jsx';
import type { Work } from '../../types/Work';
import GradientTitle from '../GradientTitle/GradientTitle';
import { useI18n } from '../../i18n/context';
import MoreHorizRoundedIcon from '@suid/icons-material/MoreHorizRounded';

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
  const i18n = useI18n();
  const sorted = () => Object.entries(props.works)
    .sort(([, a], [, b]) => a.release < b.release ? 1 : -1);

  return (
    <Box component='section' aria-labelledby="works-heading">
      <GradientTitle id="works-heading" variant="h4" component="h2" mb={2}>
        {i18n.t('home.section.projects')}
      </GradientTitle>

      <SquareGrid>
        <For each={sorted()}>
          {([key, work]) => (
            <WorkCell key={key} work={work} onWorkSelected={props.onWorkSelected} />
          )}
        </For>
        {/* Purely a "there is more" flourish - not an action, so hide it from
            assistive tech rather than let it read as a 22nd project. */}
        <LastCell aria-hidden="true">
          <Box mt={3}>
            <MoreHorizRoundedIcon fontSize='large' />
          </Box>
        </LastCell>
      </SquareGrid>
    </Box>
  );
};

export default Works;
