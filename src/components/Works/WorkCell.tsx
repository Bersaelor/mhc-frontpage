import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import type { Work } from '../../types/Work';
import { useMediaQuery, useTheme } from "@suid/material";

const Cell = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1/1',
}))

const ResponsiveImage = styled('img')(({ theme }) => ({
  height: '80px',
  borderRadius: '12px',
  [(theme as any).mobileQuery]: {
    borderRadius: '8px',
    height: '60px',
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '16px',
    height: '120px',
  }
}))

type Props = {
  key: string,
  work: Work
}

const WorkCell: Component<Props> = (props) => {
  return (
    <Cell>
      <ResponsiveImage src={`imgs/${props.key}/${props.work.thumbnail}` } alt={props.work.title} />
    </Cell>
  );
};

export default WorkCell;