import { MuiFilterAlt, MuiExpandMore, MuiFilterAltOff } from '@/libs/mui-icons';
import {
  MuiBox, MuiButton, MuiContainer, MuiDrawer, MuiTypography, MuiAccordion, MuiAccordionDetails, MuiAccordionSummary, MuiFormControlLabel, MuiCheckbox
} from '@/libs/mui-lib';
import styled from '@emotion/styled';
import { useState } from 'react';
import { languages } from '../../components/wide-screen-filter/index'

const MediumScreenFilter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen((prev) => (!prev));
  };

  /* ==== Styled Component Starts ==== */
  const Wrapper = styled(MuiContainer)({
    padding: '10px'
  });
  const TitleContainer = styled(MuiBox)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  });
  const Title = styled(MuiTypography)({
    fontSize: '18px',
    fontWeight: 'bold'
  });
  const ClearText = styled(MuiTypography)({
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#DA291C'
  });

  const FilterContainer = styled(MuiBox)({
    margin: '16px 0px 0px'
  });
  const FilterTitleContainer = styled(MuiBox)({
    width: '100%',
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
  /* ==== Styled Component Ends ==== */

  return (
    <div>
      <MuiButton variant='contained' color='error' onClick={toggleDrawer} sx={{ width: '100%', my: '10px' }}>
        <MuiFilterAlt />
      </MuiButton>
      <MuiDrawer open={drawerOpen} onClose={toggleDrawer} anchor="bottom">
        <Wrapper>
          <TitleContainer>
            <Title variant="body2">Filters</Title>
            <MuiButton> <ClearText>Clear All</ClearText></MuiButton>
          </TitleContainer>
          <MuiAccordion>
            <MuiAccordionSummary expandIcon={<MuiExpandMore />}>
              <FilterTitleContainer>
                <FilterTitle variant="body2">Languages</FilterTitle>
                <MuiButton>
                  <MuiFilterAltOff />
                  <MuiTypography variant="button" sx={{ color: 'black' }}>
                    Clear
                  </MuiTypography>
                </MuiButton>
              </FilterTitleContainer>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
              <CheckBoxContainer>
                {
                  languages.map((language) => (
                    <MuiFormControlLabel key={language} control={<MuiCheckbox />} label={<CheckboxLabel>{language}</CheckboxLabel>}
                    />))
                }
              </CheckBoxContainer>
            </MuiAccordionDetails>
          </MuiAccordion>

        </Wrapper>
      </MuiDrawer>
    </div>
  );
};

export default MediumScreenFilter;