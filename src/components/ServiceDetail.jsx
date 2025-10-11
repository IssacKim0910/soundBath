import { useParams, Link } from 'react-router-dom';
import { servicesData, soundBathHistoryData } from '../data';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-4">Service not found</h2>
        <Link to="/" className="px-6 py-2 border rounded-full hover:bg-white hover:text-black transition">Go Home</Link>
      </div>
    );
  }

  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(service.videoUrl);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto p-8 pt-24">
        <Link to="/services" className="text-amber-400 hover:text-amber-300 transition-colors mb-8 inline-block">← Back to Services</Link>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">{service.title}</h1>
        
        {videoId ? (
          <div className="relative overflow-hidden pt-[56.25%] mb-8 rounded-lg shadow-2xl">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8" />
        )}

        <div className="space-y-4">
        {Array.isArray(service.description) ? (
          service.description.map((paragraph, index) => (
            <p key={index} className="text-xl text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="text-xl text-gray-300 leading-relaxed">
            {service.description}
          </p>
        )}
        </div>

        {service.features && (
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-4">교육 특징</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-400">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {service.curriculum && (
          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-4">커리큘럼 예시</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-400">
              {service.curriculum.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {slug === 'sound-bath' && (
          <div className="mt-20 pt-10 border-t border-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12 font-serif">지난 사운드배스</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...soundBathHistoryData].sort((a, b) => new Date(b.date) - new Date(a.date)).map(event => (
                <Link to={`/sound-bath/${event.id}`} key={event.id} className="block group">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 transform hover:-translate-y-2 transition-transform duration-300">
                    <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
                    <div className="p-6">
                      <p className="text-sm text-gray-400 mb-1">{event.date}</p>
                      <h3 className="text-xl font-bold text-amber-400">{event.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {service.slug !== 'sound-bath' && (
          <div className="mt-16 text-center">
            <Link to="/contact" className="bg-amber-500 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-transform duration-300 inline-block">
              교육 문의하기
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
