import React, { useState } from 'react'
import styles from './NavBar.module.css'

import logo from '../../../assets/images/Slack-Logo.png'
import searchIcon from '../../../assets/icons/search-icon.png'
import CloseIcon from '@mui/material/node/internal/svg-icons/Close';
import DropDownMenu from '../dropdownMenu/DropDownMenu';


import Button from '@mui/material/Button';
import MenuIcon from '../../../assets/icons/bars-solid.svg'
import BurgerMenu from '../burgerMenu/BurgerMenu';


const NavBar = () => {

    const [ responsiveMenu, setResponsiveMenu] = useState(false);

    const toggleResponsive = () => {
        setResponsiveMenu(true);
    }

    const closeMenu = () => {
        setResponsiveMenu(false);
    }

  return (
    <div className={styles.Container}>
        <div className={responsiveMenu ? styles.Open : styles.Closed}>
            <BurgerMenu />
            <CloseIcon className={styles.closeIcon} onClick={closeMenu}/>
        </div>
        <nav>
            <img src={logo} alt='Slack-Logo' className={styles.Logo}></img>
            <ul>
                <DropDownMenu />
                <li>Solutions</li>
                <li>Enterprise</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>
        </nav>
        <div className={styles.Contact}>
            <img src={searchIcon} alt='Search Icon' className={styles.Search}></img>
            <Button variant="outlined" className={styles.Button_Outlined}>Talk To Sales</Button>
            <Button variant="contained" className={styles.Button_Contained}>Sign In</Button>
            <img src={MenuIcon} className={styles.MenuIcon} onClick={toggleResponsive}/>
            {/* <p className={styles.MenuIcon} onClick={toggleResponsive}>X</p> */}
        </div>
    </div>
  )
}

export default NavBar