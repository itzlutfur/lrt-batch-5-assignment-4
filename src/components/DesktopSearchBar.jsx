export default function DesktopSearchBar() {
  return (
    <div className="hidden md:flex flex-1 max-w-md mx-4">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" stroke-width="2.5" />
            <path
              d="m21 21-4.3-4.3"
              stroke-width="2.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-input"
          placeholder="Search books by title, author, or genre..."
          className="w-full pl-10 pr-4 py-2.5 bg-neutral-900/90 border border-neutral-800 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#0077BC] focus:ring-1 focus:ring-[#0077BC] transition-all font-medium"
        />
      </div>
    </div>
  );
}
