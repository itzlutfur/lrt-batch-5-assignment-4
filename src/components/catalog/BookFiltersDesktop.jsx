export default function BookFiltersDesktop() {
  return (
    <aside
      id="sidebar-filters"
      className="hidden lg:block w-full lg:w-72 bg-[#111111] border border-neutral-800 rounded-2xl p-6 shadow-xl flex-shrink-0 lg:sticky lg:top-28 transition-all"
    >
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
        <div className="flex items-center gap-2 text-white">
          <svg
            className="w-5 h-5 text-[#0077BC]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <polygon
              points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
              strokeWidth="2.5"
            />
          </svg>
          <h2 className="font-display text-base tracking-wide uppercase">
            Filters
          </h2>
        </div>
        <button
          id="btn-reset-filters"
          className="text-xs font-mono-code font-bold text-neutral-400 hover:text-[#DC2626] transition-colors cursor-pointer"
        >
          Reset All
        </button>
      </div>

      {/* <!-- Filter by Category / Genre (All 8 Categories) --> */}
      <div className="mb-6">
        <label className="font-mono-code text-xs uppercase font-bold text-neutral-400 tracking-wider block mb-3">
          Category / Genre
        </label>
        <div className="flex flex-wrap gap-2" id="genre-filter-group">
          <button
            data-genre="all"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-[#0077BC] text-white border-[#0077BC]"
          >
            All Genres
          </button>
          <button
            data-genre="Tech"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            Tech
          </button>
          <button
            data-genre="Productivity"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            Productivity
          </button>
          <button
            data-genre="Sci-Fi"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            Sci-Fi
          </button>
          <button
            data-genre="History"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            History
          </button>
          <button
            data-genre="Business"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            Business
          </button>
          <button
            data-genre="Psychology"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            Psychology
          </button>
          <button
            data-genre="Philosophy"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            Philosophy
          </button>
          <button
            data-genre="Fiction"
            className="filter-genre px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            Fiction
          </button>
        </div>
      </div>

      {/* <!-- Filter by Rating --> */}
      <div className="mb-6">
        <label className="font-mono-code text-xs uppercase font-bold text-neutral-400 tracking-wider block mb-3">
          Minimum Rating
        </label>
        <div className="space-y-2">
          <button
            data-rating="0"
            className="filter-rating w-full text-left px-3.5 py-2 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer flex items-center justify-between bg-[#0077BC] text-white border-[#0077BC]"
          >
            <span>Any Rating</span>
            <span>All</span>
          </button>
          <button
            data-rating="4.8"
            className="filter-rating w-full text-left px-3.5 py-2 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer flex items-center justify-between bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            <span className="flex items-center gap-1 text-amber-400">
              ★ ★ ★ ★ ★
            </span>
            <span>4.8+ Stars</span>
          </button>
          <button
            data-rating="4.6"
            className="filter-rating w-full text-left px-3.5 py-2 rounded-lg text-xs font-bold font-mono-code border transition-all cursor-pointer flex items-center justify-between bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700"
          >
            <span className="flex items-center gap-1 text-amber-400">
              ★ ★ ★ ★ ☆
            </span>
            <span>4.6+ Stars</span>
          </button>
        </div>
      </div>

      {/* <!-- Helper Note --> */}
      <div className="p-4 bg-neutral-900/60 rounded-xl border border-neutral-800/80 text-[11px] text-neutral-400 leading-relaxed font-mono-code">
        <span className="text-[#009866] font-bold">PRO TIP:</span> Click "Add to
        Shelf" to organize your reading backlog.
      </div>
    </aside>
  );
}
