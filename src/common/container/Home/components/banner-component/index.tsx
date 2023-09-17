import { MuiBox, MuiChip, MuiIconButton, MuiInputBase, MuiPaper } from '@/libs/mui-lib';
import { styled, useMediaQuery } from '@mui/material';
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
    width: '80%',
    margin: '0px auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const isMd = useMediaQuery('(min-width:690px)');
  const MuiSearchPaper = styled(MuiPaper)({
    padding: '2px 30px',
    display: 'flex',
    alignItems: 'center',
    width: isMd?'60%':'100%',
    marginBottom: '26px',
  });

  const ChipsContainer = styled(MuiBox)({
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media(max-width: 867px)':{
      flexDirection:'column',
      gap:'0.5rem'

    }
  });

  const Chips = styled(MuiBox)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexWrap:'wrap',
    gap:'0.3rem'
  })

  const PopularText = styled('span')({
    fontSize: '16px',
    color: '#fff',
    marginRight: '16px',
  });

  const Suggestion = styled(MuiChip)({
    color: 'white',
    padding: '2px',
    cursor: 'pointer',
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
          <MuiIconButton sx={{ p: '10px' }}><MuiSearch /></MuiIconButton>
          <MuiInputBase sx={{ flex: 1 }} placeholder='Search the quality framework ' />
        </MuiSearchPaper>

        <ChipsContainer>
          <PopularText>Popular Searches:</PopularText>
          <Chips>
            {chipsText.map((chip) => (
              <Suggestion key={chip} {...suggestionProps(chip)} />
            ))}
          </Chips>
        </ChipsContainer>
        
      </Wrapper>
    </Container>
  );
};

export default Banner;
