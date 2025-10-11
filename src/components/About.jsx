import taJpg from '../assets/ta.jpg';

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
              Our Stage, Your Spotlight
            </h1>
            <div className="text-gray-300 leading-relaxed text-lg space-y-6">
              <div>
                <h3 class="text-2xl font-semibold text-amber-400 mb-2">최상의 커피, 최고의 영감</h3>
                <p>
                  최고의 창작은 최고의 휴식과 영감에서 비롯됩니다. 스포트라이트의 전문 바리스타 팀은 최상급 스페셜티 원두를 사용하여, 당신의 창작 과정에 활력을 불어넣을 완벽한 커피를 제공합니다.
                </p>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-amber-400 mb-2">함께 만드는 커뮤니티</h3>
                <p>
                  우리는 음악, 미술, 문학 등 다양한 분야의 아티스트들이 서로 교류하며 함께 성장하는 커뮤니티를 지향합니다. 정기적인 전시와 행사를 통해 새로운 기회를 만들고, 당신의 예술이 더 많은 사람들에게 닿을 수 있도록 돕습니다. 스포트라이트는 언제나 모든 창작자들을 위해 열려있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

