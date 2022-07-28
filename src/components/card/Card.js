import React from 'react'

import styles from './Card.module.css'

import KeyboardArrowRight from '@mui/material/node/internal/svg-icons/KeyboardArrowRight';


const Card = (props) => {
  return (
    <div className={styles.Container}>
        <img src={props.image} alt='Card Image' className={styles.Image}/>
        <p className={styles.Description}>{props.description}</p>
        <p className={styles.Title} >{props.title}</p>
        <a className={styles.Link} href='#'>{props.link} </a>
        <KeyboardArrowRight className={styles.Arrow}/>
    </div>
  )
}

export default Card