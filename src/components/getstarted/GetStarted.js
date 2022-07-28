import React from 'react'

import styles from './GetStarted.module.css'

import Card from '../card/Card'
import Steps from './steps/Steps'
import Carousel from '../carousel/Carousel'

import Image1 from '../../assets/images/card1.jpg'
import Image2 from '../../assets/images/card2.jpg'
import Image3 from '../../assets/images/card3.jpg'
import Image4 from '../../assets/images/card4.jpg'

const GetStarted = () => {
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>Get started with Slack</h2>
        <div className={styles.Steps}>
            <Steps 
                number={"1"}
                title={'Sign Up'}
                description={'Create a new Slack workspace in just a few moments. It’s free to try for teams of any size.'}
            />
            <Steps 
                number={"2"}
                title={'Invite your coworkers'}
                description={'Slack is better together (no, really, it’s a bit underwhelming by yourself), and it’s easy to invite your team.'}
            />
            <Steps 
               number={"3"}
               title={'Try it out'}
               description={'Run a project, coordinate with your team, or just talk it out. Slack is a blank canvas for teamwork.'}
            />
        </div>

        <div className={styles.Cards} >
            <Card 
                image={Image1}
                description={'Webinar'}
                title={'What is slack?'}
                link={'WATCH NOW'}
            />
            <Card 
                image={Image2}
                description={'Customer Stories'}
                title={'Get inspired by real slack customers'}
                link={'READ STORIES'}
            />
            <Card 
                image={Image3}
                description={'Solutions'}
                title={'Learn how slack can work for your team'}
                link={'EXPLORE SOLUTIONS'}
            />
            <Card 
                image={Image4}
                description={'How-to'}
                title={'Start off on the right foot with Slack 101'}
                link={'LEARN HOW'}
            />
        </div>
        <div className={styles.Carousel}>
            <Carousel />
        </div>
    </div>
  )
}

export default GetStarted