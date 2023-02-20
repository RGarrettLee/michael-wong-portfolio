import '../styles/globals.css'
import React from 'react';
import Head from 'next/head';
import Footer from '../components/footer';

// pass in user here to have it carry through all pages and use it finally for stuff?
// pass into navbar as a prop

function MyApp({ Component, pageProps }) {

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>Michael Wong</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
