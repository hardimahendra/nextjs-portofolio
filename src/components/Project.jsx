import { useEffect, useState } from 'react';
import { projectData } from '../data/data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
export default function Project() {
  const projects = projectData;
  const [index, setIndex] = useState(1);
  const [badge, setBadge] = useState(0);

  return (
    <div className="flex flex-column justify-center itemx-center w-[60%] h-full bg-red-500">
      <div className="flex justify-center items-center bg-blue-500">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-[500px] h-[300px]"
        >
          {projects.map((item) => (
            <SwiperSlide  key={item.id}>
              <img  onClick={() => setIndex(item.id)} alt="lathy" src={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="">
        {projects.map((item) => (
          <div className="" hidden={index != item.id} key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="">
              <a type="button" href={item.href} target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
