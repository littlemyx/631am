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
            <a href="mailto:littlemyx@gmail.com" className={css.position}>
              <img
                className={css.icon}
                height={imageSize}
                width={imageSize}
                alt="envelope icon"
                src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-interface-kiranshastry-lineal-kiranshastry-1.png"
              />
              <span>littlemyx@gmail.com</span>
            </a>
          </li>
          <li className={css.item}>
            <span className={css.position}>
              <img
                className={css.icon}
                height={imageSize}
                width={imageSize}
                alt="geomarker icon"
                src="https://img.icons8.com/ios-filled/50/000000/marker.png"
              />
              Tbilisi, Georgia
            </span>
          </li>
          <li className={css.item}>
            <a
              href="https://linkedin.com/in/andrey-mukhin"
              className={css.position}
            >
              <img
                className={css.icon}
                height={imageSize}
                width={imageSize}
                alt="linkedin icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
              />
              <span>linkedin.com/in/andrey-mukhin</span>
            </a>
          </li>
          <li className={css.item}>
            <a href="tel:+995599016317" className={css.position}>
              <img
                className={css.icon}
                height={imageSize}
                width={imageSize}
                alt="phone icon"
                src="https://img.icons8.com/ios/50/000000/phone.png"
              />
              <span>+995599016317</span>
            </a>
          </li>
          <li className={css.item}>
            <a href="https://631am.com" className={css.position}>
              <img
                className={css.icon}
                height={imageSize}
                width={imageSize}
                alt="website icon"
                src="https://img.icons8.com/ios-glyphs/30/000000/domain.png"
              />
              <span>631am.com</span>
            </a>
          </li>
          <li className={css.item}>
            <a href="https://github.com/littlemyx" className={css.position}>
              <img
                className={css.icon}
                height={imageSize}
                width={imageSize}
                alt="github icon"
                src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
              />
              <span>github.com/littlemyx</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experiments;
