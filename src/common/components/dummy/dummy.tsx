import { MuiContainer, MuiPaper, MuiBox, MuiTypography, MuiDivider, MuiButton } from '@/libs/mui-lib';

const Dummy = () => {
  return (
    <MuiContainer maxWidth="sm">
      <MuiPaper elevation={3}>
        <MuiBox p={3}>
          <MuiTypography variant="h4" gutterBottom>
            Welcome to My Dummy Component
          </MuiTypography>
          <MuiDivider />
          <MuiTypography variant="body1">This is a simple example using Material-UI components.</MuiTypography>
          <MuiButton variant="contained" color="primary">
            Click Me
          </MuiButton>
        </MuiBox>
      </MuiPaper>
    </MuiContainer>
  );
};

export default Dummy;
