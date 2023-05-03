import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Box } from "@suid/material"
import { Typography } from '@suid/material';
import Paper from '@suid/material/Paper';
import Stack from '@suid/material/Stack';
import { useI18n } from "../../i18n/context";
import MailOutlineRoundedIcon from '@suid/icons-material/MailOutlineRounded';
import LocalPhoneRoundedIcon from '@suid/icons-material/LocalPhoneRounded';
import PlaceRoundedIcon from '@suid/icons-material/PlaceRounded';
import LanguageRoundedIcon from '@suid/icons-material/LanguageRounded';

import github from '../Social/github.svg'
import linkedin from '../Social/linkedin.svg'
import twitter from '../Social/twitter.svg'

import photo from '../PersonHeader/photo.jpeg'

// styled paper with gradient background
const GradientPaper = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(#078294, #0c96ac)",
  borderRadius: theme.spacing(1),
}))

const Portrait = styled('img')(({ theme }) => ({
  margin: theme.spacing(2),
  height: '160px',
  borderRadius: '40px',
  transition: 'all 0.3s ease-out',
}))

const StyledLink = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  fontSize: '0.8rem',
}))

const CVHeader: Component = () => {
  const i18n = useI18n();

  return (
    <Box py={2}>
      <GradientPaper>
        <Stack p={0.5} spacing={2} direction='row' alignItems='center' justifyContent='space-between'>
          <Stack spacing={2} direction='row' alignItems='center'>
            <Portrait src={photo} alt="photo of Konrad" />
            <Stack direction='column' alignItems='center' justifyContent='center'>
              <Typography variant="h5" color="white">
                Konrad Feiler
              </Typography>
              <Typography variant="h6" color="white">
                {i18n.t('cv.header.subtitle')}
              </Typography>
            </Stack>
          </Stack>

          <Stack pr={2} direction='column' alignItems='flex-start' justifyContent='center'>
            <StyledLink component='a' href="mailto:konrad@mathheartcode.com">
              <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                <MailOutlineRoundedIcon fontSize='small' />
                <span>konrad@mathheartcode.com</span>
              </Stack>
            </StyledLink>
            <StyledLink component='a' href="tel:+49 17672624019">
              <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                <LocalPhoneRoundedIcon fontSize='small' />
                <span>+49 176 72624019</span>
              </Stack>
            </StyledLink>
            <Typography color="white" fontSize='0.8rem'>
              <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                <PlaceRoundedIcon fontSize='small' />
                <span>Berlin</span>
              </Stack>
            </Typography>
            <StyledLink component='a' href="https://www.mathheartcode.com">
              <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                <LanguageRoundedIcon fontSize='small' />
                <span>www.mathheartcode.com</span>
              </Stack>
            </StyledLink>
            <StyledLink ml={'2px'} component='a' href="https://github.com/Bersaelor">
              <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                <img height="16px" src={github} alt="Github icon" />
                <span>github.com/Bersaelor</span>
              </Stack>
            </StyledLink>
            <StyledLink ml={'2px'} component='a' href="https://www.linkedin.com/in/konrad-feiler/">
              <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                <img height="16px" src={linkedin} alt="LinkedIn icon" />
                <span>linkedin.com/in/konrad-feiler</span>
              </Stack>
            </StyledLink>
            <StyledLink ml={'2px'} component='a' href="https://twitter.com/bersaelor">
              <Stack direction='row' gap={1} justifyContent='center' alignItems='center'>
                <img height="16px" src={twitter} alt="Twitter icon" />
                <span>twitter.com/bersaelor</span>
              </Stack>
            </StyledLink>
          </Stack>
        </Stack>
      </GradientPaper>
    </Box>
  );
};

export default CVHeader;