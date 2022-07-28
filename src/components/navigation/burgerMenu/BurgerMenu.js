import React, {useState} from 'react'

import styles from './BurgerMenu.module.css'

import Button from '@mui/material/Button';

import logo from '../../../assets/images/Slack-Logo.png'

const BurgerMenu = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.TopNav}>
            <img src={logo} alt='Slack Logo' className={styles.Logo}></img>
        </div>
        <ul className={styles.MenuLinks}>
            <li>Product</li>
            <li>Solutions</li>
            <li>Enterprise</li>
            <li>Resources</li>
            <li>Pricing</li>
            <li>Pricing</li>
        </ul>
        <div className={styles.Buttons}>
            <Button variant="outlined" className={styles.Button_Outlined}>Talk To Sales</Button>
            <Button variant="contained" className={styles.Button_Contained}>Sign In</Button>
        </div>
    </div>
  )
}

export default BurgerMenu