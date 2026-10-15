import BookCard from "./BookCard";

export default function BookList() {
  return (
    <div
      id="books-grid"
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
    >
      <BookCard />
    </div>
  );
}
