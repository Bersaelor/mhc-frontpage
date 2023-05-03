import type { Component } from 'solid-js';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import type { Work } from '../../types/Work';
import CloseRoundedIcon from '@suid/icons-material/CloseRounded';
import IconButton from '@suid/material/IconButton';
import ImageGallery from '../ImageGallery/ImageGallery';

type Props = {
  key: string,
  work: Work,
  onClose: () => void
}

const WorkDetail: Component<Props> = (props) => {
  return (
    <Stack m={2} direction='column' justifyContent='center' spacing={2}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Stack direction='row' gap={1}>
          <Typography variant='h5' component='a' href={props.work.url} target='_blank' color="textPrimary">
            {props.work.title}
          </Typography>          
          <Typography variant='h5' color="textPrimary">
            ({props.work.release})
          </Typography>
        </Stack>
        <IconButton color="primary" onClick={() => props.onClose()}>
          <CloseRoundedIcon/>
        </IconButton>
      </Stack>
      <Typography variant='body1'>
        {props.work.text["en"]}
      </Typography>
      <Typography variant='body1'>
        <b>Technologies:</b> {props.work.techs.join(', ')}
      </Typography>
      <Typography variant='body1'>
        <b>Languages:</b> {props.work.langs.join(', ')}
      </Typography>
      <Typography variant='body1'>
        <b>Role:</b> {props.work.role}
      </Typography>
      <ImageGallery images={props.work.imgs.map(i => `imgs/${props.key}/${i}`)} />
    </Stack>
  );
};

export default WorkDetail;