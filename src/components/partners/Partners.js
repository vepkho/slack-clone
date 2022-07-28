import React from 'react'

import styles from './Partners.module.css'

import Fox from '../../assets/images/fox.png'
import LonelyPlanet from '../../assets/images/lonelyplanet.png'
import Intuit from '../../assets/images/intuit.png'
import Carvana from '../../assets/images/carvana.png'
import Kiva from '../../assets/images/kiva.png'
import Target from '../../assets/images/target-logo.png'
import DevaCurl from '../../assets/images/devacurl.png'


const Partners = () => {
  return (
    <div className={styles.Container}>
        <div className={styles.ContainerItem}>
            <a href='https://www.fox.com.tr/' target='_blank'>
                <img src={Fox} alt='partner company logo'/>
            </a>
        </div>
        <div className={styles.ContainerItem}>
            <a href='https://www.lonelyplanet.com/' target='_blank'>
                <img src={LonelyPlanet} alt='partner company logo'/>
            </a>
        </div>
        <div className={styles.ContainerItem}>
            <a href='https://www.intuit.com/' target='_blank'>
                <img src={Intuit} alt='partner company logo'/>
            </a>
        </div>
        <div className={styles.ContainerItem}>
            <a href='https://www.carvana.com/' target='_blank'>
                <img src={Carvana} alt='partner company logo'/>
            </a>
        </div>
        <div className={styles.ContainerItem}>
            <a href='https://www.kiva.org/' target='_blank'>
                <img src={Kiva} alt='partner company logo'/>
            </a>
        </div>
        <div className={styles.ContainerItem}>
            <a href='https://www.target.com/' target='_blank'>
                <img src={Target} alt='partner company logo'/>
            </a>
        </div>
        <div className={styles.ContainerItem}>
            <a href='https://www.devacurl.com/us' target='_blank'>
                <img src={DevaCurl} alt='partner company logo'/>
            </a>
        </div>
    </div>
  )
}

export default Partners