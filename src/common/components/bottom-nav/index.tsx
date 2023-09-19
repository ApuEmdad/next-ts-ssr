import React, { useEffect, useRef, useState } from 'react';

const AppRegistrationIcon = dynamic(() => import('@mui/icons-material/AppRegistration'));
const LoginIcon = dynamic(() => import('@mui/icons-material/Login'));
const WebIcon = dynamic(() => import('@mui/icons-material/Web'));
const AccountCircleIcon = dynamic(() => import('@mui/icons-material/AccountCircle'));
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
  MuiMenu,
} from '../../../libs/mui-lib';
import { CustomMenu, pages } from '../default-nav';

import { MuiBottomNavigation, MuiBottomNavigationAction, MuiMenuItem } from '../../../libs/mui-lib';

// import './styles.module.scss';
import dynamic from 'next/dynamic';
import { styled, useMediaQuery } from '@mui/material';

export default function BottomNav() {
  const [value, setValue] = useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const user = ['profile', 'account', 'login'];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openUser = Boolean(anchorElUser);

  //-----Handling bottom Pages Menu
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //-----Handling Bottom User Menu
  const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleUserClose = () => {
    setAnchorElUser(null);
  };

  const BottomNav = styled(MuiBottomNavigation)`
  position: fixed;
  width:100%;
  bottom: 0;
  background-color: #fff;
  backdrop-filter:blur(2px);
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;

  .MuiBottomNavigationAction-root {
    &:hover {
      color:#DA291C;
    }
  }
  .css-1bjk3jo-MuiButtonBase-root-MuiBottomNavigationAction-root.Mui-selected {
    color: var(--primary-color);
}
`;

  const isMd = useMediaQuery('(min-width:600px)');
  const BottomNavMenu = styled(MuiMenu)({
    height: '100%',
    '.MuiMenu-paper': {
      top: isMd ? 'calc(100% - 20rem) !important' : 'calc(100% - 25rem) !important',
      left: '10% !important',
      bottom: '5%',
      height: 'fit-content'
    }
  })

  const BottomUserMenu = styled(MuiMenu)({
    height: '100%',
    '.MuiMenu-paper': {
      top: isMd ? 'calc(100% - 11rem) !important' : 'calc(100% - 13rem) !important',
      left: '75% !important',
      bottom: '5%',
      height: 'fit-content'
    }
  })

  const BottomMenuItem = styled(MuiMenuItem)({
    textTransform: 'capitalize',
    '&:hover': {
      color: 'var(--primary-color)'
    }
  })



  return (
    <BottomNav value={value} onChange={handleChange} showLabels>
      <MuiBottomNavigationAction label="Pages" value="pages" icon={<WebIcon />}
        onClick={handleClick}
        id='basic-button'
      />
      <BottomNavMenu
        id="basic-menu"
        anchorEl={anchorEl}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        open={open}
        onClose={handleClose}
      >
        {
          pages.map((item, i) => <BottomMenuItem
            key={i}
            onClick={handleClose}>{item.name}</BottomMenuItem>)
        }
      </BottomNavMenu>
      <MuiBottomNavigationAction label="Sign Up" value="signup" icon={<AppRegistrationIcon />} />
      <MuiBottomNavigationAction label="Login" value="login" icon={<LoginIcon />} />
      <MuiBottomNavigationAction
        onClick={handleUserClick}
        id='user-button'
        aria-controls={openUser ? 'user-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={openUser ? 'true' : undefined}
        label="User" value="user" icon={<AccountCircleIcon />} />
      <BottomUserMenu
        id="user-menu"
        anchorEl={anchorElUser}
        open={openUser}
        onClose={handleUserClose}
        MenuListProps={{
          'aria-labelledby': 'user-button',
        }}
      >
        {
          user.map((item, i) => <BottomMenuItem
            key={i}
            onClick={handleUserClose}>{item}</BottomMenuItem>)
        }
      </BottomUserMenu>
    </BottomNav>
  );
}
