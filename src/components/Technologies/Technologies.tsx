import type { Component } from 'solid-js';
import { Typography } from '@suid/material';
import Grid from '@suid/material/Grid';

import aws from './aws.svg';
import ios from './ios.svg';
import macos from './macos.svg';
import react from './react.svg';
import unity from './unity.svg';
import opengl from './opengl.svg';
import blender from './blender.svg';

const Technologies: Component = () => {
  return (
    <div>
      <Typography variant="h4" >
        Technologies
      </Typography>

      <Grid container spacing={2} mt={2}>
        <Grid item xs>
          <img height="48px" src={ios} alt="iOS" />
        </Grid>
        <Grid item xs>
          <img height="48px" src={macos} alt="macOS" />
        </Grid>
        <Grid item xs>
          <img height="64px" src={unity} alt="Unity" />
        </Grid>
        <Grid item xs>
          <img height="64px" src={opengl} alt="OpenGL" />
        </Grid>
        <Grid item xs>
          <img height="64px" src={blender} alt="Blender" />
        </Grid>
        <Grid item xs>
          <img height="52px" src={aws} alt="AWS" />
        </Grid>
      </Grid>

    </div>
  );
};

export default Technologies;