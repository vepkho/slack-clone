import React from 'react'

import styles from './Contact.module.css'

import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>Welcome to where the future works</h2>
        <div className={styles.Buttons}>
            <Button variant="contained" className={styles.Ordinary}>TRY FOR FREE</Button>
            <Button variant="outlined" className={styles.Temporary}>TALK TO SALES</Button>
          </div>
    </div>
  )
}

export default Contact