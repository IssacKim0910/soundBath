export default function About() {
  return (
    // About 섹션 전체를 감싸는 컨테이너
    <section 
      // bg-gray-900: 배경색을 어두운 회색으로
      // text-white: 기본 텍스트 색상을 흰색으로
      // py-20: 위아래 안쪽 여백(padding)을 5rem으로 설정
      // px-6: 좌우 안쪽 여백(padding)을 1.5rem으로 설정
      className="bg-gray-900 text-white py-20 px-6"
    >
      {/* 컨텐츠의 최대 너비를 제한하고 중앙에 정렬하는 역할 */}
      <div 
        // max-w-4xl: 컨텐츠의 최대 너비를 56rem으로 제한
        // mx-auto: 좌우 마진을 자동으로 설정하여 중앙 정렬
        // grid: CSS Grid 레이아웃 사용
        // md:grid-cols-2: 중간 화면(768px) 이상에서 2개의 컬럼으로 나누기
        // gap-12: 그리드 아이템 사이의 간격을 3rem으로 설정
        // items-center: 그리드 아이템들을 수직 중앙 정렬
        className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* 왼쪽 텍스트 영역 */}
        <div 
          // text-center: 기본적으로 텍스트를 중앙 정렬
          // md:text-left: 중간 화면 이상에서는 텍스트를 왼쪽 정렬
          className="text-center md:text-left"
        >
          <h2 
            // text-4xl: 폰트 크기 2.25rem
            // font-bold: 폰트 굵게
            // mb-4: 아래쪽 마진 1rem
            // tracking-tight: 글자 간격(자간)을 좁게 설정
            className="text-4xl font-bold mb-4 tracking-tight"
          >
            About Us
          </h2>
          <p 
            // text-gray-400: 텍스트 색상을 연한 회색으로
            // leading-relaxed: 줄 간격을 넓게 설정 (1.625)
            // text-lg: 폰트 크기 1.125rem
            className="text-gray-400 leading-relaxed text-lg"
          >
            우리는 일상 속 속도에서 벗어나, 몸과 마음이 안정되는 경험을 제공합니다. 
            사운드배스를 통해 깊은 이완과 회복의 시간을 만들어보세요.
          </p>
        </div>
        
        {/* 오른쪽 이미지 영역 */}
        <div className="flex justify-center"> {/* Flexbox를 이용해 이미지를 수평 중앙 정렬 */}
          <img 
            src="/images/test.jpg" 
            alt="Relaxing sound bath session" 
            // rounded-xl: 모서리를 둥글게 (0.75rem)
            // shadow-2xl: 큰 그림자 효과 적용
            // w-full: 너비를 100%로 설정
            // max-w-sm: 최대 너비를 24rem으로 제한
            // transform: CSS transform 활성화
            // hover:scale-105: 마우스를 올렸을 때(hover) 크기를 1.05배로 확대
            // transition-transform: transform 속성에 애니메이션 적용
            // duration-300: 애니메이션 지속 시간 300ms
            className="rounded-xl shadow-2xl w-full max-w-sm transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}