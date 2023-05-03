import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import type { Work } from '../../types/Work';

const Cell = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  aspectRatio: '1/1',

  position: 'relative',
  transition: 'all 0.6s ease-out',
  perspective: '1000px',

  cursor: 'pointer',

  '&:hover': {
    transition: 'all 0.3s linear',
    transform: 'scale(0.95)',
    zIndex: 1,
  },
}))

export const Tilt = styled('span')(({ theme }) => {
  const d = 20;

  return {
    position: 'absolute',
    width: '33.333%',
    height: '33.333%',
    borderRadius: '16px',
    zIndex: 1,
    '&:nth-child(1)': { top: 0, left: 0 },
    '&:nth-child(2)': { top: '33.333%', left: 0 },
    '&:nth-child(3)': { top: '66.666%', left: 0 },
    '&:nth-child(4)': { top: 0, left: '33.333%' },
    '&:nth-child(5)': { top: '33.333%', left: '33.333%' },
    '&:nth-child(6)': { top: '66.666%', left: '33.333%' },
    '&:nth-child(7)': { top: 0, left: '66.666%' },
    '&:nth-child(8)': { top: '33.333%', left: '66.666%' },
    '&:nth-child(9)': { top: '66.666%', left: '66.666%' },
    '&:nth-child(1):hover ~ .tilt-box': { transform: `rotateX(${d}deg) rotateY(-${d}deg)` },
    '&:nth-child(2):hover ~ .tilt-box': { transform: `rotateX(0deg)    rotateY(-${d}deg)` },
    '&:nth-child(3):hover ~ .tilt-box': { transform: `rotateX(-${d}deg) rotateY(-${d}deg)` },
    '&:nth-child(4):hover ~ .tilt-box': { transform: `rotateX(${d}deg) rotateY(0deg)` },
    '&:nth-child(5):hover ~ .tilt-box': { transform: `rotateX(0deg) rotateY(0deg)` },
    '&:nth-child(6):hover ~ .tilt-box': { transform: `rotateX(-${d}deg) rotateY(0deg)` },
    '&:nth-child(7):hover ~ .tilt-box': { transform: `rotateX(${d}deg) rotateY(${d}deg)` },
    '&:nth-child(8):hover ~ .tilt-box': { transform: `rotateX(0deg) rotateY(${d}deg)` },
    '&:nth-child(9):hover ~ .tilt-box': { transform: `rotateX(-${d}deg) rotateY(${d}deg)` },
  }
})

const ResponsiveImage = styled('img')(({ theme }) => ({
  height: '80px',
  borderRadius: '16px',
  transition: 'all 0.3s ease-out',
  [(theme as any).mobileQuery]: {
    borderRadius: '12px',
    height: '60px',
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '24px',
    height: '120px',
  }
}))

type Props = {
  key: string,
  work: Work,
  onWorkSelected: (key: string) => void
}

const WorkCell: Component<Props> = (props) => {
  return (
    <Cell onClick={() => props.onWorkSelected(props.key)}>
      <For each={[1, 2, 3, 4, 5, 6, 7, 8, 9]}>
        {(i) => <Tilt />}
      </For>
      <ResponsiveImage class='tilt-box' src={`imgs/${props.key}/${props.work.thumbnail}` } alt={props.work.title} />
    </Cell>
  );
};

export default WorkCell;