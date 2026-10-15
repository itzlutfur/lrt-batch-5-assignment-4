export default function ShelfPageHeader({setRoute}) {
  return (
    <section className="bg-gradient-to-b from-[#111111] to-[#0A0A0A] border-b border-neutral-800 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0077BC]/15 text-[#0077BC] border border-[#0077BC]/30 text-xs font-mono-code font-bold rounded-md mb-2 uppercase">
              Personal Shelf Tracking
            </div>
            <h1 className="font-display text-2xl sm:text-4xl text-white uppercase tracking-tight">
              My <span className="text-[#0077BC]">Shelf</span>
            </h1>
          </div>
          <div>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                setRoute("catalog");
              }}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl text-xs font-mono-code font-bold text-white transition-colors min-h-[44px]"
            >
              &larr; Back to Catalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
