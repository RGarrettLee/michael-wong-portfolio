import '../styles/globals.css'
import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Michael Wong</title>
        <meta name='description' content='A portfolio page for Michael Wong'></meta>
        <meta name='author' content='Michael Wong'></meta>
        <meta name='viewport' content='width=device-width, intial-scale=1.0'></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
