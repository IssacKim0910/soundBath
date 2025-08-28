import { Link } from 'react-router-dom';
import { exhibitionsData } from '../exhibitions';

export default function ExhibitionListPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto p-8 pt-24">
        <Link to="/" state={{ scrollTo: '#services' }} className="text-amber-400 hover:text-amber-300 transition-colors mb-8 inline-block">← Back to Services</Link>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Exhibitions</h1>
          <p className="text-lg text-gray-400">A collection of our past and current exhibitions.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitionsData.map(exhibition => (
            <Link to={`/exhibitions/${exhibition.id}`} key={exhibition.id} className="block group">
              <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 transform hover:-translate-y-2 transition-transform duration-300">
                <img src={exhibition.thumbnailImage} alt={exhibition.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <p className="text-sm text-gray-400 mb-1">{exhibition.date}</p>
                  <h2 className="text-2xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors">{exhibition.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
