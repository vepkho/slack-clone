import React from 'react'

import styles from './BlogVideo.module.css'

const BlogVideo = (props) => {
  return (
    <div className={styles.Container}>
        <div className={styles.Video}>
            <img src={props.image} alt='thumbnail picture'/>
        </div>
        <div className={styles.Description}>
            <p className={styles.Title}>{props.title}</p>
            <p className={styles.Time}>{props.time}</p>
        </div>
    </div>
  )
}

export default BlogVideo