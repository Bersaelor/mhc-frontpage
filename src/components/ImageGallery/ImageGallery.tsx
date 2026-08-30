import type { Component } from 'solid-js';
import { For, createSignal } from 'solid-js';
import Stack from '@suid/material/Stack';
import { styled } from '@suid/material/styles';
import RadioButtonUncheckedIcon from '@suid/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@suid/icons-material/RadioButtonChecked';
import IconButton from '@suid/material/IconButton';
import { useI18n } from '../../i18n/context';


type Props = {
  title: string,
  images: string[],
}

const StyledImg = styled('img')(({ theme }) => ({
  maxWidth: '90%',
  maxHeight: '60vh',
  cursor: 'pointer',
}))

const ImageGallery: Component<Props> = (props) => {
  const i18n = useI18n();
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
        <StyledImg
          src={imageName()}
          alt={i18n.t('home.gallery.alt', { title: props.title, index: imageIdx() + 1, total: props.images.length })}
          onClick={handleNext}
        />
        {/* The image advances on click for mouse users; these dots are the
            keyboard- and screen-reader-reachable equivalent. */}
        <Stack
          justifyContent='center'
          direction='row'
          role="group"
          aria-label={i18n.t('home.gallery.group', { title: props.title })}
        >
          <For each={props.images}>
            {(_, i) => (
              <IconButton
                onClick={() => setImageIdx(i())}
                color="primary"
                aria-label={i18n.t('home.gallery.dot', { index: i() + 1, total: props.images.length })}
                aria-current={imageIdx() === i() ? 'true' : undefined}
              >
                {imageIdx() === i() ? <RadioButtonCheckedIcon /> : <RadioButtonUncheckedIcon />}
              </IconButton>
            )}
          </For>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ImageGallery;
