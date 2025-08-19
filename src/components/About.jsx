export default function About() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6" >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center" >
        {/* 왼쪽 텍스트 영역 */}
        <div className="text-center md:text-left" >
          <h2 className="text-4xl font-bold mb-4 tracking-tight" >
            About Us
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            우리는 일상 속 속도에서 벗어나, 몸과 마음이 안정되는 경험을 제공합니다.
            사운드배스를 통해 깊은 이완과 회복의 시간을 만들어보세요.
          </p>
        </div>

        {/* 오른쪽 이미지 영역 */}
        <div className="flex justify-center"> {/* Flexbox를 이용해 이미지를 수평 중앙 정렬 */}
          <img
            src="/images/test.jpg"
            alt="Relaxing sound bath session"
            className="rounded-xl shadow-2xl w-full max-w-sm transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}