import {useContext} from "react";
import { BookListContext } from "../../contexts";

export default function BookSorting() {
  const { bookList } = useContext(BookListContext);
  return (
    <div className="bg-[#111111] border border-neutral-800 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
      <div className="flex items-center gap-3">
        <span
          id="books-count"
          className="font-display text-sm sm:text-base text-white tracking-wide uppercase"
        >
          {bookList.count} Books available
        </span>
      </div>

      {/* <!-- Client Side Sorting Control (Requirement: Newest, Oldest, Rating) --> */}
      <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
        <label
          htmlFor="sort-select"
          className="text-xs font-mono-code uppercase font-bold text-neutral-400 shrink-0"
        >
          Sort By:
        </label>
        <div className="relative flex-1 sm:flex-initial">
          <select
            id="sort-select"
            className="w-full sm:w-auto appearance-none bg-neutral-900 border border-neutral-700 text-white text-xs font-mono-code font-bold rounded-xl pl-3.5 pr-8 py-2.5 focus:outline-none focus:border-[#0077BC] cursor-pointer min-h-[44px]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="rating">Top Rated</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-neutral-400">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
