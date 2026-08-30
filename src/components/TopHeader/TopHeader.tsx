import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Container } from "@suid/material"
import Stack from '@suid/material/Stack';
import { Box } from "@suid/material"
import GradientTitle from '../GradientTitle/GradientTitle';
import MailOutlineRoundedIcon from '@suid/icons-material/MailOutlineRounded';
import { useI18n } from '../../i18n/context';

const StickyTop = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  paddingBlock: theme.spacing(0.5),
  // Without this the page content scrolls straight under the title and the
  // contact link, which makes both unreadable over light project logos.
  backgroundColor: '#090A0Fcc',
  backdropFilter: 'blur(8px)',
}))

// The wordmark doubles as a scroll-to-top control, so it has to be a real
// button rather than a heading with a click handler.
const ScrollTopButton = styled('button')(({ theme }) => ({
  padding: 0,
  border: 0,
  background: 'none',
  font: 'inherit',
  color: 'inherit',
  cursor: 'pointer',
}))

const Topheader: Component = () => {
  const i18n = useI18n();

  const onScrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  }

  return (
    <StickyTop component="header">
      <Container maxWidth="lg" >
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <ScrollTopButton type="button" onClick={onScrollToTop} aria-label={i18n.t('home.nav.top')}>
            <GradientTitle id="company" variant="h6" component="span"
              sx={{ WebkitFilter: 'drop-shadow(0px 1px 2px #000)' }}  >
              mathHeartCode UG
            </GradientTitle>
          </ScrollTopButton>

          <GradientTitle variant="h6" component='a' color="#e8eaf8" href="mailto:konrad@mathheartcode.com"
            sx={{ WebkitFilter: 'drop-shadow(0px 1px 2px #000)'}}
          >
            <Stack direction='row' gap={1} alignItems='center'>
              <MailOutlineRoundedIcon aria-hidden="true" />
              <span>{i18n.t('home.nav.contact')}</span>
            </Stack>
          </GradientTitle>
        </Stack>
      </Container>
    </StickyTop>
  );
};

export default Topheader;
