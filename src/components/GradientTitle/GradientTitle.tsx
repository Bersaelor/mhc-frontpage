import { styled } from '@suid/material/styles';
import { Typography } from '@suid/material';

const GradientTitle = styled(Typography)(({ theme }) => ({
  background: "-webkit-linear-gradient(#c1dff5, #eee8bf)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}))

export default GradientTitle;