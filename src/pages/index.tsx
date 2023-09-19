import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from 'qf/styles/Home.module.css';
import { MuiContainer, MuiPaper, MuiBox, MuiTypography, MuiDivider, MuiButton } from 'qf/libs/mui-lib';
import Dummy from 'qf/common/components/dummy/dummy';
import HomePage from 'qf/common/container/Home';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next-ts-mui</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <HomePage />

      </main>
    </>
  );
}
