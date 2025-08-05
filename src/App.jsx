import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import SidebarToggle from './components/SidebarToggle'

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="font-sans relative">
      <SidebarToggle onClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="overflow-x-hidden">
        <section
          id="hero"
          className="relative h-screen text-white bg-cover bg-center"
          style={{ backgroundImage: "url('/images/test.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
          <div className="relative z-20 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Healing, Sound</h1>
              <p className="text-2xl md:text-3xl lg:text-4xl"> - - </p>
            </div>
          </div>
        </section>
        <About />
        <Services />
        <Footer />
      </main>
    </div>
  )
}