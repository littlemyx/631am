import React from "react"
import PropTypes from "prop-types"

import contactsList from "./contacts-list.js"
import css from "./Contacts.module.css"

const Contacts = props => {
  return (
    <div className={css.wrapper}>
      <p>Contacts:</p>
      <ul>
        {contactsList.map(
          item =>
            !item.hidden && (
              <li className={css.contact} key={item.link}>
                <a className={css.link} href={item.link} target="_blank">
                  <img width="22px" alt={item.name} src={item.icon} />
                  <span className={css.name}>{item.name}</span>
                </a>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

Contacts.propTypes = {}

export default Contacts
