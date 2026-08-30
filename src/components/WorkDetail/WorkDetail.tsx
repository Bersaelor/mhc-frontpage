import type { Component } from 'solid-js';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import type { Work } from '../../types/Work';
import CloseRoundedIcon from '@suid/icons-material/CloseRounded';
import OpenInNewRoundedIcon from '@suid/icons-material/OpenInNewRounded';
import IconButton from '@suid/material/IconButton';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useI18n } from '../../i18n/context';

type Props = {
  key: string,
  work: Work,
  onClose: () => void
}

const WorkDetail: Component<Props> = (props) => {
  const i18n = useI18n();

  // Every project carries `de` text; fall back to English for any that do not.
  const description = () => props.work.text[i18n.language] ?? props.work.text['en'];

  return (
    <Stack m={2} direction='column' justifyContent='center' spacing={2}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Stack direction='row' gap={1} alignItems='center'>
          {/* id is what the Dialog's aria-labelledby points at */}
          <Typography
            id="work-detail-title"
            variant='h5'
            component='a'
            href={props.work.url}
            target='_blank'
            rel='noopener noreferrer'
            color="textPrimary"
            sx={{ textDecoration: 'underline' }}
          >
            {props.work.title}
            <OpenInNewRoundedIcon
              fontSize="small"
              sx={{ verticalAlign: 'middle', ml: 0.5 }}
              titleAccess={i18n.t('home.works.newTab')}
            />
          </Typography>
          <Typography variant='h5' color="textPrimary">
            ({props.work.release})
          </Typography>
        </Stack>
        <IconButton color="primary" aria-label={i18n.t('home.works.close')} onClick={() => props.onClose()}>
          <CloseRoundedIcon/>
        </IconButton>
      </Stack>
      <Typography id="work-detail-description" variant='body1'>
        {description()}
      </Typography>
      <Typography variant='body1'>
        <b>{i18n.t('cv.works.techs')}:</b> {props.work.techs.join(', ')}
      </Typography>
      <Typography variant='body1'>
        <b>{i18n.t('cv.works.languages')}:</b> {props.work.langs.join(', ')}
      </Typography>
      <Typography variant='body1'>
        <b>{i18n.t('cv.works.role')}:</b> {props.work.role}
      </Typography>
      <ImageGallery
        title={props.work.title}
        images={props.work.imgs.map(i => `imgs/${props.key}/${i}`)}
      />
    </Stack>
  );
};

export default WorkDetail;
