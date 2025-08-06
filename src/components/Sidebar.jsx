import { useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // 오버레이의 기본 스타일과 동적 스타일을 변수로 관리
  const overlayClassName = `
    fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `;

  // 사이드바의 기본 스타일과 동적 스타일을 변수로 관리
  const asideClassName = `
    fixed top-0 left-0 h-full w-[300px] bg-white/90 text-black z-50 
    transform transition-transform duration-300
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <>
      {/* 
        오버레이 (뒷 배경)
        - fixed: 화면에 고정
        - inset-0: 전체 화면 채우기
        - bg-black bg-opacity-50: 반투명한 검은색 배경
        - z-40: 다른 요소들보다 위, 하지만 사이드바(z-50)보다는 아래에 위치
        - transition-opacity, duration-300: 투명도 변경 시 0.3초 애니메이션
        - isOpen ? ... : ... : isOpen 상태에 따라 투명도(opacity)와 클릭 가능 여부(pointer-events)를 제어
      */}
      <div className={overlayClassName} onClick={onClose} />

      {/* 
        사이드바
        - fixed, top-0, left-0: 화면 좌측 상단에 고정
        - h-full: 전체 높이
        - w-[300px]: 너비 300px
        - bg-white/90: 반투명한 흰색 배경
        - z-50: 최상단에 위치
        - transform, transition-transform, duration-300: 위치 변경(transform) 시 0.3초 애니메이션
        - isOpen ? ... : ...: isOpen 상태에 따라 화면 안(translate-x-0)과 밖(-translate-x-full)으로 이동
      */}
      <aside className={asideClassName}>
        {/* p-6: 안쪽 여백 1.5rem */}
        <div className="p-6">
          {/* text-xl: 폰트 크기, font-bold: 굵게, mb-6: 아래쪽 마진 */}
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          {/* space-y-4: 자식 요소(li)들의 수직 간격을 1rem으로 설정 */}
          <ul className="space-y-4">
            <li><Link to="/" onClick={onClose}>Home</Link></li>
            <li><a href="#about" onClick={onClose}>About</a></li>
            <li><a href="#services" onClick={onClose}>Services</a></li>
            <li><Link to="/instructor" onClick={onClose}>Instructor</Link></li>
            <li><a href="#contact" onClick={onClose}>Contact</a></li>
          </ul>
        </div>
      </aside>
    </>
  )
}