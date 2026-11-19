import React from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.css";

function ProfileDock() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>ProfileDock</title>
        <meta
          name="description"
          content="ProfileDock: isolated browser profiles for macOS, each with its own network route."
        />
        <link rel="canonical" href="https://631am.com/profiledock/" />
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <header>
            <h1 className={styles.title}>ProfileDock</h1>
            <p className={styles.tagline}>
              Isolated browser profiles for macOS, each with its own network
              route.
            </p>
          </header>

          <section className={styles.section}>
            <h2 className={styles.heading}>What it does</h2>
            <ul className={styles.list}>
              <li>
                Keeps separate browser profiles on your Mac. Each profile has
                its own cookies, storage and settings and never shares them with
                another profile.
              </li>
              <li>
                Lets you give every profile its own network route: an HTTP or
                SOCKS proxy, WireGuard, OpenVPN, VLESS, Shadowsocks, Trojan,
                Hysteria2 or TUIC. You bring your own servers and configuration
                files.
              </li>
              <li>
                Refuses to open a profile when its route is down, so a profile
                never falls back to your normal connection without you
                noticing.
              </li>
              <li>Imports routes in bulk from configuration files and share links.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Sign in with Google</h2>
            <p>
              ProfileDock asks you to sign in with a Google account. Sign-in is
              used only to identify your ProfileDock account. The app requests
              the basic <code>openid</code> and <code>email</code> scopes and
              nothing else: it does not read your Gmail, Drive, contacts or any
              other Google data. Details are in the{" "}
              <Link href="/profiledock/privacy/">Privacy Policy</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>What stays on your Mac</h2>
            <p>
              Profiles, browsing data, routes, VPN configuration files and their
              keys are stored locally and are never sent to ProfileDock servers.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Requirements</h2>
            <p>macOS on Apple Silicon.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Contact</h2>
            <p>
              Questions and requests:{" "}
              <a href="mailto:littlemyx@gmail.com">littlemyx@gmail.com</a>
            </p>
          </section>
        </main>
        <footer className={styles.footer}>
          © 2026 Andrei Mukhin ·{" "}
          <Link href="/profiledock/privacy/">Privacy Policy</Link>
        </footer>
      </div>
    </>
  );
}

export default ProfileDock;
