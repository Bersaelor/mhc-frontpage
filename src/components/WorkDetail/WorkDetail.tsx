import type { Component } from 'solid-js';
import { For } from 'solid-js';
import Box from '@suid/material/Box';
import Typography from '@suid/material/Typography';
import { styled } from '@suid/material/styles';
import type { Work } from '../../types/Work';
import { Container } from "@suid/material"

type Props = {
  work: Work,
}

const WorkDetail: Component<Props> = (props) => {
  return (
    <Container>
      <Typography variant='h5'>
        {props.work.title}
      </Typography>
    </Container>
  );
};

export default WorkDetail;