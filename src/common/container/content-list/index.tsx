import styled from '@emotion/styled';
import { MuiBox, MuiContainer } from '@/libs/mui-lib';
import { WideScreenFilter, Contents } from './components';
import useMediaQuery from '@mui/material/useMediaQuery';

const ContentList = () => {
  const isWideScreen = useMediaQuery('(min-width: 900px)');
  /* ==== Styled Component Starts ==== */
  const Wrapper = styled(MuiBox)({
    display: 'flex',
    padding: '20px 0px'
  });
  const FilterContainer = styled(MuiBox)({
    width: '365px',
    height: '80vh'
  });
  /* ==== Styled Component Ends ==== */

  return (
    <Wrapper>
      {isWideScreen && (
        <FilterContainer>
          <WideScreenFilter />
        </FilterContainer>
      )}
      <MuiContainer >
        <Contents isWideScreen={isWideScreen} />
      </MuiContainer>
    </Wrapper>
  );
};

export default ContentList;
