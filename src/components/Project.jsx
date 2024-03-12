import { useEffect, useState } from 'react';
import { projectData } from '../data/data.json';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Project() {
  const projects = projectData;
  const [index, setIndex] = useState(1);
  const [badge, setBadge] = useState(0);
  return (
    <div className="flex flex-column justify-center itemx-center ">
      <div className="flex flex-row flex-wrap gap-4 w-full m-3">
        <div>
          <img className=" cursor-pointer" width={850} height={300} alt="lathy" src="/images/lathy.png" />
        </div>
        <div className="h-[400px] bg-red-500 ">
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id} >
                <img className="py-1" width={350} height={300} alt="sistem-magang" src={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
