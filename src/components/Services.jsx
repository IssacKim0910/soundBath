export default function Services() {
  return (
    <section className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Our Services</h2>
          <p className="text-gray-400 mt-2 text-lg">당신에게 맞는 힐링 세션을 찾아보세요.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service Card 1 */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <img src="/images/test.jpg" alt="Sound Bath" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">사운드 배스란?</h3>
              <p className="text-gray-400 mb-4">
                사운드배스는 티베탄 싱잉볼, 고즈넉한 사운드 웨이브를 통해 뇌파와 긴장을 완화하는 힐링 세션입니다. 누구나 쉽고 깊게 몰입할 수 있습니다.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4bpEagy4dHOwtDw8OJ488d-M3rpsCu8rMq5zZwykxkBbfBg/viewform?usp=sharing&ouid=110150425719035502089"
                target="_blank"
                className="inline-block bg-indigo-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-600 transition-colors duration-300"
              >
                예약하기
              </a>
            </div>
          </div>

          {/* Service Card 2 */}
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

          {/* Service Card 3 */}
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
