import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

// import required modules
import { Scrollbar, Navigation, Autoplay } from 'swiper/modules';

export default function Services() {
  return (
    <section className="bg-black text-white h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 tracking-tight">Our Services</h2>
      <div className="w-full max-w-5xl px-4">
        <Swiper
          speed={1500}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{
            draggable: true,
          }}
          navigation={true}
          modules={[Autoplay, Scrollbar, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {servicesData.map((service) => {
            const destination = service.link || `/services/${service.slug}`;
            return (
              <SwiperSlide key={service.slug}>
                <Link to={destination}>
                  <div className="relative group rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <img src={service.image} alt={service.title} className="w-full h-96 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                      <h3 className="text-white text-3xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  );
}
