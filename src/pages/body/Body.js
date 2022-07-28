import React from 'react'

import styles from './Body.module.css'

import Blog from '../../components/blog/Blog'

const Body = () => {
  return (
    <div className={styles.Container}>
        <Blog />
    </div>
  )
}

export default Body