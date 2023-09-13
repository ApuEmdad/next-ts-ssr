import { MuiBox, MuiChip, MuiIconButton, MuiInputBase, MuiPaper } from '@/libs/mui-lib';

import styled from '@emotion/styled';

import { MuiSearch } from '@/libs/mui-icons';

const Banner = () => {
  const chipsText = ['Climate', 'Environment', 'Communication'];
  /* ==== Styled Component ===== */
  const Container = styled(MuiBox)({
    // eslint-disable-next-line quotes
    background: `url('./assets/home/banner.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '206px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const Wrapper = styled(MuiBox)({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const MuiSearchPaper = styled(MuiPaper)({
    padding: '2px 30px',
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    marginBottom: '26px',
  });

  const ChipsContainer = styled(MuiBox)({
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const PopularText = styled('span')({
    fontSize: '16px',
    color: '#fff',
    marginRight: '16px',
  });

  const Suggestion = styled(MuiChip)({
    color: 'white',
    padding: '4px',
    cursor: 'pointer',
    margin: '0px 5px',
  });
  /* ==== Styled Component ===== */

  const suggestionProps = (label: any) => {
    return {
      icon: <MuiSearch sx={{ fill: '#fff' }} />,
      label,
    };
  };

  return (
    <Container>
      <Wrapper>

        <MuiSearchPaper>
          <MuiIconButton sx={{ p: '10px' }}>{/* <MuiSearch /> */}</MuiIconButton>
          <MuiInputBase sx={{ ml: 1, flex: 1 }} placeholder='MuiSearch the quality framework ' />
        </MuiSearchPaper>

        <ChipsContainer>
          <PopularText>Popular MuiSearches:</PopularText>
          {chipsText.map((chip) => (
            <Suggestion key={chip} {...suggestionProps(chip)} />
          ))}
        </ChipsContainer>
        
      </Wrapper>
    </Container>
  );
};

export default Banner;
