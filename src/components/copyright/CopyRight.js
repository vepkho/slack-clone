import React from 'react'

import styles from './CopyRight.module.css'

import Download from '../../assets/icons/download.png'

import twitter from '../../assets/icons/twitter.png'
import facebook from '../../assets/icons/facebook.png'
import youtube from '../../assets/icons/youtube.png'
import linkedin from '../../assets/icons/linkedin.png'


const CopyRight = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Contact}>
            <div className={styles.Links}>
                <p className={styles.Link}>Status</p>
                <p className={styles.Link}>Privacy</p>
                <p className={styles.Link}>Terms</p>
                <p className={styles.Link}>Cookie Preference</p>
                <p className={styles.Link}>Contact Us</p>
            </div>
            <div className={styles.Social}>
                <p className={styles.Download}>
                    <img src={Download} alt='download' />
                    Download Slack</p>
                <div className={styles.SocialIcons}>
                    <img src={twitter} alt='twitter' />
                    <img src={facebook} alt='facebook' />
                    <img src={youtube} alt='youtube' />
                    <img src={linkedin} alt='linkedin' />
                </div>
            </div>
        </div>
        <p className={styles.Author}>©2022 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
    </div>
  )
}

export default CopyRight