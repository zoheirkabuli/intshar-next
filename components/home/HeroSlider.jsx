/** @jsxImportSource @emotion/react */
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

// Import Swiper styles
import 'swiper/css';

const HeroSlider = ({ carousel }) => {
  return (
    <Swiper
      css={(theme) => ({
        width: theme.size.width,
        maxWidth: theme.size.maxWidth,
        alignSelf: 'center',
        margin: '2rem 0 0',
        '& .swiper-slide': {
          width: '90rem',
        },
      })}
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={20}
      modules={[EffectCoverflow]}
      coverflowEffect={{
        rotate: 0,
        stretch: 100,
        depth: 0,
        modifier: 0,
        scale: 1,
        slideShadows: false,
      }}
      breakpoints={{
        768: {
          slidesPerView: 'auto',
          spaceBetween: 0,
          coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 100,
            modifier: 6.2,
            scale: 1.05,
          },
        },
      }}
      loop={true}
      loopedSlides={2}
    >
      {carousel.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            css={{
              alignItems: 'flex-end',
              aspectRatio: '90/55',
              display: 'flex',
              isolation: 'isolate',
              padding: '5.5rem 8rem',
              position: 'relative',
              width: '100%',
              '@media screen and (max-width:768px)': {
                padding: '2.5rem 2rem',
              },
            }}
          >
            <Image
              src={slide.image.url}
              width={900}
              height={550}
              alt={slide.title}
              css={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '2rem',
                position: 'absolute',
                inset: '0',
                zIndex: '-1',
              }}
              priority
            />
            <h2
              css={{
                padding: '1rem 2rem',
                backgroundColor: '#00000085',
                color: 'white',
                fontSize: '4rem',
                borderRadius: '1rem',
                '@media screen and (max-width:768px)': {
                  fontSize: '1.8rem',
                },
              }}
            >
              {slide.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
      {/* {dummy.map((num) => (
        <SwiperSlide key={num}>
          <div
            css={{
              alignItems: 'flex-end',
              aspectRatio: '90/55',
              display: 'flex',
              isolation: 'isolate',
              padding: '5.5rem 8rem',
              position: 'relative',
              width: '100%',
              '@media screen and (max-width:768px)': {
                padding: '2.5rem 2rem',
              },
            }}
          >
            <Image
              src={img}
              width={900}
              height={550}
              alt="?????????? 4G ???? ??????????????"
              css={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '2rem',
                position: 'absolute',
                inset: '0',
                zIndex: '-1',
              }}
            />
            <h2
              css={{
                padding: '1rem 2rem',
                backgroundColor: '#00000085',
                color: 'white',
                fontSize: '4rem',
                borderRadius: '1rem',
                '@media screen and (max-width:768px)': {
                  fontSize: '1.8rem',
                },
              }}
            >
              ?????????? 4G ???? ??????????????
            </h2>
          </div>
        </SwiperSlide>
      ))} */}
    </Swiper>
  );
};

export default HeroSlider;
