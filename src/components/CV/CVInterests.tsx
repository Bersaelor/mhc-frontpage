import type { Component } from 'solid-js';
import { For } from 'solid-js';
import { styled } from '@suid/material/styles';
import { useI18n } from "../../i18n/context";
import Typography from '@suid/material/Typography';
import Paper from '@suid/material/Paper';
import Stack from '@suid/material/Stack';

export const CellTitle = styled(Typography)(({ theme }) => ({
  fontFamily: [
    'Source Code Pro',
    'Noto Sans',
    'Arial',
    'sans-serif',
  ].join(','),
  fontSize: '1.05rem',
  fontWeight: '500',
  color: theme.palette.text.secondary,
}));

const ItemCell: Component<{ text: string }> = (props) => {
  return (
    <Paper elevation={0} sx={{ backgroundColor: 'primary.main' }}>
      <CellTitle px={1.5} py={0.5}>{props.text}</CellTitle>
    </Paper>
  );
}

const interests = {
  de: [
    'AR',
    'VR',
    '3D Engines',
    'AI', 
    'Machine learning',
    'Stochastik',
    'Astronomie',
    'Geschichte',
    'Ukulele',
  ],
  en: [
    'AR',
    'VR',
    '3D engines',
    'AI', 
    'Machine learning',
    'Probability Theory',
    'Astronomy',
    'history',
    'Ukulele',
  ],
};

const CVTalks: Component = () => {
  const i18n = useI18n();

  return (
    <Stack direction='row' spacing={1} flexWrap='wrap' rowGap={1}>
      <For each={interests[i18n.language as 'de' | 'en']}>
        {(talk) => <ItemCell text={talk} />}
      </For>
    </Stack>
  );
};

export default CVTalks;