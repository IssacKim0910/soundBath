import taJpg from '../assets/barup.jpg';

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8">
          {/* Left Image Area */}
          <div className="flex justify-center">
            <img
              src={taJpg}
              alt="Our Cafe's Exterior"
              className="rounded-lg shadow-2xl w-full h-auto max-w-md object-cover"
            />
          </div>

          {/* Right Text Area */}
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight font-serif">
              Our Stage
            </h1>
            <div className="text-gray-300 leading-relaxed text-lg space-y-6">
              <div>
                <h3 class="text-2xl font-semibold text-amber-400 mb-2">최상의 커피, 최고의 영감</h3>
                <p>
                  최고의 창작은 최고의 휴식과 영감에서 비롯됩니다.
                </p>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-amber-400 mb-2">함께 만드는 커뮤니티</h3>
                <p>
                  스포트라이트는 전시와 공연, 다양한 행사를 통해 사람과 사람이 연결되는 다목적 커뮤니티 공간입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

