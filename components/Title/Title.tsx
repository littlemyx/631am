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
            <p>Telephone: +79999863928</p>
          </li>
          <li className={css.item}>
            <p>
              Address: Russian Federation, Moscow, 4y Vyatskiy per. 35, flat 47
            </p>
          </li>
          <li className={css.item}>
            <p>
              Date and place of birth: 20 Jan 1992, Russian Federation city
              Saratov
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experiments;
