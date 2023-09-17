import { MuiGrid, MuiBox, MuiTypography } from '@/libs/mui-lib';
import SpaIcon from '@mui/icons-material/Spa';
import { styled } from '@mui/material';
const Card = () => {
  const StyledCard = styled(MuiBox)({
    background: '#CCF0EE',
    color:'var(--primary-color)',
    padding: '2rem 1.5rem',
    textAlign:'center',
    borderRadius:'4px'

  })
  return (
    <MuiGrid item xs={4} md={3} lg={2}>
      {/* <MuiBox sx={{ height: '174px', background: '#E4E4E4' }} /> */}
      <StyledCard>
        <SpaIcon/>
        <MuiTypography variant='body2'>Environment & Sustainability</MuiTypography>
      </StyledCard>
    </MuiGrid>
  );
};

export default Card;
