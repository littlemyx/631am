import React, { ReactNode } from "react";

import css from "./Item.module.css";

type Props = {
  title: string;
  children: ReactNode;
};

const Item = ({ title, children }: Props) => {
  return (
    <div>
      <p className={css.title}>{title}</p>
      {children}
    </div>
  );
};

export default Item;
