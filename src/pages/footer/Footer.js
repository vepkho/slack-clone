import React from 'react'

import styles from './Footer.module.css'

import Logo from '../../assets/images/slack-logo-sm.png'
import CopyRight from '../../components/copyright/CopyRight'

import FooterNav from '../../components/footernav/FooterNav'

const Footer = () => {
  return (
    <div className={styles.Container}>
      <nav>
        <img src={Logo} alt='Logo' className={Logo}/>
        <FooterNav/>
      </nav>
      <CopyRight/>
    </div>
  )
}

export default Footer