import Image from 'next/image';

import { useRef, useState } from 'react';

import { styled, useMediaQuery } from '@mui/material';

import {
  MuiBox, MuiButton, MuiTypography, MuiAvatar, MuiMenuItem, MuiMenu, MuiPaper
} from '../../../libs/mui-lib';

import './styles.module.scss';

import Link from 'next/link'

export const pages = [
  { name: 'Home', link: '/' },
  { name: 'content-list', link: '/content-list' },
  { name: 'todo', link: '/todo' },
  { name: 'todo-photo', link: '/todo-photo' },
  { name: 'Quality Standard', link: '/standard' },
  { name: 'QFSA Portal', link: '/portal' },
  { name: 'QFSA Results', link: '/results' },
];
export const settings = ['My Profile', 'Notification', 'Settings', 'Logout'];

export default function DefaultNavbar() {
  const [anchorElNav, setAnchorElNav] = useState(false);

  const open = Boolean(anchorElNav);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(!anchorElNav);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };


  const imageStyle = {
    width: '47px',
    height: '50px',
    marginRight: '10px',
  };

  const isMd = useMediaQuery('(max-width:1420px)');

  const Wrapper = styled(MuiPaper)({
    width: '100%',
    padding: '1.5rem 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    backgroundColor: '#fff',
    height: isMd ? '100px' : '90px',
    zIndex: '1',
    borderRadius: '0px'
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
    border: '1px solid var(--primary-color)',
    backgroundColor: 'transparent',
    color: 'var(--primary-color)',
    marginRight: '10px',
    '&:hover': {
      backgroundColor: 'var(--primary-color)',
      color: '#fff'
    }
  })

  const DropDown = styled(MuiButton)({
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'transparent',
    }
  })


  const dropdown = useRef(null)
  return (
    <Wrapper>
      <NavBox>
        {/* Image */}
        <Link href='/'>
          <MuiTypography variant='h5' sx={{ fontWeight: '700', cursor: 'pointer' }}>QUALITY FRAMEWORK</MuiTypography>
        </Link>
      </NavBox>
      <NavBox>
        {
          pages.map((page, i) => (
            <NavItem key={i}>
              <MuiTypography sx={{ fontWeight: '700' }} variant='body2'>
                <Link href={page.link}>{page.name}</Link>
              </MuiTypography>
            </NavItem>
          ))
        }
      </NavBox>

      <NavBox>
        <OutlinedButton>Shortcuts</OutlinedButton>
        <DropDown ref={dropdown}>
          <MuiAvatar
            id='basic-button'
            onClick={handleOpenNavMenu}
            data-testid='UserDropDown'
          ></MuiAvatar>
        </DropDown>
      </NavBox>
      {open && (
        <CustomMenu
          id='basic-menu'
          anchorEl={dropdown.current}
          open={open}
          onClose={handleCloseNavMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          {
            settings.map((item, i) => <MuiMenuItem key={i} onClick={handleCloseNavMenu}>{item}</MuiMenuItem>)
          }
        </CustomMenu>
      )}
    </Wrapper>
  );
}

export const CustomMenu = styled(MuiMenu)({
  '.MuiPaper-root': {
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',


    '.MuiList-root': {
      padding: '8px',
      width: '200px',
      display: 'flex',
      flexDirection: 'column',
      rowGap: '8px',
      zIndex: '100',
      justifyContent: 'center',

      '.MuiMenuItem-root': {
        transition: '0.5s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
          // background: '#da291cbf',
          color: 'var(--primary-color)',
        },
      },
    },
  },
  '.MuiMenu-paper': {
    width: 'fit-content',
    // right: '1rem',
    top: '5rem !important',
    left: '85% !important',
    transform: 'none',
    transition: 'opacity 272ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 181ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important',
    transformOrigin: '0px 0px !important',
  }
});
