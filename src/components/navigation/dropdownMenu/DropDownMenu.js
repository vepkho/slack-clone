import React from 'react'

import styles from './DropDownMenu.module.css'

import ArrowDropDown from '@mui/material/node/internal/svg-icons/ArrowDropDown';


const DropDownMenu = () => {
  return (
        <div className={styles.Dropdown}>
            <li>Product </li>
            <ArrowDropDown className={styles.Arrow}/>
                <div className={styles.DropdownActive}>
                    <ul>
                        <li>Features</li>
                        <li>Channels</li>
                        <li>Digital HQ</li>
                        <li>Integrations</li>
                        <li>Security</li>
                        <li>Slack Connect</li>
                        <li>Customers</li>
                    </ul>
            </div>
        </div>
  )
}

export default DropDownMenu