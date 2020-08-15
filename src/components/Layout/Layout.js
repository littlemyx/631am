import React from "react"
import PropTypes from "prop-types"

import css from "./Layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}></div>
      <div className={css.body}>{children}</div>
      <div className={css.footer}></div>
    </div>
  )
}

Layout.propTypes = {}

export default Layout
