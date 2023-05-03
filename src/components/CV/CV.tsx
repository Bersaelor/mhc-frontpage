import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';
import Paper from '@suid/material/Paper';
import Box from '@suid/material/Box';
import CVHeader from './CVHeader';
import CVSectionHeader from './CVSectionHeader';
import CVCareer from './CVCareer';
import ApartmentRoundedIcon from '@suid/icons-material/ApartmentRounded';
import PersonRoundedIcon from '@suid/icons-material/PersonRounded';
import PhoneIphoneRoundedIcon from '@suid/icons-material/PhoneIphoneRounded';
import SchoolRoundedIcon from '@suid/icons-material/SchoolRounded';
import ChatBubbleRoundedIcon from '@suid/icons-material/ChatBubbleRounded';
import TranslateRoundedIcon from '@suid/icons-material/TranslateRounded';
import InterestsRoundedIcon from '@suid/icons-material/InterestsRounded';
import { useI18n } from "../../i18n/context";

const Background = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#f5f5f5',
}))

const Container = styled('div')(({ theme }) => ({
  maxWidth: '920px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  paddingLeft: '0 important',
  paddingRight: '0 important',
}))

const Section = styled('section')(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  '& + &': {
    marginTop: theme.spacing(4),
  },
}))

const CV: Component = () => {
  const i18n = useI18n();

  return (
    <>
      <Background />
      <Container>
        <Paper sx={{ borderRadius: '8px' }}>
          <Box mx={2} pb={2}>

            <CVHeader />
            <Section>
              <CVSectionHeader key='cv.section.profile' icon={<PersonRoundedIcon fontSize="large" />} />
              <Typography variant="body1" color="text.primary">
                {i18n.t('cv.profile.text')}
              </Typography>
            </Section>

            <Section>
              <CVSectionHeader key='cv.section.career' icon={<ApartmentRoundedIcon fontSize="large" />} />
              <CVCareer />
            </Section>

            <Section>
              <CVSectionHeader key='cv.section.projects' icon={<PhoneIphoneRoundedIcon fontSize="large" />} />
              <Typography variant="body1" color="text.primary">
                {i18n.t('cv.profile.text')}
              </Typography>
            </Section>

            <Section>
              <CVSectionHeader key='cv.section.education' icon={<SchoolRoundedIcon fontSize="large" />} />
              <Typography variant="body1" color="text.primary">
                {i18n.t('cv.profile.text')}
              </Typography>
            </Section>

            <Section>
              <CVSectionHeader key='cv.section.talks' icon={<ChatBubbleRoundedIcon fontSize="large" />} />
              <Typography variant="body1" color="text.primary">
                {i18n.t('cv.profile.text')}
              </Typography>
            </Section>

            <Section>
              <CVSectionHeader key='cv.section.languages' icon={<TranslateRoundedIcon fontSize="large" />} />
              <Typography variant="body1" color="text.primary">
                {i18n.t('cv.profile.text')}
              </Typography>
            </Section>

            <Section>
              <CVSectionHeader key='cv.section.interests' icon={<InterestsRoundedIcon fontSize="large" />} />
              <Typography variant="body1" color="text.primary">
                {i18n.t('cv.profile.text')}
              </Typography>
            </Section>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default CV;