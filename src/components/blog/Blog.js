import React from 'react'

import styles from './Blog.module.css'

import TextContent from '../textcontent/TextContent'
import UnderLine from '../underline/UnderLine'
import BlogVideo from './blogvideo/BlogVideo'

import Video1 from '../../assets/images/img-hp-section-01.mp4'
import Video2 from '../../assets/images/img-hp-section-02.mp4'
import Video3 from '../../assets/images/img-hp-section-03.mp4'

import Image1 from '../../assets/images/blog-pic1.jpg'
import Image2 from '../../assets/images/blog-pic2.jpg'
import Image3 from '../../assets/images/blog-pic3.jpg'
import Image4 from '../../assets/images/blog-pic4.jpg'
import Image5 from '../../assets/images/blog-pic5.jpg'

const Blog = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Content}>
        <div className={styles.Post}>
          <TextContent 
              title={'Move faster by organizing your work life'}
              description={'The key to productivity in Slack is organized spaces called channels—a different one for everything you’re working on. With all the people, messages and files related to a topic in one place, you can move a whole lot faster.'}
          />
          <UnderLine 
              text={'Learn more about channels'}
          />

          <div className={styles.Video}>
              <BlogVideo 
              title={'What is a channel?'}
              time={'0:15'}
              image={Image1}
              />
              <BlogVideo 
              title={'How to create a channel'}
              time={'0:15'}
              image={Image2}
              />
          </div>
        </div>
        <video controls autoPlay loop muted>
          <source src={Video1} type="video/mp4"></source>
        </video>
      </div>

      <div className={styles.Content}>
        <video controls autoPlay loop muted>
          <source src={Video2} type="video/mp4"></source>
        </video>
        <div className={styles.Post}>
          <TextContent 
              title={'Focus your time, on your own terms'}
              description={'Give yourself the flexibility to work when, where and how you work best. Take control of notifications, collaborate live or on your own time, and find answers in conversations from across your company.'}
          />
          <UnderLine 
              text={'Support a more flexible work schedule in Slack'}
          />

          <div className={styles.Video}>
              <BlogVideo 
              title={'How to pause notifications'}
              time={'0:15'}
              image={Image3}
              />
          </div>
        </div>
      </div>

      <div className={styles.Content}>
        <div className={styles.Post}>
          <TextContent 
              title={'Simplify teamwork for everyone'}
              description={'Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.'}
          />
          <UnderLine 
              text={'Learn how to work with external partners in Slack'}
          />

          <div className={styles.Video}>
              <BlogVideo 
              title={'Work with external partners using Slack Connect'}
              time={'0:15'}
              image={Image4}
              />
              <BlogVideo 
              title={'How to brainstorm in a channel'}
              time={'0:15'}
              image={Image5}
              />
          </div>
        </div>
        <video controls autoPlay loop muted>
          <source src={Video3} type="video/mp4"></source>
        </video>
      </div>
    </div>
  )
}

export default Blog