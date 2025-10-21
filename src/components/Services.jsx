import { Link } from 'react-router-dom';
import { servicesData } from '../data';

export default function Services({ isHomepage = false }) {
  const servicesToShow = isHomepage ? servicesData.slice(0, 4) : servicesData;

  const content = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      {isHomepage && (
        <div className="mt-16">
          <Link to="/services" className="bg-amber-500 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-transform duration-300 inline-block">
            전체 서비스
          </Link>
        </div>
      )}
    </>
  );

  if (isHomepage) {
    return (
      <section className="bg-black/90 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">스포트라이트는 개인과 기업 모두를 위한 최상의 커피 경험을 제공합니다. 전문적인 교육 프로그램부터 각종 이벤트, 예술 전시까지 다채로운 서비스를 만나보세요.</p>
          {content}
        </div>
      </section>
    )
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Our Services</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-20">스포트라이트는 개인과 기업 모두를 위한 최상의 커피 경험을 제공합니다. 전문적인 교육 프로그램부터 각종 이벤트, 예술 전시까지 다채로운 서비스를 만나보세요.</p>
          {content}
        </div>
      </section>
    </div>
  );
}


