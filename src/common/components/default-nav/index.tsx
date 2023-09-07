import Image from 'next/image';

import { useState } from 'react';

import styled from '@emotion/styled';

import {
  MuiAppBar,
  MuiContainer,
  MuiToolbar,
  MuiBox,
  MuiButton,
  MuiTypography,
  MuiTooltip,
  MuiIconButton,
  MuiAvatar,
  MuiMenuItem,
  MuiMenu,
} from '../../../libs/mui-lib';

import './styles.module.scss';

export const pages = ['Home', 'About the QF', 'QF Contacts', 'Quality Standard', 'QFSA Resources', 'QFSA Portal', 'QFSA Results'];
export const settings = ['My Profile', 'Notification', 'Settings', 'Logout'];

export default function DefaultNavbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const imageStyle = {
    width: '47px',
    height: '50px',
    marginRight: '10px',
  };

  return (
    <MuiAppBar position="fixed" className="custom-header">
      <MuiContainer maxWidth="xl">
        <MuiToolbar disableGutters>
          <MuiBox
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              paddingX: '30px',
            }}
          >
            <MuiBox sx={{ display: 'flex' }}>
              <MuiButton
                onClick={handleCloseNavMenu}
                sx={{
                  my: 1,
                  color: 'white',
                  fontWeight: 'bold',
                  display: 'flex',
                }}
              >
                <img
                  src={
                    'https://yt3.googleusercontent.com/zhjPWihi4oNSqMP93iEa06B_iKJiZ1QsaDEvZwuHV97PhIoQf4z9iIjKOGaMkPi-dQVDq83p7w=s900-c-k-c0x00ffffff-no-rj'
                  }
                  alt="QF Logo"
                  style={imageStyle}
                  width={50}
                  height={50}
                />
                {/* <img
                  src="https://yt3.googleusercontent.com/zhjPWihi4oNSqMP93iEa06B_iKJiZ1QsaDEvZwuHV97PhIoQf4z9iIjKOGaMkPi-dQVDq83p7w=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                  style={imageStyle}
                /> */}
                <MuiTypography variant="h5" fontSize="22px" fontWeight="bold">
                  Quality Framework
                </MuiTypography>
              </MuiButton>
            </MuiBox>
            <MuiBox sx={{ display: 'flex' }}>
              {pages.map((page) => (
                <MuiButton
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 1,
                    color: 'white',
                    fontWeight: 'bold',
                    display: 'block',
                    fontSize: '12px',
                    fontFamily: 'Lato, sans-serif',
                  }}
                >
                  {page}
                </MuiButton>
              ))}
            </MuiBox>
          </MuiBox>

          <MuiBox sx={{ flexGrow: 0, display: 'flex' }}>
            <MuiButton className="signup-btn">Shortcuts</MuiButton>
            <MuiTooltip title="Open settings">
              <div>
                <MuiIconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MuiAvatar alt="Remy Sharp" />
                </MuiIconButton>
              </div>
            </MuiTooltip>
            <CustomMenu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MuiMenuItem key={setting} onClick={handleCloseUserMenu}>
                  <MuiTypography textAlign="center">{setting}</MuiTypography>
                </MuiMenuItem>
              ))}
            </CustomMenu>
          </MuiBox>
        </MuiToolbar>
      </MuiContainer>
    </MuiAppBar>
  );
}

export const CustomMenu = styled(MuiMenu)({
  '.MuiPaper-root': {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',

    '.MuiList-root': {
      background: '#FFF',
      padding: '8px',
      minWidth: '235px',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '8px',

      '.MuiMenuItem-root': {
        transition: '0.5s',
        borderRadius: '4px',
        borderBottom: '1px solid #cdaaaa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
          // background: "#da291cbf",
          // color: "#FFF",
        },
        '.MuiTypography-body1': {},
      },
    },
  },
});
