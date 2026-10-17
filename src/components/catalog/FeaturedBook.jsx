export default function FeaturedBook() {
  return (
    <>
      <div className="lg:col-span-5 w-full">
        <div className="relative mx-auto max-w-md lg:max-w-none">
          {/* <!-- Glow background --> */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0077BC] to-[#009866] rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>

          <div className="relative bg-[#111111]/90 backdrop-blur-xl border border-neutral-700/80 rounded-2xl p-5 sm:p-6 shadow-2xl overflow-hidden">
            {/* <!-- Spotlight Header --> */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#009866]"></span>
                <span className="font-mono-code text-xs uppercase font-bold text-[#009866] tracking-wider">
                  Spotlight Pick
                </span>
              </div>
              <span className="font-mono-code text-xs text-neutral-400 font-semibold">
                Book #1
              </span>
            </div>

            {/* <!-- Book Spotlight Content (Clean Code) --> */}
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              {/* <!-- Book Cover Preview --> */}
              <div className="w-32 sm:w-36 h-48 sm:h-52 bg-neutral-900 rounded-xl overflow-hidden flex-shrink-0 shadow-lg border border-neutral-800 relative group/cover">
                <img
                  src="assets/images/clean-code.svg"
                  alt="Clean Code Cover"
                  className="w-full h-full object-contain"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 backdrop-blur text-white text-[10px] font-mono-code font-bold rounded">
                  Tech
                </span>
              </div>

              {/* <!-- Book Details --> */}
              <div className="flex-1 flex flex-col justify-between text-center sm:text-left h-full">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                    <span className="text-amber-400 text-xs font-bold font-mono-code flex items-center gap-1">
                      ★ 4.8
                    </span>
                    <span className="text-neutral-500 text-xs font-mono-code">
                      • 2024 Edition
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-white tracking-tight uppercase leading-snug mb-1">
                    Clean Code
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-medium mb-2">
                    By{" "}
                    <span className="text-white font-semibold">Sumit Saha</span>
                  </p>

                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed mb-4">
                    A handbook of agile software craftsmanship for building
                    clean, maintainable, and elegant code.
                  </p>
                </div>

                {/* <!-- Price & Action Button --> */}
                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                  <span className="font-mono-code font-bold text-base text-[#009866]">
                    $34.99
                  </span>
                  <button
                    id="hero-featured-btn"
                    data-book-id="1"
                    className="px-4 py-2.5 bg-neutral-800 hover:bg-[#DC2626] text-white border border-neutral-700 hover:border-red-600 rounded-lg text-xs font-mono-code font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-md cursor-pointer min-h-[40px]"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span>Remove from Shelf</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
