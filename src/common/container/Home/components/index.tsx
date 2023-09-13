import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./banner-component'));
const PrimaryActivities = dynamic(() => import('./primary-activities'));
const SupportingActivities = dynamic(() => import('./supporting-activities'));
const BottomSection = dynamic(() => import('./bottom-section'));


export {
  Banner, PrimaryActivities, SupportingActivities, BottomSection
}