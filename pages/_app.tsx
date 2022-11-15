import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';

export type NextPageWithLayout<P={}, IP=P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  
  return getLayout(<Component {...pageProps} />);
}
