import React from 'react'

import styles from './Header.module.css'

import HeroSection from '../../components/heroSection/HeroSection'
import NavBar from '../../components/navigation/mainNavigation/NavBar'
import Partners from '../../components/partners/Partners'
import WhySlack from '../../components/whyslack/WhySlack'

const Header = () => {
  return (
    <div className={styles.Container}>
        <NavBar />
        <HeroSection />
        <Partners />
        <WhySlack />
    </div>
  )
}

export default Header