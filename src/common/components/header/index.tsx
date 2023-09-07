import React, { useState, useEffect } from 'react';

import BottomNav from '../bottom-nav';
import DefaultNavbar from '../default-nav';

// import './styles.module.scss';

interface IProps {
  bottomNavEnabled?: boolean;
}

export function Header({ bottomNavEnabled = true }: IProps) {
  const [hideDefaultNav, setHideDefaultNav] = useState<null | boolean>(false);

  useEffect(() => {
    const checkWindowResize = () => {
      if (window.innerWidth < 900 && bottomNavEnabled) {
        setHideDefaultNav(true);
      } else {
        setHideDefaultNav(false);
      }
    };

    window.addEventListener('resize', checkWindowResize);
    window.addEventListener('load', checkWindowResize);

    return () => {
      window.removeEventListener('resize', checkWindowResize);
      window.addEventListener('load', checkWindowResize);
    };
  }, [bottomNavEnabled]);

  const shouldRenderBottomNav = (): boolean => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 990 && (!bottomNavEnabled || !hideDefaultNav)) {
        return false;
      }

      if (window.innerWidth < 990 && bottomNavEnabled && hideDefaultNav) {
        return true;
      }
    }

    return false;
  };

  return <React.Fragment>{shouldRenderBottomNav() ? <BottomNav /> : <DefaultNavbar />}</React.Fragment>;
}
