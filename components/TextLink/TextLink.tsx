import NextLink from "next/link";

import css from "./TextLink.module.css";

interface Props {
  href: string;
  text: string;
}

const TextLink = ({ href, text }: Props) => (
  <NextLink href={href} passHref>
    <a className={css.link}>{text}</a>
  </NextLink>
);

export default TextLink;
