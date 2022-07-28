import React from 'react'

import styles from './WhySlack.module.css'

import PlayButton from '../playbutton/PlayButton'
import TextContent from '../textcontent/TextContent'
import Button from '@mui/material/Button';

import Thumbnail from '../../assets/images/thumbnail.jpg'

const WhySlack = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.Video}>
            <PlayButton/>
            <img src={Thumbnail} alt='thumbnail' className={styles.Thumbnail}/>
        </div>
        <div className={styles.Description}>
            <TextContent 
                title={'Now is your moment to build a better tomorrow'}
                description={'We’ve seen what the future can be. Now it’s time to decide what it will be.'}
            />
            <Button variant="outlined" className={styles.ButtonOutlined}>WATCH VIDEO</Button>
        </div>
    </div>
  )
}

export default WhySlack