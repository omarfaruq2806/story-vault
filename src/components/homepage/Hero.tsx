"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: "Discover Unlimited Stories",
      subtitle: "Explore a vast collection of fiction, non-fiction, and thrilling mysteries.",
      bgImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1920&auto=format&fit=crop",
      primaryBtnText: "Explore Now",
      primaryBtnLink: "/stories",
      secondaryBtnText: "Learn More",
      secondaryBtnLink: "/about"
    },
    {
      id: 2,
      title: "Publish Your Masterpiece",
      subtitle: "Join our community of writers and share your creativity with the world.",
      bgImage: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=1920&auto=format&fit=crop",
      primaryBtnText: "Start Writing",
      primaryBtnLink: "/write",
      secondaryBtnText: "View Guides",
      secondaryBtnLink: "/terms"
    },
    {
      id: 3,
      title: "Join the Reading Revolution",
      subtitle: "Get personalized recommendations and connect with fellow book lovers.",
      bgImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1920&auto=format&fit=crop",
      primaryBtnText: "Start Writing Now",
      primaryBtnLink: "/write",
      secondaryBtnText: "Browse Genres",
      secondaryBtnLink: "/stories"
    }
  ];

  return (
    <section className="w-full h-[80vh] md:h-[90vh] relative bg-[#061e29]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        effect={'fade'}
        loop={true} 
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true, 
          bulletClass: 'swiper-pagination-bullet !bg-[#bae6fd] !opacity-50',
          bulletActiveClass: '!bg-[#22d3ee] !opacity-100 !w-6 !rounded-lg transition-all',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-[#061e29]/85" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-[#bae6fd]/90 mb-10 max-w-3xl leading-relaxed">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={slide.primaryBtnLink}
                  className="px-8 py-4 bg-[#06b6d4] hover:bg-[#22d3ee] text-[#083344] rounded-xl font-bold text-lg transition-all shadow-lg"
                >
                  {slide.primaryBtnText}
                </Link>
                <Link 
                  href={slide.secondaryBtnLink}
                  className="px-8 py-4 bg-[#083344]/50 border border-[#06b6d4]/30 text-[#bae6fd] hover:bg-[#06b6d4]/10 rounded-xl font-semibold text-lg transition-all"
                >
                  {slide.secondaryBtnText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev !text-[#22d3ee] after:!text-3xl !hidden md:!flex"></div>
        <div className="swiper-button-next !text-[#22d3ee] after:!text-3xl !hidden md:!flex"></div>
      </Swiper>
    </section>
  );
};

export default Hero;