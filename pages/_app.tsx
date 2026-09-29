import { useEffect } from "react";
import "../styles/globals.css";
import { installCheatGate } from "../utils/cheatGate";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  useEffect(() => installCheatGate(), []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);

  return getLayout(<Component {...pageProps} />);
}
