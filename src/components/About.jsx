import taJpg from '../assets/ta.jpg';

export default function About() {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8">
        {/* Left Image Area */}
        <div className="flex justify-center">
          <img
            src={taJpg}
            alt="Our Cafe's Exterior"
            className="rounded-lg shadow-2xl w-full h-auto max-w-md object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Text Area */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            It started with a simple idea: a place where the coffee is as warm as the welcome. We believe in the power of a perfect cup to start a day, spark a conversation, or offer a quiet moment of reflection. Every bean we source has a story, and every cup we pour is a chapter in ours.
          </p>
        </div>
      </div>
    </section>
  )
}
