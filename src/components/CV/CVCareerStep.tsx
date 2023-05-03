import type { Component } from 'solid-js';
import { styled } from '@suid/material/styles';
import Typography from '@suid/material/Typography';
import Grid from '@suid/material/Grid';
import Stack from '@suid/material/Stack';
import { useI18n } from "../../i18n/context";
import type { CareerStep } from '../../types/CareerStep';
import { i18n } from 'i18next';

type Props = {
  step: CareerStep,
}

export const MonoSpacedDate = styled(Typography)(({ theme }) => ({
  fontFamily: [
    'Source Code Pro',
    'Noto Sans',
    'Arial',
    'sans-serif',
  ].join(','),
  fontSize: '1.0rem',
  lineHeight: '2rem',
  fontWeight: '550'
}));

export const JobTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: '500',
  color: theme.palette.text.primary,
}));

export const CompanyLink = styled('a')(({ theme }) => ({
  fontSize: '1.1rem',
  letterSpacing: '0.2rem',
  fontWeight: '200',
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const dateString = (v: string, i18n: i18n) => {
  if (v === "present") {
    return i18n.t('cv.date.present');
  } else {
    const d = new Date(v);

    return d.toLocaleDateString(i18n.language, { 
      year: 'numeric', month: 'long'
    });
  }
}

const CVSectionHeader: Component<Props> = (props) => {
  const i18n = useI18n();

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={3}>
        <MonoSpacedDate>
          {dateString(props.step.start_date, i18n)} - {dateString(props.step.end_date, i18n)}
        </MonoSpacedDate>
      </Grid>
      <Grid item xs={12} sm={9}>
        <Stack mb={2} direction='column'>
          <JobTitle>
            {props.step.title[i18n.language]}
          </JobTitle>
          <CompanyLink href={props.step.url} target='_blank' rel='noreferrer'>
            {props.step.company}
          </CompanyLink>
          <Typography variant="body2" color="text.primary">
            {props.step.description[i18n.language]}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default CVSectionHeader;