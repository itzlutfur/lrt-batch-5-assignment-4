import DesktopSearchBar from "./components/DesktopSearchBar";
import MobileSearchBar from "./components/MobileSearchBar";

export default function Header({ route, setRoute }) {
  return (
    <header className="sticky top-0 z-40 bg-[#111111]/95 backdrop-blur-md border-b border-neutral-800 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
          {/* <!-- Logo & Brand Identity --> */}
          <a
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#0077BC] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#0077BC]/30 group-hover:scale-105 transition-transform">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M6 6h10" />
                <path d="M6 10h10" />
                <path d="M6 14h6" />
              </svg>
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl tracking-tight text-white block uppercase">
                BOOK<span className="text-[#0077BC]">SHELF</span>
              </span>
              <span className="font-mono-code text-[9px] sm:text-[10px] tracking-widest text-[#009866] uppercase font-bold block -mt-1">
                EXP-EDITION B5
              </span>
            </div>
          </a>

          {/* <!-- Desktop Search Bar with Debounce --> */}
          {route === "catalog" && <DesktopSearchBar />}

          {/* <!-- Navigation Links & Shelf Counter --> */}
          <nav className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="/catalog"
              onClick={(event) => {
                event.preventDefault();
                setRoute("catalog");
              }}
              className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-800 text-white border border-neutral-700 flex items-center gap-1.5 sm:gap-2 hover:bg-neutral-700 transition-colors"
            >
              <svg
                className="w-4 h-4 text-[#0077BC]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>Catalog</span>
            </a>

            <a
              href="/shelf"
              onClick={(event) => {
                event.preventDefault();
                setRoute("shelf");
              }}
              className="relative px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-all flex items-center gap-1.5 sm:gap-2"
            >
              <svg
                className="w-4 h-4 text-[#009866]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
                />
              </svg>
              <span>Shelf</span>
              <span className="reading-list-count inline-flex items-center justify-center px-2 py-0.5 text-xs font-mono-code font-bold bg-[#0077BC] text-white rounded-full transition-transform">
                4
              </span>
            </a>
          </nav>
        </div>

        {/* <!-- Mobile Search Bar (Full-width on mobile with clear button) --> */}
        {route === "catalog" && <MobileSearchBar />}
      </div>
    </header>
  );
}
