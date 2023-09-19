import {
  MuiPaper, MuiBox, MuiTypography, MuiDivider, MuiButton, MuiFormControlLabel, MuiCheckbox
} from 'qf/libs/mui-lib';
import styled from '@emotion/styled';
import { MuiFilterAltOff } from 'qf/libs/mui-icons';

export const languages = ['Arabic', 'English', 'French', 'Portuguese', 'Spanish'];

const WideScreenFilter = () => {
  /* ==== Styled Component Starts ==== */
  const Wrapper = styled(MuiPaper)({
    padding: '28px 27px 28px 70px'
  });
  const TitleContainer = styled(MuiBox)({
    display: 'flex',
    flexDirection: 'column'
  });
  const Title = styled(MuiTypography)({
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '17px'
  });
  const ClearText = styled(MuiTypography)({
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#DA291C',
    alignSelf: 'end'
  });
  const FilterContainer = styled(MuiBox)({
    margin: '16px 0px 0px'
  });
  const FilterTitleContainer = styled(MuiBox)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  });
  const FilterTitle = styled(MuiTypography)({
    fontSize: '14px',
    fontWeight: 'bold'
  });
  const FilterText = styled(MuiTypography)({
    fontSize: '12px'
  });
  const CheckBoxContainer = styled(MuiBox)({
    display: 'flex',
    flexDirection: 'column'
  });
  const CheckboxLabel = styled(MuiTypography)({
    fontSize: '12px'
  });
  /* ==== Styled Component ends ==== */

  return (
    <Wrapper>
      <TitleContainer>
        <Title variant="body2">Filters</Title>
        <ClearText>Clear All</ClearText>
        <MuiDivider />
      </TitleContainer>

      <FilterContainer>
        <FilterTitle variant="body2">Pinned</FilterTitle>
        <FilterText variant="body2">No pinned links available</FilterText>
      </FilterContainer>

      <FilterContainer>
        <FilterTitleContainer>
          <FilterTitle variant="body2">Languages</FilterTitle>
          <MuiButton>
            <MuiFilterAltOff />
            <MuiTypography variant="button" sx={{ color: 'black' }}>
              Clear
            </MuiTypography>
          </MuiButton>
        </FilterTitleContainer>
        <CheckBoxContainer>
          {
            languages.map((language) => (
              <MuiFormControlLabel key={language} control={<MuiCheckbox />} label={<CheckboxLabel>{language}</CheckboxLabel>}
              />))
          }

        </CheckBoxContainer>
      </FilterContainer>
    </Wrapper>
  );
};

export default WideScreenFilter;
