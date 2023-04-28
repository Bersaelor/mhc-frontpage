import type { Component } from 'solid-js';
import { For } from 'solid-js';
import Stack from '@suid/material/Stack';
import Typography from '@suid/material/Typography';
import { styled } from '@suid/material/styles';
import type { Work } from '../../types/Work';


type Props = {
  work: Work,
}

const WorkDetail: Component<Props> = (props) => {
  return (
    <Stack m={2} py={2} direction='column' justifyContent='center' spacing={2}>
      <Typography variant='h5' component='a' href={props.work.url} target='_blank' color="textPrimary">
        {props.work.title}
      </Typography>
      <Typography variant='body1'>
        {props.work.text}
      </Typography>
      <Typography variant='body1'>
        <b>Role:</b> {props.work.role}
      </Typography>
    </Stack>
  );
};

export default WorkDetail;