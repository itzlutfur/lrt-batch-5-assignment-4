export default function ShelfItem() {
  return (
    <div id="reading-list-grid" className="flex flex-col gap-4">
      {/* <!-- Shelf Item 1: Clean Code (Currently Reading - 75%) --> */}
      <div className="bg-[#111111] rounded-2xl border border-neutral-800 p-4 sm:p-6 flex flex-col lg:flex-row gap-5 lg:gap-6 items-start lg:items-center justify-between shadow-lg hover:border-neutral-700 transition-all">
        {/* <!-- Book Thumbnail & Info --> */}
        <div className="flex gap-4 sm:gap-5 items-center flex-1 w-full">
          <div className="w-16 h-24 sm:w-20 sm:h-28 bg-neutral-900 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center p-1 border border-neutral-800">
            <img
              src="assets/images/books/book-1.svg"
              alt="Clean Code"
              className="h-full w-auto object-contain rounded"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-[11px] sm:text-xs font-mono-code rounded font-medium">
                Tech
              </span>
              <span className="text-xs text-amber-400 font-mono-code font-bold">
                ★ 4.8
              </span>
            </div>
            <h3 className="font-display text-base sm:text-lg text-white mb-1 truncate">
              Clean Code
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 truncate">
              By <span className="text-neutral-200">Sumit Saha</span> • 2024
            </p>
          </div>
        </div>

        {/* <!-- Progress Controls & Visual Bar --> */}
        <div className="w-full lg:w-80 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-400 font-semibold uppercase tracking-wider">
              Reading Progress:
            </span>
            <span className="font-mono-code font-bold text-[#0077BC]">
              75% • Reading
            </span>
          </div>

          {/* <!-- Visual Progress Bar --> */}
          <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-500 rounded-full bg-[#0077BC]"
              style={{ width: "75%" }}
            ></div>
          </div>

          {/* <!-- Progress Select Dropdown & Remove Button for Mobile --> */}
          <div className="flex items-center gap-2 sm:gap-3 mt-1">
            <label className="text-xs text-neutral-400 shrink-0">Update:</label>
            <select
              data-reading-id="1"
              className="progress-select bg-neutral-900 border border-neutral-700 text-white text-xs rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-[#0077BC] focus:border-transparent outline-none flex-1 font-mono-code cursor-pointer min-h-[44px]"
            >
              <option value="0">0% - Not Started</option>
              <option value="25">25% - Begun</option>
              <option value="50">50% - Halfway</option>
              <option value="75" selected>
                75% - Finishing
              </option>
              <option value="100">100% - Completed</option>
            </select>
            <button
              data-reading-id="1"
              className="btn-remove-reading-item lg:hidden px-3.5 py-2.5 bg-neutral-900 hover:bg-[#DC2626] text-neutral-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-700 hover:border-red-600 flex items-center justify-center min-h-[44px] cursor-pointer"
              title="Remove from Shelf"
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Desktop Remove Action Button --> */}
        <div className="hidden lg:flex w-full lg:w-auto justify-end">
          <button
            data-reading-id="1"
            className="btn-remove-reading-item px-4 py-2.5 bg-neutral-900 hover:bg-[#DC2626] text-neutral-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-700 hover:border-red-600 flex items-center gap-2 cursor-pointer min-h-[44px]"
            title="Remove from Shelf"
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>

      {/* <!-- Shelf Item 2: Atomic Habits (Completed - 100%) --> */}
      <div className="bg-[#111111] rounded-2xl border border-neutral-800 p-4 sm:p-6 flex flex-col lg:flex-row gap-5 lg:gap-6 items-start lg:items-center justify-between shadow-lg hover:border-neutral-700 transition-all">
        {/* <!-- Book Thumbnail & Info --> */}
        <div className="flex gap-4 sm:gap-5 items-center flex-1 w-full">
          <div className="w-16 h-24 sm:w-20 sm:h-28 bg-neutral-900 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center p-1 border border-neutral-800">
            <img
              src="assets/images/books/book-2.svg"
              alt="Atomic Habits"
              className="h-full w-auto object-contain rounded"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-[11px] sm:text-xs font-mono-code rounded font-medium">
                Productivity
              </span>
              <span className="text-xs text-amber-400 font-mono-code font-bold">
                ★ 4.9
              </span>
            </div>
            <h3 className="font-display text-base sm:text-lg text-white mb-1 truncate">
              Atomic Habits
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 truncate">
              By <span className="text-neutral-200">Saad Hasan</span> • 2023
            </p>
          </div>
        </div>

        {/* <!-- Progress Controls & Visual Bar --> */}
        <div className="w-full lg:w-80 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-400 font-semibold uppercase tracking-wider">
              Reading Progress:
            </span>
            <span className="font-mono-code font-bold text-[#009866]">
              100% • ✓ Completed
            </span>
          </div>

          {/* <!-- Visual Progress Bar --> */}
          <div className="w-full h-2.5 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-500 rounded-full bg-[#009866]"
              style={{ width: "100%" }}
            ></div>
          </div>

          {/* <!-- Progress Select Dropdown & Remove Button for Mobile --> */}
          <div className="flex items-center gap-2 sm:gap-3 mt-1">
            <label className="text-xs text-neutral-400 shrink-0">Update:</label>
            <select
              data-reading-id="2"
              className="progress-select bg-neutral-900 border border-neutral-700 text-white text-xs rounded-xl px-3 py-2.5 focus:ring-2 focus:ring-[#0077BC] focus:border-transparent outline-none flex-1 font-mono-code cursor-pointer min-h-[44px]"
            >
              <option value="0">0% - Not Started</option>
              <option value="25">25% - Begun</option>
              <option value="50">50% - Halfway</option>
              <option value="75">75% - Finishing</option>
              <option value="100" selected>
                100% - Completed
              </option>
            </select>
            <button
              data-reading-id="2"
              className="btn-remove-reading-item lg:hidden px-3.5 py-2.5 bg-neutral-900 hover:bg-[#DC2626] text-neutral-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-700 hover:border-red-600 flex items-center justify-center min-h-[44px] cursor-pointer"
              title="Remove from Shelf"
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Desktop Remove Action Button --> */}
        <div className="hidden lg:flex w-full lg:w-auto justify-end">
          <button
            data-reading-id="2"
            className="btn-remove-reading-item px-4 py-2.5 bg-neutral-900 hover:bg-[#DC2626] text-neutral-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-neutral-700 hover:border-red-600 flex items-center gap-2 cursor-pointer min-h-[44px]"
            title="Remove from Shelf"
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
