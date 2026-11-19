import React, { useState } from "react";
import PropTypes from "prop-types";

import Sunrise from "@/components/images/Sunrise";
import Contacts from "@/components/Contacts";
import Description from "@/components/Description";
import Experiments from "@/components/Experiments";
import CV from "@/components/CV";
import Articles from "@/components/Articles";
import { submitCheatCode } from "@/utils/cheatGate";

import css from "./Body.module.css";

/** Taps on the sun that reveal the cheat-code input (touch path for the keydown gate). */
const SUN_TAPS = 10;

const Body = () => {
  const [taps, setTaps] = useState(0);
  const [code, setCode] = useState("");
  const showInput = taps >= SUN_TAPS;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) void submitCheatCode(code.trim());
  };

  return (
    <div className={css.wrapper}>
      <div className={css.sunrise}>
        <Sunrise width={150} height={128} className={css.sun} onClick={() => setTaps(t => t + 1)} />
      </div>
      {showInput && (
        <form className={css.cheat} onSubmit={onSubmit}>
          <input
            className={css.cheatInput}
            value={code}
            onChange={e => setCode(e.target.value)}
            autoFocus
            autoCapitalize="characters"
            autoCorrect="off"
            autoComplete="off"
            spellCheck={false}
            enterKeyHint="go"
            aria-label="Code"
          />
          <button className={css.cheatButton} type="submit">
            OK
          </button>
        </form>
      )}
      <div>
        <Description />
      </div>
      <br />
      {/* <div>
        <Experiments />
      </div> */}
      <div>
        <CV />
      </div>
      {/* <div>
        <Articles />
      </div> */}
      <br />
      <div>
        <Contacts />
      </div>
    </div>
  );
};

Body.propTypes = {};

export default Body;
