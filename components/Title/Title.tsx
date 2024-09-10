import React from "react";

import css from "./Title.module.css";

function Experiments() {
  const imageSize = 19;
  return (
    <>
      <div className={css.header}>
        <p className={css.name}>Andrei Mukhin</p>
        <p className={css.sphere}>Frontend developer</p>
      </div>
      <div className={css.wrapper}>
        <ul className={css.list}>
          <li className={css.item}>
            <a href="mailto:littlemyx@gmail.com">
              <p>Email: littlemyx@gmail.com</p>
            </a>
          </li>
          <li className={css.item}>
            <p>Telephone: +4917641835027</p>
          </li>
          <li className={css.item}>
            <p>Address: Germany, Berlin, Henriette-Lustig-Str 11</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experiments;
