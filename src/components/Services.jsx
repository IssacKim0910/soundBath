export default function Services() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
      <div>
        <img src="/assets/service.jpg" alt="Sound Bath" className="rounded-xl shadow-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-semibold mb-4">사운드 배스란?</h3>
        <p className="text-gray-300">
          사운드배스는 티베탄 싱잉볼, 고즈넉한 사운드 웨이브를 통해 뇌파와 긴장을 완화하는 힐링 세션입니다.
          누구나 쉽고 깊게 몰입할 수 있습니다.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc4bpEagy4dHOwtDw8OJ488d-M3rpsCu8rMq5zZwykxkBbfBg/viewform?usp=sharing&ouid=110150425719035502089"
          target="_blank"
          className="mt-6 inline-block bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          예약하러 가기
        </a>
      </div>
    </section>
  )
}
