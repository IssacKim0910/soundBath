import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';
import ExhibitionListPage from './components/ExhibitionListPage';
import ExhibitionDetailPage from './components/ExhibitionDetailPage';
import SoundBathDetail from './components/SoundBathDetail';
import SensoryClassDetail from './components/SensoryClassDetail';
import taJpg from './assets/ta.jpg';

import WhySpotlight from './components/WhySpotlight';

// The main page now only contains the hero section and footer.
const MainPage = () => (
    <>
        <div id="main" className="relative h-screen text-white overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
            <div className="relative z-20 flex flex-col items-center justify-center h-full">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">Where Coffee Meets Creativity</h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">음악인과 예술인을 위한 영감의 공간, 스포트라이트입니다.</p>
                </div>
            </div>
        </div>
        <WhySpotlight />
        <Services isHomepage={true} />
        <Footer />
    </>
);

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top on page change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="font-sans">
            <div
                className="fixed inset-0 bg-cover bg-center -z-10 blur-sm"
                style={{ backgroundImage: `url(${taJpg})` }}
            />
            <Header isScrolled={isScrolled} />
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/:slug" element={<ServiceDetail />} />
                    <Route path="/exhibitions" element={<ExhibitionListPage />} />
                    <Route path="/exhibitions/:id" element={<ExhibitionDetailPage />} />
                    <Route path="/sound-bath/:id" element={<SoundBathDetail />} />
                    <Route path="/sensory-class/:id" element={<SensoryClassDetail />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </div>
    );
}