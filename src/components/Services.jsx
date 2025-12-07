import { Link } from 'react-router-dom';
import { servicesData } from '../data';
import { useState } from 'react';

export default function Services({ isHomepage = false }) {
  const servicesToShow = isHomepage ? servicesData.slice(0, 4) : servicesData;

  const images = [
    { src: '/images/slcf.png', alt: 'Coffee Class' },
    { src: '/images/slbath.png', alt: 'Sound Bath' },
    { src: '/images/slband.png', alt: 'Spotlight Band' },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const imageGallery = (
    <div className="mt-16 pt-10 border-t border-gray-800">
      <h3 className="text-2xl font-semibold mb-8 text-amber-400">스포트라이트 제안서</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg cursor-pointer" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
          </div>
        ))}
      </div>
    </div>
  );

  const modal = selectedImage && (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" 
      onClick={closeModal}
    >
      <div className="relative max-w-3xl max-h-full mx-4" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-[90vh] object-contain rounded-lg" />
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
        >
          &times;
        </button>
      </div>
    </div>
  );

  const serviceCards = (
    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {servicesToShow.map((service) => {
        const destination = service.link || `/services/${service.slug}`;
        return (
          <div key={service.slug}>
            <Link to={destination}>
              <div className="relative group rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
                <div className="flex-grow h-96">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300">
                  <h3 className="text-white text-3xl font-bold">{service.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  );

  if (isHomepage) {
    return (
      <section className="bg-black/90 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">사운드배스, 센서리클래스, 공연, 전시등 스포트라이트만의 특별한 서비스를 경험해보세요.</p>
          {imageGallery}
          {serviceCards}
          {isHomepage && (
            <div className="mt-16">
              <Link to="/services" className="bg-amber-500 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-transform duration-300 inline-block">
                전체 서비스
              </Link>
            </div>
          )}
          {modal}
        </div>
      </section>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Our Services</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-20">사운드배스, 센서리클래스, 공연, 전시등 스포트라이트만의 특별한 서비스를 경험해보세요.</p>
          {imageGallery}
          {serviceCards}
          {modal}
        </div>
      </section>
    </div>
  );
}


