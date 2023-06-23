import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

import '@styles/default.scss';
import Layout from '@layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
