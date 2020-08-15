import React from "react"
import PropTypes from "prop-types"

import Sunrise from "src/components/images/Sunrise"
import Contacts from "src/components/Contacts"
import Description from "src/components/Description"

import css from "./Body.module.css"

const Body = props => {
  return (
    <div className={css.wrapper}>
      <div className={css.sunrise}>
        <Sunrise width={150} height={128} />
      </div>
      <div>
        <Description />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  )
}

Body.propTypes = {}

export default Body
