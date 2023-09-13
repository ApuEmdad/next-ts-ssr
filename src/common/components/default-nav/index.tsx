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

  const open = Boolean(anchorElNav);
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

  const Wrapper = styled(MuiBox)({
    width: '100%',
    padding: '1.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
  })

  const NavBox = styled(MuiBox)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px'
  })

  const NavItem = styled(MuiButton)({
    color: 'black',
    '&:hover': {
      color: 'red'
    }
  })

  const OutlinedButton = styled(MuiButton)({
    border: '1px solid red',
    backgroundColor: 'transparent',
    color: 'red',
    marginRight: '10px',
  })

  return (
    <Wrapper>
      <NavBox>
        {/* Image */}
        <MuiTypography variant='h5' sx={{ fontWeight: '700' }}>QUALITY FRAMEWORK</MuiTypography>
      </NavBox>
      <NavBox>
        {
          pages.map((item, i) => <NavItem
            key={i}>
            <MuiTypography
              sx={{ fontWeight: '700' }}
              variant='body2'>{item}</MuiTypography>
          </NavItem>)
        }
      </NavBox>
      <NavBox>
        <OutlinedButton>Shortcuts</OutlinedButton>
        <MuiAvatar
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleOpenNavMenu}
        ></MuiAvatar>
      </NavBox>
      <CustomMenu
        id='basic-menu'
        anchorEl={anchorElNav}
        open={open}
        onClose={handleCloseNavMenu}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MuiMenuItem onClick={handleCloseNavMenu}>Profile</MuiMenuItem>
        <MuiMenuItem onClick={handleCloseNavMenu}>Account</MuiMenuItem>
        <MuiMenuItem onClick={handleCloseNavMenu}>Login</MuiMenuItem>

      </CustomMenu>
    </Wrapper>
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
      },
    },
  },
  '.MuiMenu-paper': {
    right: '1rem',
    top: '4rem !important',
    left: '80% !important',
  }
});
