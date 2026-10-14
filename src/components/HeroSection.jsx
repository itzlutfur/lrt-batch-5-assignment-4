export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#111111] via-[#0E0E0E] to-[#0A0A0A] border-b border-neutral-800 py-10 sm:py-14 lg:py-20">
      {/* <!-- Ambient Glow & Tech Grid --> */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(0,119,188,0.22),transparent)] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009866]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#0077BC_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* <!-- Left Column: Typography, Subtitle, Actions, Metrics --> */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* <!-- Live Indicator Badge --> */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#009866]/10 border border-[#009866]/30 text-[#009866] text-xs font-mono-code font-bold rounded-full mb-5 uppercase tracking-wider shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#009866] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#009866]"></span>
              </span>
              <span>Batch 5 Curated Reading Platform</span>
            </div>

            {/* <!-- Hero Headline --> */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.08] mb-4">
              Master The Craft. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077BC] via-[#38BDF8] to-[#009866]">
                One Page
              </span>{" "}
              At A Time.
            </h1>

            {/* <!-- Value Subtext --> */}
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8 font-normal">
              Explore 50 handpicked engineering classics, productivity
              breakthroughs, and timeless literature. Track reading progress in
              real time, filter by genre, and elevate your personal bookshelf.
            </p>

            {/* <!-- Primary & Secondary CTA Buttons --> */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8 sm:mb-10">
              <a
                href="#books-catalog"
                className="px-6 py-3.5 bg-[#0077BC] hover:bg-[#006097] text-white font-mono-code font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-[#0077BC]/30 hover:shadow-[#0077BC]/50 hover:-translate-y-0.5 transition-all min-h-[48px]"
              >
                <span>Explore 50 Books</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>

              <a
                href="reading-list.html"
                className="px-6 py-3.5 bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white font-mono-code font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider border border-neutral-700 flex items-center justify-center gap-2.5 hover:-translate-y-0.5 transition-all min-h-[48px]"
              >
                <svg
                  className="w-4 h-4 text-[#009866]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
                  />
                </svg>
                <span>My Reading Shelf</span>
                <span className="reading-list-count px-2 py-0.5 text-xs font-mono-code font-bold bg-[#009866] text-white rounded-full">
                  4
                </span>
              </a>
            </div>

            {/* <!-- Quick Metrics Bar --> */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-6 pt-6 border-t border-neutral-800/80 w-full max-w-xl">
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                  50
                </div>
                <div className="font-mono-code text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider">
                  Curated Titles
                </div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl text-[#0077BC] tracking-tight">
                  8
                </div>
                <div className="font-mono-code text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider">
                  Categories
                </div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl lg:text-3xl text-amber-400 tracking-tight">
                  4.7★
                </div>
                <div className="font-mono-code text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider">
                  Avg Rating
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="font-display text-xl sm:text-2xl lg:text-3xl text-[#009866] tracking-tight">
                  100%
                </div>
                <div className="font-mono-code text-[10px] sm:text-xs text-neutral-400 uppercase tracking-wider">
                  REST API Sync
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column: Interactive Featured Book Spotlight Card --> */}
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
                        <span className="text-white font-semibold">
                          Sumit Saha
                        </span>
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
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
        </div>
      </div>
    </section>
  );
}
