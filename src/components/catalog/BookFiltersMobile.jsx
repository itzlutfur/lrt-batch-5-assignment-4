export default function BookFiltersMobile() {
  return (
    <div className="lg:hidden mb-6">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-mono-code font-bold text-neutral-400 uppercase tracking-wider">
          Filter by Genre
        </span>
        <button
          id="btn-toggle-mobile-filters"
          type="button"
          className="text-xs font-mono-code font-bold text-[#0077BC] hover:text-white flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 cursor-pointer transition-colors"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <polygon
              points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
              stroke-width="2.5"
            />
          </svg>
          <span id="mobile-filter-btn-text">Filters & Rating</span>
        </button>
      </div>

      {/* <!-- Horizontal Scrollable Genre Pills --> */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          data-genre="all"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-[#0077BC] text-white border-[#0077BC] min-h-[40px]"
        >
          All (50)
        </button>
        <button
          data-genre="Tech"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 min-h-[40px]"
        >
          Tech
        </button>
        <button
          data-genre="Productivity"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 min-h-[40px]"
        >
          Productivity
        </button>
        <button
          data-genre="Sci-Fi"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 min-h-[40px]"
        >
          Sci-Fi
        </button>
        <button
          data-genre="History"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 min-h-[40px]"
        >
          History
        </button>
        <button
          data-genre="Business"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 min-h-[40px]"
        >
          Business
        </button>
        <button
          data-genre="Psychology"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 min-h-[40px]"
        >
          Psychology
        </button>
        <button
          data-genre="Philosophy"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 min-h-[40px]"
        >
          Philosophy
        </button>
        <button
          data-genre="Fiction"
          className="filter-genre shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 min-h-[40px]"
        >
          Fiction
        </button>
      </div>
    </div>
  );
}
