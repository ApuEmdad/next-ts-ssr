import { MuiBox, MuiTypography, MuiContainer, MuiButton } from '@/libs/mui-lib';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from '@emotion/styled';

const BottomSection = () => {
  const TextContainer = styled(MuiBox)({
    display: 'flex'
  });
  const Image = styled('img')({
    width: '33px',
    height: '20px',
    alignSelf: 'center',
    marginRight: '22px'
  });
  const Text = styled(MuiTypography)({
    fontSize: '1.5rem',
    color: '#000'
  });

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });


  return (
    <MuiContainer sx={{ padding: '70px 0px' }}>
      <TextContainer>
        <Image src={'./assets/home/hand@2x.png'} alt="" />
        <Text variant="body2">
          Quality Framework Focal Points can Upload documents using the link
          below.
        </Text>
      </TextContainer>
      <MuiButton startIcon={<CloudUploadIcon />} variant="contained" color="error" sx={{ margin: '30px 55px' }}>
        Upload and edit QF documents
        <VisuallyHiddenInput type='file' />
      </MuiButton>
      <TextContainer>
        <Image src={'./assets/home/hand@2x.png'} alt="" />
        <Text variant="body2">
          Any questions about the Quality Framework can be emailed to:
          quality.framework@savethechildren.org
        </Text>
      </TextContainer>
    </MuiContainer>
  );
};

export default BottomSection;
