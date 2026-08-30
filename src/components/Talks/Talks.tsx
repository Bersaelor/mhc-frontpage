import type { Component } from 'solid-js';
import { For, Show, createSignal } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Grid from '@suid/material/Grid';
import PlayArrowRounded from '@suid/icons-material/PlayArrowRounded';
import GradientTitle from '../GradientTitle/GradientTitle';
import type { Talk } from '../../types/Talk';
import { useI18n } from '../../i18n/context';

import talkData from '../../data/talks';

const Frame = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 9',
  borderRadius: theme.spacing(1),
  overflow: 'hidden',

  '& iframe': {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
}))

// Shows in place of the embed until the visitor asks for the video, so that
// nothing is requested from YouTube on page load.
const Facade = styled('button')(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2),

  font: 'inherit',
  color: '#ffffff',
  textAlign: 'center',
  cursor: 'pointer',
  border: '1px solid #ffffff33',
  background: 'linear-gradient(160deg, #03575a 0%, #1B2735 100%)',
  transition: 'border-color 0.2s ease-out',

  '&:hover, &:focus-visible': {
    borderColor: '#c1dff5',
  },
}))

const PlayBadge = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#c1dff5',
  color: '#03575a',
  flex: '0 0 auto',
}))

const TalkEmbed: Component<{ talk: Talk }> = (props) => {
  const i18n = useI18n();
  const [playing, setPlaying] = createSignal(false);

  return (
    <Frame>
      <Show
        when={playing()}
        fallback={
          <Facade
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={i18n.t('home.talks.play', { title: props.talk.title, conference: props.talk.conference, year: props.talk.year })}
          >
            <PlayBadge aria-hidden="true">
              <PlayArrowRounded />
            </PlayBadge>
            <Typography variant="subtitle1" component="span" aria-hidden="true">
              {props.talk.title}
            </Typography>
            <Typography variant="body2" component="span" color="#c1dff5" aria-hidden="true">
              {props.talk.conference} · {props.talk.year}
            </Typography>
            <Typography variant="caption" component="span" color="#b9c2c4">
              {i18n.t('home.talks.loads')}
            </Typography>
          </Facade>
        }
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${props.talk.videoId}?autoplay=1`}
          title={props.talk.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </Show>
    </Frame>
  );
};

const Talks: Component = () => {
  const i18n = useI18n();

  return (
    <Box mt={2} component='section' aria-labelledby="talks-heading">
      <GradientTitle id="talks-heading" variant="h4" component="h2">
        {i18n.t('home.section.talks')}
      </GradientTitle>

      <Grid justifyContent="center" container spacing={3} mt={0}>
        <For each={talkData}>
          {(talk) => (
            <Grid item xs={12} md={4}>
              <TalkEmbed talk={talk} />
            </Grid>
          )}
        </For>
      </Grid>
    </Box>
  );
};

export default Talks;
