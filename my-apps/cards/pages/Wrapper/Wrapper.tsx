import { PropsWithChildren } from "react";

import { useRoutesStore } from "../../stores/router";

import styles from "./Wrapper.module.css";

interface WrapperProps {
  title: string;
}

export const Wrapper = ({
  title,
  children
}: PropsWithChildren<WrapperProps>) => {
  const goToMain = useRoutesStore(state => state.goToMain);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div>
          <button onClick={goToMain}>To Main</button>
        </div>
        <div className={styles.title}>{title}</div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
