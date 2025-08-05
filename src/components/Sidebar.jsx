import { useEffect } from 'react'

export default function Sidebar({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[300px] bg-white/90 text-black z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <ul className="space-y-4">
            <li><a href="#hero" onClick={onClose}>Home</a></li>
            <li><a href="#about" onClick={onClose}>About</a></li>
            <li><a href="#services" onClick={onClose}>Services</a></li>
            <li><a href="#contact" onClick={onClose}>Contact</a></li>
          </ul>
        </div>
      </aside>
    </>
  )
}