import { useParams, Link } from 'react-router-dom';
import { exhibitionsData } from '../exhibitions';
import DOMPurify from 'dompurify';

const HTMLRenderer = ({ htmlContent }) => {
  // Sanitize the HTML content before rendering to prevent XSS attacks
  const sanitizedContent = DOMPurify.sanitize(htmlContent);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};

export default function ExhibitionDetailPage() {
  const { id } = useParams();
  const exhibition = exhibitionsData.find(e => e.id === id);

  if (!exhibition) {
    return (
      <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl mb-4">Exhibition not found</h2>
        <Link to="/exhibitions" className="px-6 py-2 border rounded-full hover:bg-white hover:text-black transition">모든 전시 목록</Link>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto p-8 pt-24">
        <Link to="/exhibitions" className="text-amber-400 hover:text-amber-300 transition-colors mb-4 inline-block">← 모든 전시 목록</Link>
        <h1 className="text-5xl md:text-7xl font-bold mb-2 font-serif">{exhibition.title}</h1>
        <p className="text-lg text-gray-400 mb-8">{exhibition.date}</p>
        <div className="prose prose-invert prose-lg max-w-none">
          <HTMLRenderer htmlContent={exhibition.content} />
        </div>
      </div>
    </div>
  );
}