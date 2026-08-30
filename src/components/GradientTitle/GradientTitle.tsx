import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';

const GradientTitle = styled(Typography)(({ theme }) => ({
  color: "#c1dff5",
  background: "linear-gradient(#c1dff5, #eee8bf)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",

  // Forced-colors mode replaces the background but not the transparent text
  // fill, which would leave every title invisible.
  '@media (forced-colors: active)': {
    background: "none",
    WebkitTextFillColor: "currentColor",
    color: "CanvasText",
  },
}))

export default GradientTitle;
