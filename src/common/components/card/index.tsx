import { MuiGrid, MuiBox } from '@/libs/mui-lib';

const Card = () => {
  return (
    <MuiGrid item xs={4} md={3} lg={2}>
      <MuiBox sx={{ height: '174px', background: '#E4E4E4' }} />
    </MuiGrid>
  );
};

export default Card;
