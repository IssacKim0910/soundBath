export default function SidebarToggle({ onClick }) {
  return (
    <div
      className="fixed top-0 left-0 z-40 w-16 h-full cursor-pointer"
      onClick={onClick}
      aria-label="Toggle Menu"
    >
      <div className="absolute top-4 left-4 text-white p-2 bg-black bg-opacity-60 rounded-md pointer-events-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
  )
}