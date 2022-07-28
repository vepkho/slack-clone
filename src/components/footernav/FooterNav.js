import React from 'react'

import styles from './FooterNav.module.css'

const FooterNav = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Navigation}>
            <p className={styles.Title}>WHY SLACK?</p>
            <p className={styles.Link}>Slack vs. Email</p>
            <p className={styles.Link}>Channels</p>
            <p className={styles.Link}>Engagement</p>
            <p className={styles.Link}>Scale</p>
            <p className={styles.Link}>Watch the Demo</p>
        </div>
        <div className={styles.Navigation}>
            <p className={styles.Title}>PRODUCT</p>
            <p className={styles.Link}>Features</p>
            <p className={styles.Link}>Integrations</p>
            <p className={styles.Link}>Enterprise</p>
            <p className={styles.Link}>Solutions</p>
        </div>
        <div className={styles.Navigation}>
            <p className={styles.Title}>PRICING</p>
            <p className={styles.Link}>Plans</p>
            <p className={styles.Link}>Paid vs. Free</p>
        </div>
        <div className={styles.Navigation}>
            <p className={styles.Title}>RESOURCES</p>
            <p className={styles.Link}>Partners</p>
            <p className={styles.Link}>Developers</p>
            <p className={styles.Link}>Community</p>
            <p className={styles.Link}>Apps</p>
            <p className={styles.Link}>Blog</p>
            <p className={styles.Link}>Help Center</p>
            <p className={styles.Link}>Events</p>
        </div>
        <div className={styles.Navigation}>
            <p className={styles.Title}>COMPANY</p>
            <p className={styles.Link}>About Us</p>
            <p className={styles.Link}>Leadership</p>
            <p className={styles.Link}>Investor Relations</p>
            <p className={styles.Link}>News</p>
            <p className={styles.Link}>Media Kit</p>
            <p className={styles.Link}>Careers</p>
        </div>
    </div>
  )
}

export default FooterNav