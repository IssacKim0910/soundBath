import { Link } from 'react-router-dom';

const Feature = ({ icon, title, children }) => (
  <div className="text-center">
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-amber-500 text-black">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{children}</p>
  </div>
);

const CommunityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const BulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const CoffeeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a4 4 0 00-5.656 0M14 10l-2 1m0 0l-2-1m2 1v2.5M12 14.5V12m0 0l2-1m-2 1l-2-1m2-5a4 4 0 00-8 0v0a4 4 0 008 0v0z" /></svg>;

export default function WhySpotlight() {
  return (
    <section className="bg-black/90 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif">Our Stage</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-16">
          스포트라이트는 단순한 카페를 넘어, 창작자들이 서로 교류하고 영감을 얻는 무대입니다.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <Feature icon={<CommunityIcon />} title="아티스트 커뮤니티">
            음악, 미술, 글 등 다양한 분야의 아티스트들이 모여 서로의 작업을 공유하고 새로운 기회를 만들어갑니다.
          </Feature>
          <Feature icon={<BulbIcon />} title="영감을 위한 공간">
            창작 활동에 집중할 수 있는 편안한 환경과 함께, 정기적인 전시와 행사를 통해 새로운 영감을 선사합니다.
          </Feature>
          <Feature icon={<CoffeeIcon />} title="최상의 커피">
            최고의 아티스트에게는 최고의 커피가 필요합니다. 우리는 최상급 원두로 당신의 창작열을 응원합니다.
          </Feature>
        </div>
        <div className="mt-16">
          <Link to="/about" className="bg-amber-500 text-black font-bold py-3 px-8 rounded-full hover:bg-amber-400 transition-transform duration-300 inline-block">
            우리의 무대 더보기
          </Link>
        </div>
      </div>
    </section>
  );
}