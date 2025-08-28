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
import nightJpg from './assets/night.jpg';

// This component now only contains the sections for the main page.
const MainPage = () => (
    <>
        <div id="main" className="relative h-screen text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center hero-bg"
                style={{ backgroundImage: `url(${nightJpg})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
            <div className="relative z-20 flex flex-col items-center justify-center h-full">
                <div className="text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">SpotLight Coffee</h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">한 잔 한 잔, 소중한 순간을 만듭니다.</p>
                </div>
            </div>
        </div>
        <div id="about">
            <About />
        </div>
        <div id="services">
            <Services />
        </div>
        <div id="contact">
            {/* <Contact /> */}
            <Footer />
        </div>
    </>
);

export default function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const handleScrollTo = (selector) => {
        const targetElement = document.querySelector(selector);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

    useEffect(() => {
        if (location.state?.scrollTo) {
            const targetElement = document.querySelector(location.state.scrollTo);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="font-sans bg-black">
            <Header isScrolled={isScrolled} handleScrollTo={handleScrollTo} />
            <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/services/:slug" element={<ServiceDetail />} />
                    <Route path="/exhibitions" element={<ExhibitionListPage />} />
                    <Route path="/exhibitions/:id" element={<ExhibitionDetailPage />} />
                </Routes>
            </main>
        </div>
    );
}
