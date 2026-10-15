import HeroSection from "./catalog/HeroSection";

export default function CatalogContainer() {
  return (
    <>
      <HeroSection />
      <main
        id="books-catalog"
        className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full scroll-mt-20"
      ></main>
    </>
  );
}
