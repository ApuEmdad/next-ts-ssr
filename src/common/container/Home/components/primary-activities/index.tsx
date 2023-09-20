import styled from '@emotion/styled';

import { MuiTypography, MuiContainer, MuiDivider, MuiGrid } from 'qf/libs/mui-lib';

import Card from 'qf/common/components/card';

const PrimaryActivities = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  /* ==== Styled Component === */

  const Title = styled(MuiTypography)({
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000'
  });
  /* ==== Styled Component === */

  return (
    <MuiContainer sx={{ padding: '70px 0px' }}>
      <Title>Primary Activities</Title>
      <MuiDivider />
      <MuiGrid container spacing={2} marginTop="26px" padding="0px 10px">
        {cards.map((card) => (
          <Card key={card} />
        ))}
      </MuiGrid>
    </MuiContainer>
  );
};

export default PrimaryActivities;
