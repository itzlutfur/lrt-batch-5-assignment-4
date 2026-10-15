import ShelfItem from "./ShelfItem";

export default function ShelfItemList() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg text-white uppercase tracking-wider">
          Shelf Items
        </h2>
        <span className="text-xs font-mono-code text-neutral-400">
          Update progress to track milestones
        </span>
      </div>
      <ShelfItem />
    </section>
  );
}
