import { MuiBox } from '@/libs/mui-lib';
import { Header } from '../header';
import { useMediaQuery } from '@mui/material';


const LayOut = ({ children }: React.FC | any) => {
  const isMd = useMediaQuery('(min-width:900px)')
  return (
    <div>
      <Header />
      {
        isMd && <MuiBox marginTop='80px'></MuiBox>
      }
      <MuiBox >{children}</MuiBox>
      <h5>Footer</h5>
    </div>
  );
};

export default LayOut;
