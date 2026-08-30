import Stack from '@suid/material/Stack';
import { styled } from '@suid/material/styles';
import type { Component } from 'solid-js';
import { A } from '@solidjs/router';
import GradientTitle from '../GradientTitle/GradientTitle';
import { useI18n } from '../../i18n/context';

// Sits at the bottom of the flex column established on #root (index.css), so it
// stays put on short pages without being pulled out of flow and overlapping
// the last section.
const StickyFooter = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  lineHeight: '2.5rem',
  '& a': {
    textDecoration: 'none',
  },
  '& a:hover, & a:focus-visible': {
    textDecoration: 'underline',
  },
}))

const Footer: Component = () => {
  const i18n = useI18n();

  return (
    <StickyFooter>
      <Stack p={1} gap={2} direction='row' justifyContent='center' alignItems='center' flexWrap='wrap'>
        {/* <A> keeps navigation inside the SPA instead of reloading the bundle */}
        <A href="/imprint">
          <GradientTitle variant='subtitle2' component='span'>
            {i18n.t('home.footer.imprint')}
          </GradientTitle>
        </A>
        <A href="/privacy">
          <GradientTitle variant='subtitle2' component='span'>
            {i18n.t('home.footer.privacy')}
          </GradientTitle>
        </A>
        <GradientTitle variant='subtitle2' component='p'>
          © 2026 mathHeartCode UG (haftungsbeschränkt)
        </GradientTitle>
      </Stack>
    </StickyFooter>
  );
};

export default Footer;
