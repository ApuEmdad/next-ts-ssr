import dynamic from 'next/dynamic';

import { MuiTypography, MuiContainer, MuiDivider, MuiGrid } from '@/libs/mui-lib';

import styled from '@emotion/styled';
import Card from '@/common/components/card';
const SupportingActivities = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];

  /* ==== Styled Component === */

  const Title = styled(MuiTypography)({
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000'
  });
  /* ==== Styled Component === */

  return (
    <MuiContainer sx={{ padding: '20px 0px' }}>
      <Title>Supporting Activities</Title>
      <MuiDivider />
      <MuiGrid container spacing={2} marginTop="26px" padding="0px 10px">
        {cards.map((card) => (
          <Card key={card} />
        ))}
      </MuiGrid>
    </MuiContainer>
  );
};

export default SupportingActivities;
