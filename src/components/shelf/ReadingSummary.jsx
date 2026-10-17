export default function ReadingSummary() {
  return (
    <section className="mb-10">
      <h2 className="font-display text-base sm:text-lg text-white uppercase tracking-wider mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-[#009866]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        Reading Summary
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {/* <!-- Total Books Card --> */}
        <div className="bg-[#111111] rounded-2xl border border-neutral-800 p-5 sm:p-6 flex items-center justify-between shadow-lg relative overflow-hidden group hover:border-neutral-700 transition-colors">
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#0077BC]"></div>
          <div>
            <p className="text-xs font-mono-code font-bold text-neutral-400 uppercase tracking-wider mb-1">
              Total Books
            </p>
            <p
              id="summary-total-books"
              className="font-display text-3xl sm:text-4xl text-white tracking-tight"
            >
              4
            </p>
          </div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-[#0077BC] border border-neutral-800">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        </div>

        {/* <!-- Currently Reading Card (1% - 99%) --> */}
        <div className="bg-[#111111] rounded-2xl border border-neutral-800 p-5 sm:p-6 flex items-center justify-between shadow-lg relative overflow-hidden group hover:border-neutral-700 transition-colors">
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#D97706]"></div>
          <div>
            <p className="text-xs font-mono-code font-bold text-neutral-400 uppercase tracking-wider mb-1">
              Currently Reading
            </p>
            <p
              id="summary-reading-books"
              className="font-display text-3xl sm:text-4xl text-[#D97706] tracking-tight"
            >
              2
            </p>
            <span className="text-[11px] font-mono-code text-neutral-500">
              Progress: 1% – 99%
            </span>
          </div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-[#D97706] border border-neutral-800">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* <!-- Completed Books Card (100%) --> */}
        <div className="bg-[#111111] rounded-2xl border border-neutral-800 p-5 sm:p-6 flex items-center justify-between shadow-lg relative overflow-hidden group hover:border-neutral-700 transition-colors">
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-[#009866]"></div>
          <div>
            <p className="text-xs font-mono-code font-bold text-neutral-400 uppercase tracking-wider mb-1">
              Completed Books
            </p>
            <p
              id="summary-completed-books"
              className="font-display text-3xl sm:text-4xl text-[#009866] tracking-tight"
            >
              1
            </p>
            <span className="text-[11px] font-mono-code text-neutral-500">
              Progress: 100%
            </span>
          </div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-[#009866] border border-neutral-800">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
