import React from 'react'

import styles from './UnderLine.module.css'

import KeyboardArrowRight from '@mui/material/node/internal/svg-icons/KeyboardArrowRight';

const UnderLine = (props) => {
  return (
    <div className={styles.Container}>
        <a href='#'>{props.text} <KeyboardArrowRight /></a>
    </div>
  )
}

export default UnderLine