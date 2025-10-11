import { Link } from 'react-router-dom';
import { exhibitionsData } from '../exhibitions';

export default function ExhibitionListPage() {

  const parseDate = (dateStr) => {
    if (!dateStr) return new Date(0);
    let startDateStr = dateStr.split('~')[0].trim();
    startDateStr = startDateStr.replace('년', '-').replace('월', '-').replace('일', '').replace(/\s/g, '');
    return new Date(startDateStr);
  };

  const sortedExhibitions = [...exhibitionsData].sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto p-8 pt-24">
        <Link to="/" state={{ scrollTo: '#services' }} className="text-amber-400 hover:text-amber-300 transition-colors mb-8 inline-block">← Back to Services</Link>
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">전시 목록</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">스포트라이트는 지역 예술가와 함께 성장하며, 커피와 예술이 만나는 복합 문화 공간을 지향합니다.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedExhibitions.map(exhibition => (
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
