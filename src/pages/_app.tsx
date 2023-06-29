import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';

import '@styles/default.scss';
import Layout from '@layouts/Layout';
import { TelegramProvider } from '@providers/telegramProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <TelegramProvider>
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </TelegramProvider>
    </>
  );
}

export default MyApp;
