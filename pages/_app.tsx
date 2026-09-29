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
  useEffect(() => {
    if (typeof window === "undefined" || !/[?&]cheatdebug=1/.test(window.location.search)) return installCheatGate();
    const box = document.createElement("pre");
    box.style.cssText =
      "position:fixed;left:0;bottom:0;max-height:40vh;width:100%;overflow:auto;margin:0;padding:8px;font:12px/1.3 monospace;background:#000;color:#0f0;z-index:99999;opacity:.9";
    box.textContent = `cheatdebug ${navigator.userAgent}\n`;
    document.body.appendChild(box);
    const onDebug = (line: string) => {
      box.textContent += line + "\n";
      box.scrollTop = box.scrollHeight;
    };
    const uninstall = installCheatGate({ onDebug });
    return () => {
      uninstall();
      box.remove();
    };
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page);

  return getLayout(<Component {...pageProps} />);
}
