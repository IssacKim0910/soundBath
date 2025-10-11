export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto py-24 sm:py-32 px-4 text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Contact Us</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          기업 교육, 원두 납품, 또는 파트너십에 대해 궁금한 점이 있으신가요? 저희 전문가 팀이 도와드리겠습니다.
        </p>

        <div className="mt-20 grid sm:grid-cols-2 gap-8 text-left">
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-amber-400">Email Us</h3>
            <p className="text-gray-400 mb-4">프로젝트 및 파트너십 문의</p>
            <a href="mailto:contact@spotlightcoffee.com" className="text-lg text-white hover:text-amber-500 transition-colors break-all">
              contact@spotlightcoffee.com
            </a>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2 text-amber-400">Call Us</h3>
            <p className="text-gray-400 mb-4">교육 및 컨설팅 유선 상담</p>
            <a href="tel:010-1234-5678" className="text-lg text-white hover:text-amber-500 transition-colors">
              010-1234-5678
            </a>
          </div>

        </div>

        <div className="mt-20 pt-10 border-t border-gray-800 text-gray-500">
            <h3 className="text-xl font-semibold mb-2 text-amber-400">Location & Hours</h3>
            <p>전라남도 담양군 대전면 병풍로 189</p>
            <p>상담 가능 시간: 평일 10:00 AM - 6:00 PM</p>
        </div>

      </div>
    </div>
  );
}
