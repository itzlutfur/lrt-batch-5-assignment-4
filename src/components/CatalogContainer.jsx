import BookFiltersDesktop from "./catalog/BookFiltersDesktop";
import BookFiltersMobile from "./catalog/BookFiltersMobile";
import BookList from "./catalog/BookList";
import BookSorting from "./catalog/BookSorting";
import HeroSection from "./catalog/HeroSection";


export default function CatalogContainer({ setRoute }) {

  return (
    <>
      <HeroSection setRoute={setRoute} />
      <main
        id="books-catalog"
        className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full scroll-mt-20"
      >
        <BookFiltersMobile />
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <BookFiltersDesktop />
          <section className="flex-1 w-full">
            <BookSorting />
            <BookList />
          </section>
        </div>
      </main>
    </>
  );
}
