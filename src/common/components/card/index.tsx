import { MuiGrid, MuiBox, MuiTypography } from 'qf/libs/mui-lib';
import SpaIcon from '@mui/icons-material/Spa';
import { MuiSpa } from 'qf/libs/mui-icons';

import { styled } from '@mui/material';
const Card = () => {
  const StyledCard = styled(MuiBox)({
    background: '#CCF0EE',
    color: 'var(--primary-color)',
    padding: '2rem 1.5rem',
    textAlign: 'center',
    borderRadius: '4px',
    '@media(max-width: 867px)': {
      padding: '1rem 0.8rem'
    }
  })
  return (
    <MuiGrid item xs={4} md={3} lg={2}>
      {/* <MuiBox sx={{ height: '174px', background: '#E4E4E4' }} /> */}
      <StyledCard>
        <MuiSpa />
        <MuiTypography variant='body2'>Environment & Sustainability</MuiTypography>
      </StyledCard>
    </MuiGrid>
  );
};

export default Card;
