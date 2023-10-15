import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import line from "../../img/line.png"
import "./Student.css"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Student = () => {
  return (
    <div className="student-says">
      <h3>What Our</h3>
      <h1 className="heading">Students Says</h1>
      <img src={line} alt="" />
      <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="students-container">
            <p><i>
              "Enrolling in the Wasif Bin Asif quran institute was the best decision I made. The interactive classes, comprehensive curriculum, and supportive community have helped me grow spiritually and intellectually."
            </i>
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="students-container">
            <p><i>
              "I highly recommend the Wasif Bin Asif quran institute. Their dedicated teachers provide
              personalized
              guidance, fostering a nurturing environment that enhances both my knowledge and love for
              the
              Quran."
            </i>
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Student
