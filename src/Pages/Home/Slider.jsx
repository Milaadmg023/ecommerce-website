import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="h-[85vh]">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[url('https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?w=996&t=st=1703971258~exp=1703971858~hmac=58590eb341d0be958b6486c2376d5ff1512baa3b44fb635a46698783cfe543df')] bg-center bg-no-repeat bg-cover">
          <div className="bg-[#00BFA6] p-8 text-white rounded-[10px]">
            <div className="text-xs uppercase tracking-widest">Summer 2020</div>
            <h2 className="text-5xl font-bold my-3">New Collection</h2>
            <p className="mb-6">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-[#00BFA6]">
              Shop Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://img.freepik.com/free-photo/woman-shopping-grocery-store_1303-17248.jpg?w=996&t=st=1703971632~exp=1703972232~hmac=d2dd96273d1e7d1bf4fe0731f44bf5d41bfec3bc41bd0a20a6a65c9363766e5f')] bg-center bg-no-repeat bg-cover">
          <div className="bg-[#FF6347] p-8 text-white rounded-[10px]">
            <div className="text-xs uppercase tracking-widest">Winter 2023</div>
            <h2 className="text-5xl font-bold my-3">Exclusive Collection</h2>
            <p className="mb-6">
              Experience the elegance of our exclusive winter collection.
            </p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-[#FF6347]">
              Explore Now
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[url('https://img.freepik.com/free-photo/beautiful-woman-with-full-shopping-bags_329181-5069.jpg?w=996&t=st=1703971732~exp=1703972332~hmac=cdadc67a451192a7397af0620e010c71d31f9282c35f257b8be29f322102018d')] bg-center bg-no-repeat bg-cover">
          <div className="bg-violet-500 p-8 text-white rounded-[10px]">
            <div className="text-xs uppercase tracking-widest">Summer 2024</div>
            <h2 className="text-5xl font-bold my-3">New Arrival</h2>
            <p className="mb-6">
              Dive into the vibrancy of our fresh summer arrivals.
            </p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-[#006400]">
              Discover More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}