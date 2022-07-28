import React from 'react'

import styles from './HeroSection.module.css'

import Button from '@mui/material/Button';

import Logo from '../../assets/images/google-logo.png'
import HeroImg from '../../assets/images/img-campaign-hero.jpg'


const HeroSection = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Info}>
          <h1>Slack is your digital HQ</h1>
          <p className={styles.Description}>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
          <div className={styles.Buttons}>
            <Button variant="contained" className={styles.Ordinary}>TRY FOR FREE</Button>
            <Button variant="contained" className={styles.Temporary}>
              <img src={Logo} className={styles.Logo}/>
              SIGN UP WITH GOOGLE
              </Button>
          </div>
        </div>
        <div className={styles.Banner}>
          <img src={HeroImg} className={styles.HeroImg} alt='Interface Screenshot'></img>
        </div>
    </div>
  )
}

export default HeroSection