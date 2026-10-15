import { useState } from "react";

export default function BookCard() {
  const [inList, setInList] = useState(false);

  return (
    <article class="group bg-[#111111] rounded-xl border border-neutral-800/80 hover:border-[#0077BC] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#0077BC]/10 hover:-translate-y-1">
      {/* <!-- Book Cover Container --> */}
      <div class="relative bg-neutral-900 h-64 overflow-hidden flex items-center justify-center p-3">
        <img
          src="assets/images/books/book-1.svg"
          alt="Clean Code Book Cover"
          class="h-full w-auto max-w-full object-contain rounded-md shadow-md group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span class="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur text-white text-xs font-mono-code font-bold rounded border border-neutral-700">
          Tech
        </span>
        <span class="absolute top-3 right-3 px-2 py-1 bg-amber-500/90 text-black text-xs font-bold rounded flex items-center gap-1">
          <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          4.8
        </span>
      </div>

      {/* <!-- Content Details --> */}
      <div class="p-5 flex-1 flex flex-col">
        <div class="flex items-center justify-between gap-2 text-xs text-neutral-400 font-mono-code mb-1.5">
          <span>Year: 2024</span>
          <span class="text-[#009866] font-bold">$34.99</span>
        </div>

        <h3 class="font-display text-lg text-white group-hover:text-[#0077BC] transition-colors line-clamp-1 leading-snug mb-1">
          Clean Code
        </h3>

        <p class="text-sm font-medium text-neutral-400 mb-3">
          By <span class="text-neutral-200">Sumit Saha</span>
        </p>

        <p class="text-xs text-neutral-400/90 line-clamp-2 mb-4 leading-relaxed flex-1">
          A handbook of agile software craftsmanship for building clean,
          maintainable, and elegant code.
        </p>

        {/* <!-- Action Button --> */}
        {inList ? (
          <button
            onClick={() => setInList(!inList)}
            data-book-id="1"
            class="btn-toggle-reading-list w-full py-3 px-4 rounded-xl font-mono-code font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px] bg-neutral-800 hover:bg-[#DC2626] text-white border border-neutral-700 hover:border-red-600"
          >
            <svg
              class="w-4 h-4"
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
            </svg>{" "}
            Remove from Shelf
          </button>
        ) : (
          <button
            onClick={() => setInList(!inList)}
            data-book-id="17"
            className="btn-toggle-reading-list w-full py-3 px-4 rounded-xl font-mono-code font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer min-h-[44px] bg-[#0077BC] hover:bg-[#006097] text-white shadow-md hover:shadow-[#0077BC]/30"
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
                d="M12 4v16m8-8H4"
              />
            </svg>{" "}
            Add to Shelf
          </button>
        )}
      </div>
    </article>
  );
}
