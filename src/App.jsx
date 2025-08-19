import {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import SidebarToggle from './components/SidebarToggle'
import Instructor from './components/Instructor';
import taJpg from './assets/ta.jpg';
import logoJpg from './assets/logo.jpg';

const ScrollSnapWrapper = () => (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
        <div className="snap-start h-screen">
            <section
                id="hero"
                className="relative h-screen text-white bg-cover bg-center"
                style={{
                    backgroundImage: `url(${taJpg})`
                }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"/>
                <div className="relative z-20 flex items-center justify-center h-full">
                    <div className="text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">SpotLight <br></br>Coffee</h1>
                    </div>
                </div>
            </section>
        </div>
        <div className="snap-start h-screen">
            <About/>
        </div>
        <div className="snap-start h-screen">
            <Services/>
            <Footer/>
        </div>
    </div>
);


export default function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="font-sans relative">
            <SidebarToggle onClick={() => setSidebarOpen(true)}/>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}/>
            <main>
                <Routes>
                    <Route path="/" element={<ScrollSnapWrapper/>}/>
                    <Route path="/instructor" element={<Instructor/>}/>
                </Routes>
            </main>
        </div>
    )
}
