import React from 'react'

import styles from './Steps.module.css'

const Steps = (props) => {
  return (
    <div className={styles.Container}>
        <p className={styles.Number}>{props.number}</p>
        <p className={styles.Title}>{props.title}</p>
        <p className={styles.Description}>{props.description}</p>
    </div>
  )
}

export default Steps