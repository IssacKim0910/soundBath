export default function Services() {
  return (
    // Services 섹션 전체 컨테이너
    <section 
      // bg-gray-800: 배경색을 어두운 회색으로 설정
      // text-white: 기본 텍스트 색상을 흰색으로
      // py-20: 위아래 안쪽 여백 5rem
      // px-6: 좌우 안쪽 여백 1.5rem
      className="bg-gray-800 text-white py-20 px-6"
    >
      {/* 컨텐츠 최대 너비 제한 및 중앙 정렬 */}
      <div className="max-w-6xl mx-auto">
        {/* 섹션 제목 영역 */}
        <div 
          // text-center: 텍스트 중앙 정렬
          // mb-12: 아래쪽 마진 3rem
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="text-gray-400 mt-2 text-lg">당신에게 맞는 힐링 세션을 찾아보세요.</p>
        </div>
        
        {/* 서비스 카드들을 담는 그리드 컨테이너 */}
        <div 
          // grid: CSS Grid 레이아웃 사용
          // md:grid-cols-2: 중간 화면(768px) 이상에서 2컬럼
          // lg:grid-cols-3: 큰 화면(1024px) 이상에서 3컬럼
          // gap-8: 그리드 아이템 간의 간격 2rem
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          
          {/* 서비스 카드 1 */}
          <div 
            // bg-gray-900: 배경색을 더 어두운 회색으로
            // rounded-xl: 모서리 둥글게 (0.75rem)
            // shadow-lg: 큰 그림자 효과
            // overflow-hidden: 자식 요소가 부모 요소를 벗어날 경우 숨김 처리 (이미지 모서리 둥글게 적용을 위해)
            // transform hover:-translate-y-2: 마우스 올렸을 때 Y축으로 살짝 위로 이동
            // transition-transform duration-300: 부드러운 애니메이션 효과
            className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
          >
            <img 
              src="/images/test.jpg" 
              alt="Sound Bath" 
              // w-full: 너비 100%
              // h-48: 높이 12rem
              // object-cover: 이미지가 비율을 유지한 채로 주어진 영역을 꽉 채우도록 함
              className="w-full h-48 object-cover"/>
            <div className="p-6"> {/* 카드 내용에 안쪽 여백 1.5rem */}
              <h3 className="text-2xl font-semibold mb-3">사운드 배스란?</h3>
              <p className="text-gray-400 mb-4">
                사운드배스는 티베탄 싱잉볼, 고즈넉한 사운드 웨이브를 통해 뇌파와 긴장을 완화하는 힐링 세션입니다. 누구나 쉽고 깊게 몰입할 수 있습니다.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4bpEagy4dHOwtDw8OJ488d-M3rpsCu8rMq5zZwykxkBbfBg/viewform?usp=sharing&ouid=110150425719035502089"
                target="_blank"
                // inline-block: a 태그에 너비/높이/마진 등을 적용하기 위해
                // bg-indigo-500: 배경색을 남색 계열로
                // text-white: 글자색 흰색
                // px-6 py-2: 좌우/상하 안쪽 여백
                // rounded-full: 모서리를 완전히 둥글게 만들어 알약 모양으로
                // font-semibold: 폰트 굵기를 semi-bold로
                // hover:bg-indigo-600: 마우스 올렸을 때 배경색을 더 진하게
                // transition-colors duration-300: 배경색 변경 시 부드러운 애니메이션 효과
                className="inline-block bg-indigo-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300"
              >
                예약하기
              </a>
            </div>
          </div>

          {/* 서비스 카드 2 (카드 1과 유사한 구조) */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src="/images/test.jpg" alt="Private Session" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">프라이빗 세션</h3>
              <p className="text-gray-400 mb-4">
                개인 맞춤형으로 진행되는 프라이빗 세션입니다. 더 깊은 이완과 치유를 경험하고 싶은 분들께 추천합니다.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4bpEagy4dHOwtDw8OJ488d-M3rpsCu8rMq5zZwykxkBbfBg/viewform?usp=sharing&ouid=110150425719035502089"
                target="_blank"
                className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 transition-colors duration-300"
              >
                문의하기
              </a>
            </div>
          </div>

          {/* 서비스 카드 3 (카드 1과 유사한 구조) */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src="/images/test.jpg" alt="Group Workshop" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">그룹 워크샵</h3>
              <p className="text-gray-400 mb-4">
                친구, 동료와 함께하는 그룹 워크샵입니다. 특별한 날, 의미있는 힐링의 시간을 가져보세요.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4bpEagy4dHOwtDw8OJ488d-M3rpsCu8rMq5zZwykxkBbfBg/viewform?usp=sharing&ouid=110150425719035502089"
                target="_blank"
                className="inline-block bg-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-600 transition-colors duration-300"
              >
                자세히 보기
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}