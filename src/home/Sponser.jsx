// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import sponsor01 from "../assets/images/sponsor/01.png"
import sponsor02 from "../assets/images/sponsor/02.png"
import sponsor03 from "../assets/images/sponsor/03.png"
import sponsor04 from "../assets/images/sponsor/04.png"
import sponsor05 from "../assets/images/sponsor/05.png"
import sponsor06 from "../assets/images/sponsor/06.png"


// import required modules
import { Autoplay } from 'swiper/modules';
const sponsorList = [
{
// imgUrl: "/src/assets/images/sponsor/01.png",
imgUrl:sponsor01
},
{
// imgUrl: "/src/assets/images/sponsor/02.png",
imgUrl:sponsor02
},
{
// imgUrl: "/src/assets/images/sponsor/03.png",
imgUrl:sponsor03
},
{
// imgUrl: "/src/assets/images/sponsor/04.png",
imgUrl:sponsor04
},
{
// imgUrl: "/src/assets/images/sponsor/05.png",
imgUrl:sponsor05
},
{
// imgUrl: "/src/assets/images/sponsor/06.png",
imgUrl:sponsor06
},
];

const Sponser = ()=>{
    return(
        <div className="sponsor-section section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="sponsor-slider">
                         <Swiper
        slidesPerView={2}
        spaceBetween={20}
        autoplay={
            {
                delay:2000,
                disableOnInteraction:false
            }
        }
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
      {
        sponsorList.map((val, i)=>(
            <SwiperSlide key={i}>
                <div className='sponsor-item'>
                    <div className='sponsor-thumb'>
                        <img src={val.imgUrl} alt="" />
                    </div>
                </div>
            </SwiperSlide>
        ))
      }
      </Swiper>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Sponser