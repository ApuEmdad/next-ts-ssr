import { MuiContainer, MuiPaper, MuiInputBase, MuiDivider, MuiIconButton } from 'qf/libs/mui-lib';
import styled from '@emotion/styled';
import { MuiClose, MuiSearch } from 'qf/libs/mui-icons';
import { MediumScreenFilter } from '..';

interface ContentsProps {
  isWideScreen: Boolean
}
const Contents = ({ isWideScreen }: ContentsProps) => {

  /* ==== Styled Component Starts ==== */
  const SearchContainer = styled(MuiPaper)({
    width: isWideScreen ? '50%' : '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '2px 4px'
  });

  /* ==== Styled Component Ends ==== */

  return (
    <MuiContainer>
      <SearchContainer >
        <MuiIconButton sx={{ p: '10px' }}>
          <MuiSearch />
        </MuiIconButton>
        <MuiDivider sx={{ height: 28, m: 0.5 }} />
        <MuiInputBase sx={{ ml: 1, flex: 1 }} placeholder='Search' />
        <MuiDivider sx={{ height: 28, m: 0.5 }} />
        <MuiIconButton sx={{ p: '10px' }}>
          <MuiClose />
        </MuiIconButton>
      </SearchContainer>

      {!isWideScreen && <MediumScreenFilter />}
    </MuiContainer>
  );
};

export default Contents;
