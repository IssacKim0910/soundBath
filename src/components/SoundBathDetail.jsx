import { useParams, Link } from 'react-router-dom';
import { soundBathHistoryData } from '../data';

export default function SoundBathDetail() {
  const { id } = useParams();
  const event = soundBathHistoryData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-4">Event not found</h2>
        <Link to="/services/sound-bath" className="px-6 py-2 border rounded-full hover:bg-white hover:text-black transition">← Back to Sound Bath</Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto p-8 pt-24">
        <Link to="/services/sound-bath" className="text-amber-400 hover:text-amber-300 transition-colors mb-8 inline-block">← Back to Sound Bath</Link>
        <p className="text-lg text-gray-400 mb-2">{event.date}</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">{event.title}</h1>
        <img src={event.image} alt={event.title} className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8" />
        <p className="text-xl text-gray-300 leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
}
