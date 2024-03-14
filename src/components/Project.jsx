import { useEffect, useState } from 'react';
import { projectData } from '../data/data.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
export default function Project() {
  const projects = projectData;
  const [index, setIndex] = useState(1);
  const [badge, setBadge] = useState(0);
  return (
    <div className=" flex flex-col p-4 gap-4">
      <div className="flex flex-row flex-wrap gap-4 w-full ">
        <div className="">
          <img className="cursor-pointer" width={850} height={300} alt="lathy" src="/images/lathy.png" onClick={() => setIndex(1)} />
        </div>
        <div className="h-[200px] items-center pl-10 pt-20">
          <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <img className="py-1" width={375} height={300} alt="sistem-magang" src={item.image} onClick={() => setIndex(item.id)} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col bg-yellow-500 z-10 w-1/2">
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
      </div>
    </div>
  );
}
