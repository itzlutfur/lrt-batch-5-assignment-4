export default function MobileSearchBar() {
  return (
    <div className="md:hidden pb-3 pt-1">
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
          id="mobile-search-input"
          placeholder="Search 50 books by title, author, genre..."
          className="w-full pl-10 pr-9 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-base text-white placeholder-neutral-500 focus:outline-none focus:border-[#0077BC]"
        />
        <button
          id="btn-clear-mobile-search"
          className="hidden absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-white"
          type="button"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
