import { Header } from '../header';

const LayOut = ({ children }: React.FC | any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <h1>Footer</h1>
    </div>
  );
};

export default LayOut;
