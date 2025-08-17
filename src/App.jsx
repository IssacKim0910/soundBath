import {useState} from 'react'
import {Routes, Route} from 'react-router-dom';
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import SidebarToggle from './components/SidebarToggle'
import Instructor from './components/Instructor';
import Card from "./components/Card";
import Button from "./components/Button";
import OnChange from "./components/OnChange";
import StateCom from './components/StateCom';
import taJpg from './assets/ta.jpg';

// App 컴포넌트: 애플리케이션의 최상위 컴포넌트
export default function App() {
    // 사이드바의 열림/닫힘 상태를 관리하는 state
    const [isSidebarOpen, setSidebarOpen] = useState(false)

    return (
        // 전체 레이아웃을 감싸는 div
        // font-sans: 기본 폰트를 sans-serif 계열로 설정
        // relative: 자식 요소의 position: absolute 위치 기준을 설정하기 위해 필요
        <div className="font-sans relative">
            {/* 사이드바를 여는 토글 버튼 */}
            <SidebarToggle onClick={() => setSidebarOpen(true)}/>

            {/* 사이드바 컴포넌트. isOpen과 onClose 함수를 props로 전달 */}
            <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)}/>

            {/* 메인 컨텐츠 영역 */}
            <main className="overflow-x-hidden">
                <Routes>
                    <Route path="/" element={
                        <>
                            <section
                                id="hero"
                                className="relative h-screen text-white bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${taJpg})`
                            }}>
                                {/* 배경 이미지 위에 겹치는 어두운 오버레이 */}
                                {/* // absolute: 부모(section)를 기준으로 위치를 잡음
                  // inset-0: top, right, bottom, left를 모두 0으로 설정하여 부모를 꽉 채움
                  // bg-black bg-opacity-50: 검은색 배경에 50% 투명도 적용
                  // z-10: 컨텐츠(z-20)보다 아래에 위치하도록 z-index 설정 */}
                                <div className="absolute inset-0 bg-black bg-opacity-50 z-10"/>

                                {/* // relative: 오버레이(z-10) 위에 표시되도록 z-index 설정
                  // z-20: 오버레이보다 위에 위치
                  // flex, items-center, justify-center: Flexbox를 이용해 내용을 수직/수평 중앙 정렬
                  // h-full: 높이를 부모(section)와 같게 설정 */}
                                <div className="relative z-20 flex items-center justify-center h-full">
                                    <div className="text-center px-4">
                                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Heal, Sound</h1>
                                        <p className="text-2xl md:text-3xl lg:text-4xl"> -company name - </p>
                                    </div>
                                </div>
                            </section>
                            <About/>
                            <Services/>
                        </>
                    }/>

                    {/* "/instructor" 경로에 대한 라우트 */}
                    <Route path="/instructor" element={<Instructor/>}/>

                </Routes>

                <Footer/>
            </main>
        </div>
    )
}