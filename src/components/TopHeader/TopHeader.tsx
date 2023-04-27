import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Container } from "@suid/material"
import Stack from '@suid/material/Stack';
import { Box } from "@suid/material"
import GradientTitle from '../GradientTitle/GradientTitle';
import MailOutlineRoundedIcon from '@suid/icons-material/MailOutlineRounded';

const StickyTop = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 100,
}))

const Topheader: Component = () => {

  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <StickyTop>
      <Container maxWidth="lg" >
        <Stack direction='row' justifyContent='space-between'>
          <GradientTitle id="company" variant="h6" onClick= {() => onScrollToTop()}
            sx={{ WebkitFilter: 'drop-shadow(0px 1px 2px #000)', cursor: 'pointer'}}  >
            mathHeartCode UG
          </GradientTitle>

          <GradientTitle variant="h6" color="#e8eaf8" href="mailto:konrad@mathheartcode.com" component='a' 
            sx={{ WebkitFilter: 'drop-shadow(0px 1px 2px #000)'}}
          >
            <Stack direction='row' gap={1} alignItems='center'>
              <MailOutlineRoundedIcon />
              <span>Contact</span> 
            </Stack>
          </GradientTitle>
        </Stack>
      </Container>
    </StickyTop>
  );
};

export default Topheader;