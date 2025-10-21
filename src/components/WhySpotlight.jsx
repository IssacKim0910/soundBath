import { Link } from 'react-router-dom';
import taJpg from '../assets/bart.jpg';
import { IoIosPeople, IoIosBulb, IoIosCafe } from 'react-icons/io';

const Feature = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-black">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-gray-400">{children}</p>
    </div>
  </div>
);

export default function WhySpotlight() {
  return (
    <section className="bg-black/90 py-20 sm:py-28 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="md:col-span-2">
            <img src={taJpg} alt="Spotlight Cafe Interior" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
          </div>

          {/* Right: Content */}
          <div className="md:col-span-3">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">Our Stage</h2>
            <p className="text-lg text-gray-400 max-w-2xl mb-10">
              스포트라이트는 단순한 카페를 넘어, 창작자들이 서로 교류하고 영감을 얻는 무대입니다.
            </p>
            
            <div className="space-y-8">
              <Feature icon={<IoIosPeople className="h-6 w-6" />} title="아티스트 커뮤니티">
                음악, 미술, 글 등 다양한 분야의 아티스트들이 모여 서로의 작업을 공유하고 새로운 기회를 만들어갑니다.
              </Feature>
              <Feature icon={<IoIosBulb className="h-6 w-6" />} title="영감을 위한 공간">
                창작 활동에 집중할 수 있는 편안한 환경과 함께, 정기적인 전시와 행사를 통해 새로운 영감을 선사합니다.
              </Feature>
              <Feature icon={<IoIosCafe className="h-6 w-6" />} title="최상의 커피">
                최고의 아티스트에게는 최고의 커피가 필요합니다. 우리는 최상급 원두로 당신의 창작열을 응원합니다.
              </Feature>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  );
}
