import React from "react";
import Head from "next/head";

import styles from "./index.module.css";

function GoodOldTwitter() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>The Bird is back!</title>
        <link rel="canonical" href="http://631am.com/good-old-twitter" />
      </Head>
      <div className={styles.container}>
        <div className={styles.background}>
          <header className={styles.hero}>
            <svg
              className={styles.twitterIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="72"
              height="72"
            >
              <path
                fill="#1DA1F2"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
            <h1 className={styles.title}>The Bird is back!</h1>
            <div className={styles.descriptionBox}>
              <p className={styles.description}>
                Longing for the simplicity and familiarity of the old Twitter
                bird logo? The &quot;Good Old Twitter&quot; extension is here to
                bring it back! Wave goodbye to the new &quot;X&quot; logo and
                welcome back the original Twitter bird. Perfect for those who
                miss the classic design and crave a touch of nostalgia. Join
                thousands of users who are rediscovering the charm of the
                original logo. Available now for all chromium-based browsers.
                Stay tuned for upcoming versions for Firefox and Safari. Get the
                &quot;Good Old Twitter&quot; extension today and tweet in style!
              </p>
            </div>
          </header>
          <main className={styles.cta}>
            <div className={styles.section}>
              <a
                href="https://chrome.google.com/webstore/detail/good-old-twitter/bgfjejkobipclcknhenalahjbbphleio"
                target="_blank"
                rel="noreferrer"
                className={styles.storeLink}
              >
                <span className={styles.iconPlaceholder}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#efefef"
                      d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                    />
                  </svg>
                </span>
                Get it now on Chrome Web Store
              </a>
              <p className={styles.browserNote}>
                Available for all chromium-based browsers
              </p>
            </div>
            <div className={styles.otherBrowsers}>
              <h3 className={styles.otherBrowsersTitle}>Other Browsers</h3>
              <p className={styles.otherBrowserNote}>
                Coming soon for Firefox and Safari browsers.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default GoodOldTwitter;
