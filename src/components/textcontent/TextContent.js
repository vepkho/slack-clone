import React from 'react'

import styles from './TextContent.module.css'

const TextContent = (props) => {
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>{props.title}</h2>
        <p className={styles.Description}>{props.description}</p>
    </div>
  )
}

export default TextContent