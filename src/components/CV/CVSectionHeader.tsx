import type { Component, JSX } from 'solid-js';
import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import { useI18n } from "../../i18n/context";
import Divider from '@suid/material/Divider';

type Props = {
  key: string,
  icon: JSX.Element
}

const RoundedIconBack = styled(Box)(({ theme }) => ({
  color: theme.palette.text.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '80px',
  height: '52px',
  width: '52px',
  backgroundColor: theme.palette.primary.main,
}))

const CVSectionHeader: Component<Props> = (props) => {
  const i18n = useI18n();

  return (
    <Stack mb={2} direction='column'>
      <Stack mb={1} spacing={2} direction='row' alignItems='center' justifyContent='flex-start'>
        <RoundedIconBack>
          {props.icon}
        </RoundedIconBack>
        <Typography variant="h5" color="text.primary">
          {i18n.t(props.key)}
        </Typography>
      </Stack>
      <Divider />
    </Stack>
  );
};

export default CVSectionHeader;