import "./globals.css"
import "./responsive.css"


import Head from 'next/head';
import Providers from '../pages/Providers';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Portofolio | Hardi Mahendra</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/diamond.png" />
      </Head>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </>
  );
}

export default MyApp;