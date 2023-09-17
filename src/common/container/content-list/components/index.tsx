import dynamic from 'next/dynamic';

export const WideScreenFilter = dynamic(() => import('./wide-screen-filter'));
export const MediumScreenFilter = dynamic(() => import('./medium-screen-filter'));
export const Contents = dynamic(() => import('./contents'));
