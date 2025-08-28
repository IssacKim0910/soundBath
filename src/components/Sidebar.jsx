import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logoJpg from '../assets/logo.jpg';

export default function Sidebar({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const overlayClassName = `
    fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300
    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
  `;

  const asideClassName = `
    fixed top-0 left-0 h-full w-[300px] bg-white/90 text-black z-50 
    transform transition-transform duration-300
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <>
      <div className={overlayClassName} onClick={onClose} />
      <aside className={asideClassName}>
        <div className="p-6 flex flex-col items-center">
          <img src={logoJpg} alt="Logo" className="w-24 h-24 rounded-full mb-6" />
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4 text-center">
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
