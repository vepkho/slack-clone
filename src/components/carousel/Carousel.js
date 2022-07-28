import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";

import { Pagination } from "swiper";

import Card from "../card/Card";

import Image1 from '../../assets/images/card1.jpg'
import Image2 from '../../assets/images/card2.jpg'
import Image3 from '../../assets/images/card3.jpg'
import Image4 from '../../assets/images/card4.jpg'

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Card 
                image={Image1}
                description={'Webinar'}
                title={'What is slack?'}
                link={'WATCH NOW'}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
                image={Image2}
                description={'Customer Stories'}
                title={'Get inspired by real slack customers'}
                link={'READ STORIES'}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
                image={Image3}
                description={'Solutions'}
                title={'Learn how slack can work for your team'}
                link={'EXPLORE SOLUTIONS'}
            />
        </SwiperSlide>
        <SwiperSlide>
            <Card 
                image={Image4}
                description={'How-to'}
                title={'Start off on the right foot with Slack 101'}
                link={'LEARN HOW'}
            />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
