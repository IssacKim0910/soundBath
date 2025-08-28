import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data';

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

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto p-8 pt-24">
        <Link to="/" state={{ scrollTo: '#services' }} className="text-amber-400 hover:text-amber-300 transition-colors mb-8 inline-block">← Back to Services</Link>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">{service.title}</h1>
        <img src={service.image} alt={service.title} className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8" />
        <p className="text-xl text-gray-300 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}
