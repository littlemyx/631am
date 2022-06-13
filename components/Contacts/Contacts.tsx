import React from "react";
import Image from "next/image";

import contactsList from "./contacts-list";
import css from "./Contacts.module.css";

// const myLoader = ({ src }: { src: string }) => src;

const Contacts = () => {
  return (
    <div className={css.wrapper}>
      <p>Contacts:</p>
      <ul>
        {contactsList.map(
          item =>
            !item.hidden && (
              <li className={css.contact} key={item.link}>
                <a
                  className={css.link}
                  rel="noreferrer"
                  href={item.link}
                  target="_blank"
                >
                  <img
                    // loader={myLoader}
                    height={22}
                    width={22}
                    alt={item.name}
                    src={item.icon}
                  />
                  <span className={css.name}>{item.name}</span>
                </a>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Contacts;
