import React, { useState } from 'react';

const AppRegistrationIcon = dynamic(() => import('@mui/icons-material/AppRegistration'));
const LoginIcon = dynamic(() => import('@mui/icons-material/Login'));
const WebIcon = dynamic(() => import('@mui/icons-material/Web'));
const AccountCircleIcon = dynamic(() => import('@mui/icons-material/AccountCircle'));

import { CustomMenu } from '../default-nav';

import { MuiBottomNavigation, MuiBottomNavigationAction, MuiMenuItem } from '../../../libs/mui-lib';

import './styles.module.scss';
import dynamic from 'next/dynamic';

export default function BottomNav() {
  const [value, setValue] = useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bottom-navbar">
      <MuiBottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} showLabels>
        <MuiBottomNavigationAction label="Pages" value="pages" icon={<WebIcon />} onClick={handleClick} />
        <CustomMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MuiMenuItem onClick={handleClose}>Profile</MuiMenuItem>
          <MuiMenuItem onClick={handleClose}>My account</MuiMenuItem>
          <MuiMenuItem onClick={handleClose}>Logout</MuiMenuItem>
        </CustomMenu>
        <MuiBottomNavigationAction label="Sign Up" value="signup" icon={<AppRegistrationIcon />} />
        <MuiBottomNavigationAction label="Login" value="login" icon={<LoginIcon />} />
        <MuiBottomNavigationAction label="User" value="user" icon={<AccountCircleIcon />} />
      </MuiBottomNavigation>
    </div>
  );
}
