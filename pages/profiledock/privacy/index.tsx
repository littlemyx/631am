import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.css";

function ProfileDockPrivacy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>ProfileDock Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for the ProfileDock desktop app and its sign-in service."
        />
        <link rel="canonical" href="https://631am.com/profiledock/privacy/" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <header>
            <h1 className={styles.title}>ProfileDock Privacy Policy</h1>
            <p className={styles.tagline}>Last updated: 19 November 2026</p>
          </header>

          <section className={styles.section}>
            <p>
              This policy describes what the ProfileDock desktop app and its
              sign-in service collect and how that data is used. ProfileDock is
              operated by Andrei Mukhin (&quot;we&quot;).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Data we collect</h2>
            <p>
              When you sign in with Google, the sign-in service receives and
              stores:
            </p>
            <ul className={styles.list}>
              <li>
                your Google account identifier (the stable <code>sub</code>{" "}
                value Google issues for your account);
              </li>
              <li>
                your email address, and the fact that Google has verified it;
              </li>
              <li>
                a device label describing the platform the app runs on (for
                example <code>darwin-arm64</code>);
              </li>
              <li>
                timestamps of when each session was created and last refreshed.
              </li>
            </ul>
            <p>
              To limit abuse, the service also keeps a short-lived, hashed form
              of the IP address a request came from. The raw IP address is not
              stored.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. Data we do not collect</h2>
            <p>
              Browser profiles, browsing history, cookies, network routes, proxy
              credentials, VPN configuration files and their keys stay on your
              Mac. They are never sent to the sign-in service. The app contains
              no analytics or advertising trackers.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Google user data</h2>
            <p>
              ProfileDock requests only the <code>openid</code> and{" "}
              <code>email</code> scopes. It uses your Google account identifier
              and email address solely to create and recognise your ProfileDock
              account and to issue the token that lets the app run. It does not
              access any other Google data, and it does not use Google user data
              for advertising, does not sell it, and does not transfer it to
              third parties except the service providers listed below.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>4. How the data is used</h2>
            <ul className={styles.list}>
              <li>to sign you in and keep you signed in;</li>
              <li>
                to issue a signed token that lets the app work, including
                offline for up to 7 days;
              </li>
              <li>to let a session be revoked;</li>
              <li>to protect the service from abuse.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. Service providers</h2>
            <p>
              The sign-in service runs on Cloudflare (Workers and D1), which
              stores the data listed above on our behalf. Sign-in itself is
              performed by Google. We do not share your data with anyone else.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. Retention</h2>
            <p>
              Session records are invalidated after 30 days without use and
              deleted about 30 days after that. Rate-limiting records are
              deleted within minutes to hours. Account records (Google account
              identifier and email address) are kept until you ask us to delete
              them.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>7. Your choices</h2>
            <p>
              You can sign out in the app at any time, which revokes that
              session. To have your account and all associated records deleted,
              or to ask what we hold about you, email{" "}
              <a href="mailto:littlemyx@gmail.com">littlemyx@gmail.com</a>. You
              can also remove ProfileDock&apos;s access in your Google Account
              settings under third-party connections.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>8. Security</h2>
            <p>
              Sign-in tokens are stored on the server only as hashes. On your
              Mac they are encrypted using the macOS keychain. All communication
              with the sign-in service uses HTTPS.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>9. Changes</h2>
            <p>
              If this policy changes, the new version will be published on this
              page with a new date.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>10. Contact</h2>
            <p>
              Andrei Mukhin —{" "}
              <a href="mailto:littlemyx@gmail.com">littlemyx@gmail.com</a>
            </p>
          </section>
        </main>
        <footer className={styles.footer}>
          <Link href="/profiledock/">ProfileDock</Link>
        </footer>
      </div>
    </>
  );
}

export default ProfileDockPrivacy;
