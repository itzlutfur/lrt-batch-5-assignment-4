import ReadingSummary from "./shelf/ReadingSummary";
import ShelfItemList from "./shelf/ShelfItemList";
import ShelfPageHeader from "./shelf/ShelfPageHeader";

export default function ShelfContainer({ setRoute }) {
  return (
    <>
      <ShelfPageHeader setRoute={setRoute} />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full">
        <ReadingSummary />
        <ShelfItemList />
      </main>
    </>
  );
}
