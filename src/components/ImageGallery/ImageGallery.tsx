import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import Box from '@suid/material/Box';
import Stack from '@suid/material/Stack';
import { styled } from '@suid/material/styles';
import RadioButtonUncheckedIcon from '@suid/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@suid/icons-material/RadioButtonChecked';
import IconButton from '@suid/material/IconButton';


type Props = {
  images: string[],
}

const StyledImg = styled('img')(({ theme }) => ({
  maxWidth: '90%',
  maxHeight: '60vh',
  cursor: 'pointer',
}))

const ImageGallery: Component<Props> = (props) => {
  const [imageIdx, setImageIdx] = createSignal(0);

  const handleNext = () => {
    setImageIdx((imageIdx() + 1) % props.images.length);
  }

  const imageName = () => {
    const fileName = props.images[imageIdx()]
    // if the fileName does not end with an extension, add .png
    if (!fileName.match(/\.[0-9a-z]+$/i)) {
      return fileName + '.png'
    }
    return fileName
  }

  return (
    <Stack justifyContent='center' direction='row'>
      <Stack direction='column' alignItems='center' gap={2}>
        <StyledImg src={imageName()} alt="image of project" onClick={handleNext} />
        <Stack justifyContent='center' direction='row'>
        {props.images.map((_, i) => (
          <IconButton onClick={() => setImageIdx(i)} color="primary">
            {imageIdx() === i ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
          </IconButton>
        ))}
      </Stack>
      </Stack>
    </Stack>
  );
};

export default ImageGallery;