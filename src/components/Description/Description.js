import React from "react"
import PropTypes from "prop-types"

import css from "./Description.module.css"

const Description = props => {
  return (
    <p className={css.wrapper}>
      My name is Andrey Mukhin
      <br />
      and I'm a frontend developer.
    </p>
  )
}

Description.propTypes = {}

export default Description
