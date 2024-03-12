import { useEffect, useState } from 'react';
import { projectData } from '../data/data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
export default function Project() {
  const projects = projectData;
  const [index, setIndex] = useState(1);
  const [badge, setBadge] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <div className="flex flex-column justify-center itemx-center w-[65%] ">
      <div className="flex flex-row flex-wrap items-center bg-blue-500 w-full p-4">
          <div className="bg-red-500 ">
            <img width={300} height={300} alt="image-project" src="/images/lathy.png"/>
          </div>
          <div className="bg-green-500 px-2">
            <img width={600} height={300} alt="image-project" src="/images/lathy.png"/>
          </div>
          <div className="bg-blue-500 ">
            <img width={300} height={300} alt="image-project" src="/images/lathy.png"/>
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
